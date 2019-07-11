export class Accordion {
  constructor(elDefault, elAlone) {
    this.elAccordions = elDefault || document.querySelectorAll('[data-accordion=""]');
    this.elAccordionsAlone = elAlone || document.querySelectorAll('[data-accordion="alone"]');

    // normal
    Array.from(this.elAccordions, elAccordion => {
      this.eventHandler(elAccordion);
    });

    // alone
    Array.from(this.elAccordionsAlone, elAccordion => {
      this.eventHandler(elAccordion);
    });
  }

  eventHandler(elAccordion) {
    const elHeader = elAccordion.querySelector('[data-accordion-header]');
    const enableAloneOption = elAccordion.dataset.accordion === 'alone';

    elHeader.addEventListener('click', e => {
      e.preventDefault();
      this.toggleAriaExpanded(elHeader);

      // data-accordion が alone
      if (!enableAloneOption) return;
      Array.from(this.elAccordionsAlone, el => {
        if (elAccordion === el) return;
        const elAloneHeader = el.querySelector('[data-accordion-header]');
        if (elAloneHeader.getAttribute('aria-expanded') === 'true') {
          this.toggleAriaExpanded(elAloneHeader);
        }
      });
    });
  }

  toggleAriaExpanded(element) {
    element.setAttribute('aria-expanded', element.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  }
}
