import { Component, css } from "../../../../Component.js";
import { SectionIntro } from "../section-intro/SectionIntro.js";

export class About extends Component {
  constructor() {
    super();

    css(import.meta, [
      "about.css"
    ]);
    
    this.template = /* html */`
      <section id="about">
        ${new SectionIntro("Get to Know More ", "About Me", true)}
        <div class="about__content">
          <div class="about__content__left">
            <p class="about__content__left__main">
              Hi, I'm <span>Sam Adrian P. Sabalo</span> — a multi-platform developer with years of development experience.
            </p>
            <p class="about__content__left__extra">
              I specialize mainly in Flutter, Web and Desktop Application Development, with AI technologies
            </p>
          </div>
          <div class="about__content__right">
            <p class="about__content__right__text">
              I am a freelance multi-platform developer with a focus on full-stack web, mobile, and desktop applications, delivering seamless experiences and integrating AI where it adds value.
            </p>
            <p class="about__content__right__text">
              I possess expertise in crafting desktop applications that offer a seamless user experience and efficient functionality.
            </p>
            <p class="about__content__right__text">
              I help develop aesthetically pleasing solutions that prioritize functionality and deliver a beautiful user interface.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}