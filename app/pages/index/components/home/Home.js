import { Component, css } from "../../../../Component.js";
import { SmallButton } from "../../../../components/common/buttons/SmallButton.js";

export class Home extends Component {
  constructor(navigation) {
    super();

    css(import.meta, [
      "home.css"
    ]);
           
    this.scripts = () => {
      const skillsDisplay = document.getElementById("hero-skills");
      const skills = [
        "Full Stack Web Developer",
        "Desktop App Developer",
        "Mobile App Developer"
      ];
    
      let index = 0;
    
      setInterval(() => {
        index = (index + 1) % skills.length;
        skillsDisplay.textContent = skills[index];
      }, 3000);
    }    

    this.template = /* html */`
      <section id="home">
        <nav>
          <img src="app/static/images/logo.png" alt="SAM" id="logo">
          <ul>
            ${
              navigation.map(
                item => `<li><a href="#${item}">${item.charAt(0).toUpperCase() + item.slice(1)}</a></li>`
              ).join("")
            }
          </ul>
          ${new SmallButton("Hire Me")}
        </nav>
        <div class="hero">
          <p id="hero-skills" class="hero__skills">Full Stack Web Developer</p>
          <p class="hero__name">
            SAM ADRIAN <br>P. SABALO
          </p>
          <p class="hero__address">
            based in General Santos City, Philippines.
          </p>
        </div>
      </section>
    `;
  }
}