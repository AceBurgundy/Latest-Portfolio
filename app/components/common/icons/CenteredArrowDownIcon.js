import { Component, css } from '../../../Component.js';

export class CenteredArrowDownIcon extends Component {
  constructor() {
    super();

    css(import.meta, [
      "styles/icons.css"
    ])

    this.template = /* html */`
      <div class="centered-icon padded-icon-top-large">
        <svg class="faded-icon-hard arrow-down-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
            <path d="m33.707 39.707-1.414-1.414L26 44.586V1h-2v43.586l-6.293-6.293-1.414 1.414L25 48.414z"></path>
        </svg>
      </div>
    `;
  }
}