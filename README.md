# @hiro0218/accordion.js

## install

```
npm install -D @hiro0218/accordion.js
```

## usage

### HTML

```html
<div data-accordion>
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
    transition: max-height 0.1s linear;
  }

  // close
  [aria-expanded="false"] {}

  // open
  [aria-expanded="true"] {
    & ~ [data-accordion-container] {
      max-height: 200vh;
      transition: max-height 0.6s ease;
    }
  }
}
```

### JS

```js
import Accordion from '@hiro0218/accordion.js';
new Accordion();
```

```js
// Opening and closing moves independently.
new Accordion(document.querySelectorAll(".accordion-default [data-accordion]"));

// Opening and closing interlocks.
new Accordion(
  document.querySelectorAll(".accordion-interlocking [data-accordion]"),
  true
);
```
