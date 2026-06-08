import { createFileRoute } from "@tanstack/react-router";
import { SlideEditor } from "@/components/SlideEditor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ксенія Руснак — 10 міфів | Карусель" },
      { name: "description", content: "Карусель 1080×1440 з 11 слайдів про маркетингові міфи в фірмовому стилі." },
      { property: "og:title", content: "Ксенія Руснак — 10 міфів" },
      { property: "og:description", content: "Карусель 1080×1440 з 11 слайдів про маркетингові міфи." },
    ],
  }),
  component: Index,
});

function Index() {
  return <SlideEditor />;
}
