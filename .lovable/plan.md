
## Що буде створено

Веб-додаток зі слайд-каруселлю формату 1080×1440 (11 слайдів) у фірмовому стилі Ксенії Руснак: глибокий зелений + кремові нейтральні, шрифти Calmius Sans (заголовки) + Evolventa (тіло), декоративні арки/кола, зірка-іскра та лічильник у нижньому правому куті.

## Інтерфейс

- **Canvas по центру** — кожен слайд рендериться у фіксованих 1080×1440 px і масштабується через `transform: scale()` під вʼюпорт (зберігає пропорції на будь-якому екрані).
- **Бічна стрічка з мініатюрами** — клік перемикає слайд.
- **Нижня панель навігації** — стрілки ←/→, лічильник 01/11, кнопки Present (фулскрін) та Export.
- **Клавіатура** — ←/→ для навігації, F для фулскрін-режиму.
- **Експорт у PNG** — кнопка "Завантажити всі слайди" генерує 11 PNG 1080×1440 через `html-to-image` і завантажує zip.

## Дизайн-система (`src/styles.css`)

- Кольори: `--forest #2F4A3A`, `--sage #5B7A6A`, `--olive-light #B8C5A8`, `--cream #FFFBF3`, `--milk #F5F2EA`, `--ink #111111`, темний оверлей `rgba(0,0,0,0.5)`.
- Шрифти: `@font-face` з `Calmius Sans Low` та `Evolventa Bold` (підключаємо .otf із uploads). Body — fallback на `Evolventa`, для регулярного накреслення підвантажуємо Google `Manrope` як близький fallback (Evolventa-Bold — тільки bold).
- Спільні класи: `.slide` (1080×1440, overflow hidden), `.slide-title`, `.slide-body`, `.tag-bracket` ([хто я]), `.counter-pill`, `.spark` (4-променева зірка SVG), `.quote-box` (білий бокс з заокругленням 16px).

## Слайди (11 React-компонентів у `src/slides/`)

1. **Cover** — Тип Г (темний абстрактний фон з туманом + зелений overlay). Великий заголовок "10 РОЗБОРІВ ДУШНИХ МІФІВ" + підзаголовок "про трафік, ШІ та високі чеки". Тег `[карусель]` зверху, зірка внизу праворуч (без лічильника).
2-11. **Міфи 1–10** — Тип Б (зелений суцільний фон #5B7A6A) і Тип В (кремовий) чергуються для ритму. Структура:
   - тег `[міф 01]` зверху ліворуч
   - заголовок міфу (Calmius UPPERCASE)
   - тіло тексту (Evolventa), ключові фрази в жирному / білому цитатному боксі
   - велика декоративна цифра «01–10» як background-акцент (низька opacity)
   - лічильник `02/11` + зірка у правому нижньому куті
12. (слайд 11) **CTA-фінал** — Тип А: AI-згенероване фото у quiet luxury стилі (жінка біля моря/природи) з темним оверлеєм. Заголовок міфу 10 + білий CTA-бокс "Напишіть у директ слово АУДИТ".

## Фото та графіка

- 9 додаткових AI-зображень (`imagegen--generate_image`, fast) у єдиній естетиці quiet luxury / олива-зелень / природне світло. Збережемо у `src/assets/slides/`.
- Абстрактний темний AI-фон для обкладинки (туман, частинки, зелений підтон).
- SVG: 4-променева зірка-іскра, велика арка/коло як background decoration на кожному слайді.

## Шрифти

- Скопіюємо `Calmius Sans Low.otf` та `Evolventa-Bold.otf` у `public/fonts/` та підключимо через `@font-face` у `styles.css`.

## Структура файлів

```
src/
  routes/index.tsx          // editor app
  components/
    SlideCanvas.tsx         // scaled 1080×1440 wrapper
    SlideNav.tsx            // strip + arrows + counter
    SlideChrome.tsx         // counter pill + spark + tag
    ExportButton.tsx        // PNG export via html-to-image
  slides/
    Slide01Cover.tsx ... Slide11CTA.tsx
    slidesIndex.ts          // array of slide components + meta
  assets/slides/*.jpg       // 9–10 generated images
public/fonts/
  CalmiusSansLow.otf
  Evolventa-Bold.otf
styles.css                  // tokens, fonts, .slide classes
```

## Технічні нотатки

- Залежності: `html-to-image`, `jszip`, `file-saver` (для експорту в zip).
- Фіксований 1080×1440 → масштабування через CSS змінну `--scale`, що оновлюється з `ResizeObserver`.
- Все на фронтенді, без бекенду.

Після підтвердження я згенерую зображення, підключу шрифти, побудую дизайн-систему і всі 11 слайдів.
