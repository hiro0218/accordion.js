export default class Accordion {
  constructor(elDefault, interlocking = false) {
    this.event = 'ontouchstart' in window ? 'touchstart' : 'click';

    this.elAccordions = elDefault || document.querySelectorAll('[data-accordion]');
    this.interlocking = interlocking;

    Array.from(this.elAccordions, elAccordion => {
      const elHeader = elAccordion.querySelector('[data-accordion-header]');

      this.eventHandler(elHeader);
    });
  }

  eventHandler(elHeader) {
    elHeader.addEventListener(this.event, e => {
      e.preventDefault();

      const nextElement = e.target.nextElementSibling;
      nextElement.classList.toggle('is-animated');

      this.toggleAriaExpanded(elHeader);

      // 連動式
      if (this.interlocking) {
        // インスタンス時に取得したアコーディオン要素を精査する
        Array.from(this.elAccordions, el => {
          // クリックした要素だったら抜ける
          if (e.target.parentNode === el) return;

          // アコーディオンのヘッダーを取得
          const elAloneHeader = el.querySelector('[data-accordion-header]');
          if (elAloneHeader.getAttribute('aria-expanded') === 'true') {
            this.toggleAriaExpanded(elAloneHeader);
          }

          const nextElement = elAloneHeader.nextElementSibling;
          nextElement.classList.toggle('is-animated');
        });
      }
    });
  }

  toggleAriaExpanded(element) {
    element.setAttribute('aria-expanded', element.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  }
}
