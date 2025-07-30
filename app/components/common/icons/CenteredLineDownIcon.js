import { Component, css } from '../../../Component.js';

export class CenteredLineDownIcon extends Component {
  constructor() {
    super();

    css(import.meta, [
      "styles/icons.css"
    ])

    this.template = /* html */`
      <div class="centered-icon padded-icon-small-vertical">
        <svg class="faded-icon-light line-down-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 1v47" stroke="currentColor" stroke-width="2" fill="none" />
        </svg>
      </div>
    `;
  }
}