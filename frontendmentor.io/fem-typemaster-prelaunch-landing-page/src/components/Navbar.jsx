import { Component } from "react";
import "./Navbar.css";
import Logo from "../images/shared/logo.svg"

export default class extends Component {
  render() {
    return (
      <nav className="navbar">
        <span className="nav__logo">
          <img src={Logo} alt="TM" />
        </span>
        <button className="btn btn--secondary">pre-order now</button>
      </nav>
    )
  }
}
