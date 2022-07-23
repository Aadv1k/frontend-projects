import { Component } from "react";
import "./PricingToggle.css";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="toggle flex flex-col items-center">
        <input
          className="absolute -top-[99999px]"
          aria-label="hidden"
          id="toggle"
          type="checkbox"
        />

        <label
          className="block w-[45px] h-[26px] relative bg-gradient-to-r from-skyBlue to-deepBlue rounded-full"
          onClick={this.props.setToggledState}
          htmlFor="#toggle"
        >
          <span
            className={` toggle__ball absolute w-[20px] h-[20px] rounded-full bg-white ${
              this.props.toggled ? "animate" : "animate-rev"
            } } `}
          ></span>
        </label>
      </div>
    );
  }
}
