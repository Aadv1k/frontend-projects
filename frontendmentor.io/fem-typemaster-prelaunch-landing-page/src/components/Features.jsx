import { Component } from "react";
import "./Features.css";

import icnTv from "../images/shared/icon-compatible.svg";
import icnBt from "../images/shared/icon-bluetooth.svg";
import icnBat from "../images/shared/icon-battery.svg";
import icnLig from "../images/shared/icon-light.svg";

export default class extends Component {
  render() {
    return (
      <section className="features">
        <div>
          <h3>highly compatible</h3>
          <p>
            Ipsum dolor voluptatem nemo modi molestiae voluptas Tempora deserunt
            nobis quaerat saepe veritatis excepturi? Debitis unde vel voluptate
          </p>
        </div>

        <div>
          <h3>wireless with bluetooth</h3>
          <p>
            Ipsum dolor voluptatem nemo modi molestiae voluptas Tempora deserunt
            nobis quaerat saepe veritatis excepturi? Debitis unde vel voluptate
          </p>
        </div>
        <div>
          <h3>high capacity battery</h3>
          <p>
            Ipsum dolor voluptatem nemo modi molestiae voluptas Tempora deserunt
            nobis quaerat saepe veritatis excepturi? Debitis unde vel voluptate
          </p>
        </div>
        <div>
          <h3>rgb backlit modes</h3>
          <p>
            Ipsum dolor voluptatem nemo modi molestiae voluptas Tempora deserunt
            nobis quaerat saepe veritatis excepturi? Debitis unde vel voluptate
          </p>
        </div>
      </section>
    );
  }
}
