import { Component, css } from "../../../../Component.js";
import { SectionIntro } from "../section-intro/SectionIntro.js";

export class Services extends Component {
  constructor() {
    super();

    css(import.meta, [
      "services.css"
    ]);

    this.template = /* html */ `
      <section id="services">
        ${new SectionIntro("What I Offer", "Services")}
      </section>
    `;
  }
}
