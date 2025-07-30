import { Component, css } from "../../../../Component.js";
import { SectionIntro } from "../section-intro/SectionIntro.js";

export class FAQ extends Component {
  constructor() {
    super();

    css(import.meta, [
      "faq.css"
    ]);

    this.template = /* html */ `
      <section id="faq">
        ${new SectionIntro("Need Clarity?", "Frequently Asked Questions")}
      </section>
    `;
  }
}
