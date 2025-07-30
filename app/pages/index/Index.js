import { Component, css } from '../../Component.js';
import { About } from './components/about/About.js';
import { Contact } from './components/contact/Contact.js';
import { FAQ } from './components/faq/FAQ.js';
import { Home } from './components/home/Home.js';
import { Projects } from './components/projects/Projects.js';
import { Services } from './components/services/Services.js';

export class Index extends Component {
  constructor() {
    super();

    css(import.meta, ['index.css']);

    // Components mapped by name for cleaner logic
    const componentMap = {
      home: Home,
      about: About,
      services: Services,
      projects: Projects,
      faq: FAQ,
      contact: Contact,
    };

    const toDisplay = ['home', 'about', 'services', 'projects', 'faq', 'contact'];

    // Render only the components that are in toDisplay
    const renderedComponents = toDisplay.map((key) => {
      const ComponentClass = componentMap[key];
      return key === 'home'
        ? new ComponentClass(toDisplay).template
        : new ComponentClass().template;
    });

    this.template = /* html */`
      <main class="index">
        ${renderedComponents.join('\n')}
      </main>
    `;
  }
}
