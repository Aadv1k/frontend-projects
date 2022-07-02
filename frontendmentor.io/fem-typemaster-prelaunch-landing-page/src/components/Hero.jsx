import { Component } from "react";
import KeyboardImg from "../images/desktop/image-keyboard.jpg"
import "./Hero.css"

export default class extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            typemaster keyboard
          </h1>

          <p>
            Amet inventore voluptatum distinctio repellat quod, eligendi!
            Numquam reprehenderit voluptas dolorum impedit obcaecati? Culpa amet
          </p>

          <div className="hero__btn">
            <div className="btn btn--primary hero__cta">pre-order now</div>
          </div>
        </div>

          <div className="hero__img">
          <img src={KeyboardImg} alt="kb" />
        </div>
      </section>
    )
  }
}
