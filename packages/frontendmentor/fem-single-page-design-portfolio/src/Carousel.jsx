import React, { Component } from "react";

import style from "./Carousel.module.scss";

import slide1 from "./images/image-slide-1.jpg";
import slide2 from "./images/image-slide-2.jpg";
import slide3 from "./images/image-slide-3.jpg";
import slide4 from "./images/image-slide-4.jpg";
import slide5 from "./images/image-slide-5.jpg";

import arrow1 from "./images/icon-arrow-left.svg";
import arrow2 from "./images/icon-arrow-right.svg";

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

  componentDidMount() {
    window.addEventListener("resize", this.setThumbSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setThumbSize);
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

  setThumbSize() {
    const { thumbSize } = this.state;
    const n = window.innerWidth > 800 ? 450 : 300;
    if (n !== thumbSize) {
      this.setState({ thumbSize: n });
    }
  }

  render() {
    return (
      <section className={style.Carousel}>
        <h2>My Work</h2>
        <ul
          className={style.Slider}
          // eslint-disable-next-line react/destructuring-assignment
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

        <div className={style.CarouselBtn}>
          <button
            onClick={() => this.setSlider(this.state.thumbSize)}
            className={style.round}
            type="button"
          >
            <img src={arrow1} alt="<-" />
          </button>
          <button
            onClick={() => this.setSlider(-1 * this.state.thumbSize)}
            className={style.round}
            type="button"
          >
            <img src={arrow2} alt="->" />
          </button>
        </div>
      </section>
    );
  }
}
