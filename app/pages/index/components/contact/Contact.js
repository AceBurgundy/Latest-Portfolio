import { Component, css } from "../../../../Component.js";
import { SectionIntro } from "../section-intro/SectionIntro.js";

export class Contact extends Component {
  constructor() {
    super();

    css(import.meta, [
      "contact.css"
    ]);

    this.template = /* html */ `
      <section id="contact">
        ${new SectionIntro("Let's talk business!", "Contact Me")}
      </section>
    `;
  }
}
