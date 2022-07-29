import { Component } from "react";
import propTypes from "prop-types";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const max = this.props.planMax;

    return (
      <div
        className={`card ${
          max
            ? "bg-gradient-to-b from-skyBlue to-deepBlue sm:(transform scale-110)"
            : "bg-white"
        } flex flex-col items-center gap-2 py-8 rounded-md shadow-livid-200 shadow-lg sm:w-[30%]`}
      >
        <h2
          className={`${
            max ? "text-white" : "text-livid-300"
          } capitalize text-md`}
        >
          {this.props.planType}
        </h2>

        <div
          className={`${
            max ? "text-white" : "text-livid-400"
          } flex items-center  gap-1`}
        >
          <span className="text-3xl">$</span>
          <span className="text-6xl">{this.props.planCost}</span>
        </div>

        <ul className="flex flex-col items-center text-center divide-y divide-livid-200 w-[80%]">
          {this.props.planFeatures.map((elem, i) => {
            return (
              <li
                className={`${
                  max ? "text-white" : "text-livid-400"
                } text-sm py-4 px-6 w-full`}
                key={i}
              >
                {elem}
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className={`${
            max
              ? "bg-white text-deepBlue border-2 border-white border-opacity-50 border-solid hover:(text-white bg-transparent)"
              : "bg-gradient-to-r from-skyBlue to-deepBlue text-white border-2 border-skyBlue border-opacity-50 border-solid hover:(text-deepBlue bg-none )"
          } w-[80%] transition duration-200 py-3 rounded-md uppercase tracking-wide text-xs`}
        >
          Learn More
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  planType: propTypes.string.isRequired,
  planCost: propTypes.number.isRequired,
  planFeatures: propTypes.arrayOf(propTypes.string).isRequired,
  planMax: propTypes.bool,
};

export default Card;
