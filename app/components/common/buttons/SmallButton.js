import { Component, css } from '../../../Component.js';
const uniqueID = () => Math.random().toString(36).substring(2, 10);

export class SmallButton extends Component {
  /**
   * 
   * @param {String} text - The text to be displayed 
   */
  constructor(text, onClick = () => {}) {
    super();

    css(import.meta, [
      "styles/small-button.css"
    ])

    const id = uniqueID();
    this.scripts = () => {
      const button = document.getElementById(id);

      if (button) {
        button.addEventListener('click', onClick);
      }
    }

    this.template = /* html */`
      <button id="${id}" class="button-small">
        ${text || ''}
      </button>
  `;
  }
}
