/* eslint-disable react/jsx-no-bind */
import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Editor from "./components/Editor";

import ThemeContext from "./contexts/ThemeContext";

import "./App.css";

// Works ¯\_(ツ)_/¯heigh
// TODO: Use context here

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      document: {},
      documents: [],
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    };
  }

  UNSAFE_componentWillMount() {
    let data = JSON.parse(localStorage.getItem("document"));
    if (data === null) {
      localStorage.setItem("document", "[]");
      data = JSON.parse(localStorage.getItem("document"));
    }

    this.setState({
      document:
        data.length === 0
          ? {
              content:
                "# Welcome to markdown editor!\nOpen the 🍔 to create a new doc",
              id: "1",
              name: "",
            }
          : data.find((e) => e.lastOpened === true),
      documents: data,
    });
  }

  setDocumentsState(arr) {
    this.setState({ documents: arr });
  }

  setDocumentState(id, name, content, lastOpened) {
    if (lastOpened === undefined) {
      // eslint-disable-next-line no-param-reassign
      lastOpened = true;
    }

    this.setState({
      document: {
        id,
        name,
        content,
        lastOpened,
      },
    });
  }

  setDrawerState() {
    const { drawer } = this.state;
    if (drawer) {
      this.setState({ drawer: false });
      return;
    }
    this.setState({ drawer: true });
  }

  render() {
    if (this.state.drawer) {
      document.getElementById("root").style.overflow = "hidden";
    } else {
      document.getElementById("root").style.overflow = "auto";
    }

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Navbar
          setDrawerState={this.setDrawerState.bind(this)}
          drawer={this.state.drawer}
          setDocumentState={this.setDocumentState.bind(this)}
          setDocumentsState={this.setDocumentsState.bind(this)}
          document={this.state.document}
          documents={this.state.documents}
        />
        <Editor
          drawer={this.state.drawer}
          setDocumentState={this.setDocumentState.bind(this)}
          document={this.state.document}
        />
      </ThemeContext.Provider>
    );
  }
}
