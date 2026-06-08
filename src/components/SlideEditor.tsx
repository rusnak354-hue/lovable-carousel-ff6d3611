import { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import JSZip from "jszip";
import FileSaver from "file-saver";
const { saveAs } = FileSaver;
import PptxGenJS from "pptxgenjs";
import { SlideCanvas } from "./SlideCanvas";
import { slideRenderers, TOTAL_SLIDES } from "@/slides/slidesData";
import { buildTextPptx } from "@/lib/pptxTextExport";

const btnStyle: React.CSSProperties = {
  background: "#2a2e2c",
  color: "var(--cream)",
  border: "1px solid #3a3e3c",
  borderRadius: 8,
  padding: "8px 14px",
  cursor: "pointer",
  fontFamily: "var(--font-body)",
  fontSize: 14,
};

export function SlideEditor() {
  const [current, setCurrent] = useState(0);
  const [exporting, setExporting] = useState(false);
  const [exportingPptx, setExportingPptx] = useState(false);
  const [exportingPptxText, setExportingPptxText] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setCurrent((c) => Math.min(TOTAL_SLIDES - 1, c + 1));
      if (e.key === "ArrowLeft") setCurrent((c) => Math.max(0, c - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const renderSlide = (i: number) => slideRenderers[i](i + 1, TOTAL_SLIDES);

  const exportAll = async () => {
    setExporting(true);
    try {
      const zip = new JSZip();
      for (let i = 0; i < TOTAL_SLIDES; i++) {
        const node = document.getElementById(`export-slide-${i}`);
        if (!node) continue;
        const dataUrl = await toPng(node, {
          width: 1080,
          height: 1440,
          pixelRatio: 1,
          cacheBust: true,
        });
        const blob = await (await fetch(dataUrl)).blob();
        zip.file(`slide-${String(i + 1).padStart(2, "0")}.png`, blob);
      }
      const out = await zip.generateAsync({ type: "blob" });
      saveAs(out, "ksenia-rusnak-carousel.zip");
    } finally {
      setExporting(false);
    }
  };

  const exportPptx = async () => {
    setExportingPptx(true);
    try {
      const pptx = new PptxGenJS();
      // 1080x1440 px @ 96dpi = 11.25" x 15"
      pptx.defineLayout({ name: "IG_1080x1440", width: 11.25, height: 15 });
      pptx.layout = "IG_1080x1440";
      pptx.title = "Ксенія Руснак — 10 міфів";

      for (let i = 0; i < TOTAL_SLIDES; i++) {
        const node = document.getElementById(`export-slide-${i}`);
        if (!node) continue;
        const dataUrl = await toPng(node, {
          width: 1080,
          height: 1440,
          pixelRatio: 2,
          cacheBust: true,
        });
        const slide = pptx.addSlide();
        slide.background = { data: dataUrl };
      }

      await pptx.writeFile({ fileName: "ksenia-rusnak-carousel.pptx" });
    } finally {
      setExportingPptx(false);
    }
  };

  const exportPptxText = async () => {
    setExportingPptxText(true);
    try {
      await buildTextPptx();
    } finally {
      setExportingPptxText(false);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#1a1d1b", color: "var(--cream)" }}>
      <aside
        style={{
          width: 180,
          padding: 16,
          overflowY: "auto",
          background: "#141716",
          borderRight: "1px solid #2a2e2c",
          flexShrink: 0,
        }}
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              display: "block",
              width: "100%",
              aspectRatio: "1080 / 1440",
              marginBottom: 12,
              border: i === current ? "2px solid #b8c5a8" : "2px solid transparent",
              borderRadius: 6,
              background: "#0e1110",
              overflow: "hidden",
              cursor: "pointer",
              padding: 0,
              position: "relative",
            }}
            aria-label={`Перейти на слайд ${i + 1}`}
          >
            <div style={{ position: "absolute", inset: 0 }}>
              <SlideCanvas>{renderSlide(i)}</SlideCanvas>
            </div>
            <span
              style={{
                position: "absolute",
                bottom: 4,
                left: 6,
                fontSize: 11,
                color: "#b8c5a8",
                background: "rgba(0,0,0,0.5)",
                padding: "2px 6px",
                borderRadius: 4,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </aside>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header
          style={{
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #2a2e2c",
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Ксенія Руснак — 10 міфів
            </div>
            <div style={{ fontSize: 13, opacity: 0.6, marginTop: 2 }}>
              1080 × 1440 · {TOTAL_SLIDES} слайдів
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} style={btnStyle}>
              ←
            </button>
            <span style={{ fontSize: 14, opacity: 0.75, minWidth: 60, textAlign: "center" }}>
              {String(current + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
            </span>
            <button
              onClick={() => setCurrent((c) => Math.min(TOTAL_SLIDES - 1, c + 1))}
              style={btnStyle}
            >
              →
            </button>
            <button
              onClick={exportAll}
              disabled={exporting}
              style={{
                ...btnStyle,
                background: "#b8c5a8",
                color: "#1a1d1b",
                fontWeight: 600,
                marginLeft: 12,
              }}
            >
              {exporting ? "Експорт…" : "Завантажити PNG (zip)"}
            </button>
            <button
              onClick={exportPptx}
              disabled={exportingPptx}
              style={{
                ...btnStyle,
                background: "var(--cream)",
                color: "#1a1d1b",
                fontWeight: 600,
              }}
            >
              {exportingPptx ? "PPTX…" : "Завантажити PPTX (для Canva)"}
            </button>
            <button
              onClick={exportPptxText}
              disabled={exportingPptxText}
              style={{
                ...btnStyle,
                background: "transparent",
                color: "var(--cream)",
                border: "1px solid var(--cream)",
              }}
            >
              {exportingPptxText ? "PPTX…" : "PPTX (редагований текст)"}
            </button>
          </div>
        </header>

        <div style={{ flex: 1, padding: 32, minHeight: 0 }}>
          <SlideCanvas>{renderSlide(current)}</SlideCanvas>
        </div>
      </main>

      <div
        style={{
          position: "fixed",
          left: -100000,
          top: 0,
          pointerEvents: "none",
        }}
        aria-hidden
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <div key={i} id={`export-slide-${i}`} style={{ width: 1080, height: 1440 }}>
            {renderSlide(i)}
          </div>
        ))}
      </div>
    </div>
  );
}