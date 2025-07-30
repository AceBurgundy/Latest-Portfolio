import { Component, css } from "../../../../Component.js";
import { CenteredArrowDownIcon } from "../../../../components/common/icons/CenteredArrowDownIcon.js";
import { CenteredLineDownIcon } from "../../../../components/common/icons/CenteredLineDownIcon.js";

export class SectionIntro extends Component {
      
  /**
   * A starting point for a section
   * 
   * @param {string} title  - A short title
   * @param {string} titleContinue - Main title
   * @param {boolean} arrowed - Weather this section must have an arrow or not
   * @returns {string}
   */
  constructor(title, titleContinue, arrowed = false) {
    super();

    css(import.meta, [
      "section-intro.css"
    ])

    this.template = /* html */`
      ${arrowed ? new CenteredArrowDownIcon() : ''}
      <div class="section-intro">
        <p class="section-intro-title">${title}</p>
        <p class="section-intro-title-cont">${titleContinue}</p>
      </div>
      ${new CenteredLineDownIcon()}
    `;
  }
}