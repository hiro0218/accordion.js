export default class Accordion {
  constructor(elDefault, interlocking = false) {
    this.event = "ontouchstart" in window ? "touchstart" : "click";

    this.elAccordions =
      elDefault || document.querySelectorAll("[data-accordion]");
    this.interlocking = interlocking;

    for (let i = 0; i < this.elAccordions.length; i++) {
      const elHeader = this.elAccordions[i].querySelector(
        "[data-accordion-header]"
      );
      this.eventHandler(elHeader);
    }
  }

  eventHandler(elHeader) {
    elHeader.addEventListener(this.event, e => {
      e.preventDefault();

      // const nextElement = e.target.nextElementSibling;
      // nextElement.classList.toggle("is-animated");

      this.toggleAriaExpanded(elHeader);

      // 連動式
      if (this.interlocking) {
        // インスタンス時に取得したアコーディオン要素を精査する
        for (let i = 0; i < this.elAccordions.length; i++) {
          // クリックした要素だったら抜ける
          if (e.target.parentNode === this.elAccordions[i]) continue;

          // アコーディオンのヘッダーを取得
          const elAloneHeader = this.elAccordions[i].querySelector(
            "[data-accordion-header]"
          );
          // const nextElement = elAloneHeader.nextElementSibling;
          // nextElement.classList.toggle("is-animated");

          if (elAloneHeader.getAttribute("aria-expanded") === "true") {
            this.toggleAriaExpanded(elAloneHeader);
          }
        }
      }
    });
  }

  toggleAriaExpanded(element) {
    element.setAttribute(
      "aria-expanded",
      element.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  }
}
