Slide pagination mark — hairline pill with zero-padded "current / total". Sits in the slide chrome footer; inherits `currentColor`.

```jsx
<CounterPill index={3} total={11} />   // → 03 — 11
```

Place inside a colored wrapper so it picks up `cream` on dark slides or `forest` on light ones.
