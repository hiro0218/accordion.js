import "./src/index.scss";
import Accordion from "./src/index";

new Accordion(document.querySelectorAll(".accordion-default [data-accordion]"));

new Accordion(
  document.querySelectorAll(".accordion-interlocking [data-accordion]"),
  true
);
