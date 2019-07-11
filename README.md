# @hiro0218/accordion.js

## install

```
npm install -D @hiro0218/accordion.js
```

## usage

### HTML

Opening and closing moves independently.

```html
<div data-accordion>
  <h2 data-accordion-header aria-expanded="false">TITLE</h2>
  <div data-accordion-container>
    CONTENTS
  </div>
</div>
```

---

Opening and closing interlocks.

```html
<div data-accordion="alone">
  <h2 data-accordion-header aria-expanded="false">TITLE</h2>
  <div data-accordion-container>
    CONTENTS
  </div>
</div>
```

### CSS

```scss
[data-accordion] {
  [data-accordion-header] {
    cursor: pointer;
    user-select: none;
  }
  
  [data-accordion-container] {
    overflow-y: hidden;
    max-height: 0;
    transition: max-height 0.6s ease;
  }

  // close
  [aria-expanded="false"] {}

  // open
  [aria-expanded="true"] {
    & ~ [data-accordion-container] {
      max-height: 200vh;
    }
  }
}
```
