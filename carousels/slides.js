/* ============================================================
   Ksenia Rusnak — Carousel content
   "Автоматизація вбиває довіру" · 8 slides · 1080×1440
   Backgrounds alternate across the palette (forest / sage / light / photo).
   Each slide is plain HTML built on the design-system .slide-* classes.
   ============================================================ */
(function () {
  const I = window.CAROUSEL_IMG || {};
  const spark =
    '<svg class="footer-spark" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 0 C17 11 21 15 32 16 C21 17 17 21 16 32 C15 21 11 17 0 16 C11 15 15 11 16 0 Z" fill="currentColor"></path></svg>';

  // §4 footer — every slide except the cover
  const footer = (n) =>
    `<div class="slide-footer">
      <span class="footer-handle">@ksenia.rusnak</span>
      <span class="footer-rule"></span>
      <span class="footer-counter">${String(n).padStart(2, "0")}/08</span>
      <span class="footer-rule footer-rule--short"></span>
      ${spark}
    </div>`;

  const SLIDES = [
    /* ---------- 01 · COVER (photo) ---------- */
    {
      label: "Обкладинка",
      cls: "slide dark-overlay",
      style: "",
      inner: `
        <img class="cover-photo" src="${I.coverBg}" alt="">
        <div class="corner-frame" style="top:64px; left:64px; border-right:none; border-bottom:none;"></div>
        <div class="corner-frame" style="bottom:64px; right:64px; border-left:none; border-top:none;"></div>
        <div class="slide-padding" style="justify-content:flex-end;">
          <div style="position:absolute; top:0; left:0;"><span class="sage-chip">маркетинг · довіра</span></div>
          <div class="eyebrow-serif" style="margin-bottom:28px;">автоматизація проти людяності</div>
          <h1 class="slide-title" style="font-size:104px; margin:0; max-width:880px;">
            Ти збудував воронку. А клієнт відчув себе номером у&nbsp;CRM
          </h1>
          <p class="lede" style="margin-top:40px; max-width:740px;">
            Система працює бездоганно. Ось тільки людина на іншому боці цього не відчуває.
          </p>
        </div>`,
    },

    /* ---------- 02 · ПРОБЛЕМА (forest) ---------- */
    {
      label: "Проблема",
      cls: "slide slide-bg-forest",
      style: "",
      inner: `
        <div class="ghost-numeral" style="right:-70px; bottom:-210px;">01</div>
        <div class="arc-deco" style="width:1300px; height:1300px; left:-480px; top:-460px;"></div>
        <div class="slide-padding">
          <div><span class="sage-chip">проблема · 01</span></div>
          <h2 class="slide-title" style="margin-top:60px; font-size:78px; max-width:900px;">
            Автоматизація — не погано. Погано, коли вона замінює людину
          </h2>
          <p class="slide-body" style="margin-top:44px; max-width:880px; opacity:0.94;">
            Ти підключив чат-бот, прописав скрипти, налаштував автовідповіді. Система
            <strong>відповідає за 3 секунди</strong>. Не спить. Не забуває. Але на іншому боці
            людина написала з реальним болем — і отримала шаблон.
          </p>
          <div class="quote-box" style="margin-top:auto; max-width:880px;">
            Вона вже вибирала між тобою і конкурентом. Після такої відповіді вибір зроблено — не на твою користь.
          </div>
        </div>
        ${footer(2)}`,
    },

    /* ---------- 03 · ПРЕМІУМ (sage + photo) ---------- */
    {
      label: "Позиціювання",
      cls: "slide slide-bg-sage",
      style: "",
      inner: `
        <div class="ghost-numeral" style="left:-90px; bottom:-230px; opacity:0.10; color:var(--forest-deep);">02</div>
        <div class="slide-padding">
          <div><span class="sage-chip on-sage">позиціювання · 02</span></div>
          <div style="display:flex; gap:56px; margin-top:56px; flex:1; min-height:0;">
            <div style="flex:1 1 0; display:flex; flex-direction:column;">
              <h2 class="slide-title" style="font-size:70px; margin:0;">Преміум руйнується саме тут</h2>
              <p class="slide-body" style="margin-top:36px; font-size:31px;">
                Ідеальний сайт, сильний офер, гарний контент. Але якщо у директі — холодний скрипт і
                <em>«Дякуємо за звернення, менеджер звʼяжеться з вами»</em>, ти щойно став схожим на банк.
              </p>
              <div class="quote-box" style="margin-top:auto; font-size:32px;">
                Люди не платять преміум бездушним системам. Вони платять тим, хто їх чує&nbsp;→
              </div>
            </div>
            <div class="photo-col" style="flex:0 0 312px;"><img src="${I.photo3}" alt=""></div>
          </div>
        </div>
        ${footer(3)}`,
    },

    /* ---------- 04 · 3 МІСЦЯ (forest · pills) ---------- */
    {
      label: "Діагностика",
      cls: "slide slide-bg-forest",
      style: "",
      inner: `
        <div class="arc-deco" style="width:1100px; height:1100px; right:-420px; bottom:-380px;"></div>
        <div class="slide-padding">
          <div><span class="sage-chip">діагностика · 03</span></div>
          <h2 class="slide-title" style="margin-top:56px; font-size:76px; max-width:880px;">
            3 місця, де автоматизація вбиває довіру
          </h2>
          <div class="stack-gap" style="margin-top:auto;">
            <div class="numbered-pill" style="align-items:flex-start;">
              <span class="numbered-pill__num">01</span>
              <span class="numbered-pill__text" style="font-size:27px;">
                <strong>Перший дотик у директі.</strong> Шаблонне вітання замість живої реакції — і людина вже закрила діалог.
              </span>
            </div>
            <div class="numbered-pill" style="align-items:flex-start;">
              <span class="numbered-pill__num">02</span>
              <span class="numbered-pill__text" style="font-size:27px;">
                <strong>Відповідь на заперечення.</strong> «Я подумаю» — це не кінець, а запрошення до діалогу. Скрипт цього не чує.
              </span>
            </div>
            <div class="numbered-pill" style="align-items:flex-start;">
              <span class="numbered-pill__num">03</span>
              <span class="numbered-pill__text" style="font-size:27px;">
                <strong>Після покупки.</strong> Автоматичний «дякуємо» без живого контакту — і клієнт не повертається.
              </span>
            </div>
          </div>
        </div>
        ${footer(4)}`,
    },

    /* ---------- 05 · ПОРІВНЯННЯ (light) ---------- */
    {
      label: "Порівняння",
      cls: "slide slide-bg-light-grad",
      style: "",
      inner: `
        <div class="slide-padding">
          <div><span class="sage-chip">порівняння · 04</span></div>
          <h2 class="slide-title" style="margin-top:44px; font-size:58px; color:var(--forest); max-width:860px;">
            Система без людини <span class="slide-accent" style="text-transform:none; font-size:0.78em;">vs</span> система з людиною
          </h2>
          <div style="margin-top:28px;">
            <div class="cmp-block">
              <div class="cmp-row"><span class="cmp-dot cmp-dot--no"></span>
                <div><div class="cmp-tag">система</div><div class="cmp-no">«Доброго дня! Чим можу допомогти?» — однаково всім, у будь-який час.</div></div></div>
              <div class="cmp-row"><span class="cmp-dot cmp-dot--yes"></span>
                <div><div class="cmp-tag" style="color:var(--sage); opacity:1;">людина</div><div class="cmp-yes">«Бачу, ти давно читаєш — є конкретне питання чи розбираємось разом?»</div></div></div>
            </div>
            <div class="cmp-block">
              <div class="cmp-row"><span class="cmp-dot cmp-dot--no"></span>
                <div><div class="cmp-tag">система</div><div class="cmp-no">Прайс у відповідь на «скільки коштує».</div></div></div>
              <div class="cmp-row"><span class="cmp-dot cmp-dot--yes"></span>
                <div><div class="cmp-tag" style="color:var(--sage); opacity:1;">людина</div><div class="cmp-yes">Два запитання, щоб зрозуміти ситуацію — і тоді цифра зі змістом.</div></div></div>
            </div>
            <div class="cmp-block">
              <div class="cmp-row"><span class="cmp-dot cmp-dot--no"></span>
                <div><div class="cmp-tag">система</div><div class="cmp-no">Автовідповідь о 23:00 з обіцянкою відповісти «у робочий час».</div></div></div>
              <div class="cmp-row"><span class="cmp-dot cmp-dot--yes"></span>
                <div><div class="cmp-tag" style="color:var(--sage); opacity:1;">людина</div><div class="cmp-yes">Коротке живе повідомлення вранці — і клієнт відчуває, що його чекали.</div></div></div>
            </div>
          </div>
          <div class="grad-plate" style="margin-top:auto; padding:30px 40px;">
            <span class="slide-accent" style="font-size:31px; line-height:1.28;">
              Різниця не в ресурсах. Різниця в тому, що ти вирішив автоматизувати.
            </span>
          </div>
        </div>
        ${footer(5)}`,
    },

    /* ---------- 06 · ПРИНЦИП (sage · duo) ---------- */
    {
      label: "Принцип",
      cls: "slide slide-bg-sage",
      style: "",
      inner: `
        <div class="ghost-numeral" style="right:-70px; bottom:-210px; opacity:0.10; color:var(--forest-deep);">05</div>
        <div class="slide-padding">
          <div><span class="sage-chip on-sage">принцип · 05</span></div>
          <h2 class="slide-title" style="margin-top:56px; font-size:84px;">Автоматизуй процес.<br>Не стосунок</h2>
          <div class="duo" style="margin-top:56px;">
            <div class="duo-card duo-card--yes">
              <div class="duo-head">можна і треба</div>
              <div class="duo-list">Підтвердження<br>Нагадування<br>Доступи та рахунки<br>Відповіді на FAQ</div>
            </div>
            <div class="duo-card duo-card--no">
              <div class="duo-head">не можна передати боту</div>
              <div class="duo-list">Перший діалог<br>Момент сумніву<br>«А чи підійде це мені?»<br>Відповідь на заперечення</div>
            </div>
          </div>
          <div class="quote-box" style="margin-top:auto; max-width:920px;">
            Якщо людина ставить особисте питання — відповідай особисто. Преміум-сегмент не терпить відчуття конвеєра.
          </div>
        </div>
        ${footer(6)}`,
    },

    /* ---------- 07 · КЕЙС (forest + photo) ---------- */
    {
      label: "Кейс",
      cls: "slide slide-bg-forest",
      style: "",
      inner: `
        <div class="slide-padding">
          <div><span class="sage-chip">кейс · 06</span></div>
          <div class="photo-col" style="margin-top:40px; height:300px; flex:0 0 auto;">
            <img src="${I.photo5}" alt="" style="object-position:center 35%;">
          </div>
          <h2 class="slide-title" style="margin-top:40px; font-size:60px; max-width:880px;">
            Один приклад, який я бачу регулярно
          </h2>
          <p class="slide-body" style="margin-top:28px; font-size:29px;">
            Налаштована воронка, реклама, непоганий контент. Заявки є — а конверсія в оплату низька.
            У директі: холодні відповіді, затримки по 6–8 годин, шаблони без жодного уточнення.
            Ми не змінили офер. Просто повернули <strong>живу комунікацію</strong> на першому контакті.
          </p>
          <div class="quote-box" style="margin-top:auto; font-size:33px;">
            За три тижні конверсія з переписки в оплату зросла вдвічі. Воронка була правильною — не вистачало людини всередині.
          </div>
        </div>
        ${footer(7)}`,
    },

    /* ---------- 08 · CTA (photo) ---------- */
    {
      label: "CTA · фінал",
      cls: "slide dark-overlay",
      style: "",
      inner: `
        <img class="bleed-photo" src="${I.photoCta}" alt="">
        <div class="corner-frame" style="top:64px; right:64px; border-left:none; border-bottom:none;"></div>
        <div class="slide-padding">
          <div><span class="sage-chip">дія</span></div>
          <div style="margin-top:auto;">
            <div class="eyebrow-serif" style="margin-bottom:24px;">маркетинг — це не лише трафік і контент</div>
            <h2 class="slide-title" style="font-size:88px; margin:0; max-width:880px;">Напиши в директ слово «Система»</h2>
            <p class="lede" style="margin-top:36px; max-width:800px;">
              Це кожна точка, де клієнт вирішує: довіряю чи ні. Подивимося разом, де твоя система втрачає людей —
              і що змінити без перебудови з нуля.
            </p>
            <div style="margin-top:44px; display:inline-flex; align-items:center; gap:18px; padding:22px 40px; border-radius:22px; background:var(--bone); color:var(--ink);">
              <span class="slide-accent" style="font-size:36px;">@ksenia.rusnak</span>
              <span style="font-size:40px;">→</span>
              <span style="font-family:var(--font-body); font-size:26px; letter-spacing:0.22em; text-transform:uppercase;">система</span>
            </div>
          </div>
        </div>
        ${footer(8)}`,
    },
  ];

  window.CAROUSEL_SLIDES = SLIDES;
})();
