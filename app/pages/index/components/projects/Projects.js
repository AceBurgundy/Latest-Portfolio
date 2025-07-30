import { Component, css } from "../../../../Component.js";
import { SectionIntro } from "../section-intro/SectionIntro.js";

export class Projects extends Component {
  constructor() {
    super();

    css(import.meta, ["projects.css"]);

    this.template = /* html */ `
      <section id="projects">
        ${new SectionIntro("Proud Moments", "Projects")}
      </section>
    `;
  }
}
