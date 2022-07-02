import { Component } from "react";

import kb1Mobile from "../images/mobile/image-phone-and-keyboard.jpg";
import kb2Mobile from "../images/mobile/image-glass-and-keyboard.jpg";

import kb1Tablet from "../images/tablet/image-phone-and-keyboard.jpg";
import kb2Tablet from "../images/tablet/image-glass-and-keyboard.jpg";

import kb1Desktop from "../images/desktop/image-phone-and-keyboard.jpg";
import kb2Desktop from "../images/desktop/image-glass-and-keyboard.jpg";


import "./Info.css";

export default class extends Component {
  render() {
    return (
      <section className="info">

        <div className="info__imgs">
          <div className="info__img kb1">

            <picture>
              <source media="(min-width: 650px)" srcSet={kb1Tablet}></source>
              <source media="(min-width: 800px)" srcSet={kb1Desktop}></source>
              <img src={kb1Mobile} alt="mobile" />
            </picture>

          </div>

          <div className="info__img kb2">
            <picture>
              <source media="(min-width: 650px)" srcSet={kb2Tablet}></source>
              <source media="(min-width: 800px)" srcSet={kb2Desktop}></source>
              <img src={kb2Mobile} alt="mobile" />
            </picture>
          </div>


        </div>

          <div className="info__content">
            <h2>mechanical wireless keyboard</h2> 
            <p>
              Sit voluptatem ea culpa illum a Possimus quidem voluptatibus vel
              adipisci quae Enim nemo quod eaque minus doloribus. Nam expedita
            </p>
          </div>


      </section>
    );
  }
}
