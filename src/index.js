export default class Accordion {
  constructor(elDefault, interlocking = false) {
    this.elAccordions = elDefault || document.querySelectorAll('[data-accordion]');
    this.interlocking = interlocking;

    Array.from(this.elAccordions, elAccordion => {
      this.eventHandler(elAccordion);
    });
  }

  eventHandler(elAccordion) {
    const elHeader = elAccordion.querySelector('[data-accordion-header]');

    elHeader.addEventListener('click', () => {
      this.toggleAriaExpanded(elHeader);

      // 連動式
      if (this.interlocking) {
        // インスタンス時に取得したアコーディオン要素を精査する
        Array.from(this.elAccordions, el => {
          // クリックした要素だったら抜ける
          if (elAccordion === el) return;

          // アコーディオンのヘッダーを取得
          const elAloneHeader = el.querySelector('[data-accordion-header]');
          if (elAloneHeader.getAttribute('aria-expanded') === 'true') {
            this.toggleAriaExpanded(elAloneHeader);
          }
        });
      }
    });
  }

  toggleAriaExpanded(element) {
    element.setAttribute('aria-expanded', element.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  }
}
