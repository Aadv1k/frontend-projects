/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from "react";

import style from "./App.module.scss";
import imgAmy from "./images/image-amy.webp";

import Carousel from "./Carousel";

export default class extends Component {
  render() {
    return (
      <>
        <nav className={style.Nav}>
          <div />
          <button className={style.blackBtn} type="button">
            free consultation
          </button>
        </nav>
        <section className={style.Head}>
          <h1>Design solutions made easy</h1>
          <p>
            Adipisicing itaque ex soluta facilis voluptatum debitis? Provident
            consequuntur tempore placeat dolorum rem
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
          ].map((e) => (
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
              onMouseLeave={(elem) => {
                // eslint-disable-next-line no-param-reassign
                elem.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
              }}
            >
              <strong>{e}</strong>
            </li>
          ))}
        </ul>

        <section className={style.About}>
          <img src={imgAmy} alt="" />
          <div>
            <h2>
              Hi I am john doe and would love to work on your next project
            </h2>
            <p>
              Adipisicing itaque ex soluta facilis voluptatum debitis? Provident
              consequuntur tempore placeat dolorum rem dignissimos
            </p>
            <button className={style.redBtn} type="button">
              free consultation
            </button>
          </div>
        </section>

        <Carousel />

        <section className={style.Book}>
          <div>
            <h2>Book a call with me</h2>
            <p>
              Consectetur tenetur architecto natus fugit corrupti Ipsum
              consequuntur quidem sit illo quae blanditiis? Repudiandae{" "}
            </p>
          </div>

          <button className={style.redBtn} type="button">
            Free Consultation
          </button>
        </section>

        <footer className={style.Nav}>
          <div />
          <button className={style.blackBtn} type="button">
            free consultation
          </button>
        </footer>
      </>
    );
  }
}
