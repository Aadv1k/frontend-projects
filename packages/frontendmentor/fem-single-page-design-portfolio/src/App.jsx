import { Component } from "react";
import imgAmy from "./images/image-amy.webp";
import slide1 from "./images/image-slide-1.jpg";
import slide2 from "./images/image-slide-2.jpg";
import slide3 from "./images/image-slide-3.jpg";
import slide4 from "./images/image-slide-4.jpg";
import slide5 from "./images/image-slide-5.jpg";

import arrow1 from "./images/icon-arrow-left.svg";
import arrow2 from "./images/icon-arrow-right.svg";

import style from "./App.module.scss";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 0,
      thumbSize: window.innerWidth > 800 ? 450 : 300,
    };

    this.setSlider = this.setSlider.bind(this);
    this.setThumbSize = this.setThumbSize.bind(this);
  }

  setSlider(step) {
    const { slider, thumbSize } = this.state;

    if (slider === thumbSize * 2 || slider === -1 * (thumbSize * 2)) {
      this.setState({
        slider: 0,
      });
      return;
    }
    this.setState({
      slider: slider + step,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.setThumbSize);
  }

  setThumbSize() {
    let n = window.innerWidth > 800 ? 450 : 300;
    if (n !== this.state.thumbSize) {
      this.setState({ thumbSize: n });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setThumbSize);
  }
  render() {
    return (
      <>
        <nav className={style.Nav}>
          <div className="logo"></div>
          <button className={style.btnBlack} type="button">
            free consultation
          </button>
        </nav>
        <section className={style.Head}>
          <h1>Design solutions made easy</h1>
          <p>
            Adipisicing itaque ex soluta facilis voluptatum debitis? Provident
            consequuntur tempore placeat dolorum rem{" "}
          </p>
        </section>

        <ul className={style.SkillMosaic}>
          {[
            "Graphic Design",
            "UI/UX",
            "Apps",
            "Illustrations",
            "Photography",
            "Motion Graphics",
          ].map((e) => {
            return (
              <li
                key={Math.round(Math.random() * 10000)}
                onMouseOver={(event) => {
                  if (window.matchMedia("(max-width: 800px)").matches) {
                    return;
                  }

                  const card = event.currentTarget;
                  const cardWidth = card.offsetWidth;
                  const cardHeight = card.offsetHeight;
                  const centerX = card.offsetLeft + cardWidth / 2;
                  const centerY = card.offsetTop + cardHeight / 2;
                  const mouseX = event.clientX - centerX;
                  const mouseY = event.clientY - centerY;

                  const rotateX = (5 * mouseX) / (cardWidth / 2);
                  const rotateY = (5 * mouseY) / (cardHeight / 2);
                  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                }}
              >
                <strong>{e}</strong>
              </li>
            );
          })}
        </ul>

        <section className={style.About}>
          <img src={imgAmy} alt="image of a girl?" />
          <div>
            <h2>
              Hi I am john doe and would love to work on your next project
            </h2>
            <p>
              Adipisicing itaque ex soluta facilis voluptatum debitis? Provident
              consequuntur tempore placeat dolorum rem dignissimos
            </p>
            <button className={style.btnRed} type="button">
              free consultation
            </button>
          </div>
        </section>

        <section className={style.Carousal}>
          <h2>My Work</h2>
          <ul
            className={style.Slider}
            style={{ transform: `translateX(${this.state.slider}px)` }}
          >
            <li>
              <img src={slide1} alt="" />
            </li>

            <li>
              <img src={slide2} alt="" />
            </li>
            <li>
              <img src={slide3} alt="" />
            </li>

            <li>
              <img src={slide4} alt="" />
            </li>
            <li>
              <img src={slide5} alt="" />
            </li>
          </ul>

          <div className={style.CarousalBtn}>
            <button
              onClick={() => this.setSlider(this.state.thumbSize)}
              className={style.round}
            >
              <img src={arrow1} alt="<-" />
            </button>
            <button
              onClick={() => this.setSlider(-1 * this.state.thumbSize)}
              className={style.round}
            >
              <img src={arrow2} alt="->" />
            </button>
          </div>
        </section>

        <section className={style.Book}>
          <div>
            <h2>Book a call with me</h2>
            <p>
              Consectetur tenetur architecto natus fugit corrupti Ipsum
              consequuntur quidem sit illo quae blanditiis? Repudiandae{" "}
            </p>
          </div>

          <button className={style.btnRed}>Free Consultation</button>
        </section>

        <footer className={style.Nav}>
          <div className="logo"></div>
          <button className={style.btnBlack} type="button">
            free consultation
          </button>
        </footer>
      </>
    );
  }
}
