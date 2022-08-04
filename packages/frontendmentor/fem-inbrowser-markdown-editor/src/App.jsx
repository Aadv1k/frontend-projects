/* eslint-disable react/jsx-no-bind */
import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import AppDrawer from "./components/AppDrawer";

import ThemeContext from "./contexts/ThemeContext";
import DocumentContext from "./contexts/DocumentContext";

import "./App.css";

// Works ¯\_(ツ)_/¯heigh
// TODO: Use context here

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      document: {
        content: "",
        id: "",
        name: "",
      },
      documents: [],
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    };
    this.inpRef = React.createRef();
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("document"));
    if (data === null) {
      localStorage.setItem("document", "[]");
      data = JSON.parse(localStorage.getItem("document"));
    }
    if (data.length !== 0) {
      this.setState({
        document: data.find((e) => e.lastOpened === true),
        documents: data,
      });
    }
  }

  setTheme() {
    if (this.state.theme === "dark") {
      this.setState({ theme: "light" });
      return;
    }
    this.setState({ theme: "dark" });
  }

  setDocumentsState(arr) {
    this.setState({ documents: arr });
  }

  setDocumentState(id, name, content, lastOpened = true) {
    this.setState({
      document: { id, name, content, lastOpened },
    });
  }

  setDrawerState() {
    this.setState({ drawer: !this.state.drawer });
  }

  saveDocumentToLocalStorage(content, id, name, lastOpened = true) {
    const data = JSON.parse(localStorage.getItem("document"));
    if (data) {
      data.push({ id, name, content, lastOpened });
      localStorage.setItem("document", JSON.stringify(data));
      this.setDocumentsState(JSON.parse(localStorage.getItem("document")));
      return { id, name, content };
    }
    localStorage.setItem("document", "[]");
    return -1;
  }

  render() {
    return (
      <ThemeContext.Provider
        value={[this.state.theme, this.setTheme.bind(this)]}
      >
        <AppDrawer
          drawer={this.state.drawer}
          setDrawerState={this.setDrawerState.bind(this)}
          documents={this.state.documents}
          setDocumentState={this.setDocumentState.bind(this)}
          setDocumentsState={this.setDocumentsState.bind(this)}
          document={this.state.document}
          saveDocument={this.saveDocumentToLocalStorage.bind(this)}
          inputRef={this.inpRef}
        />

        <section
          style={{
            marginLeft: this.state.drawer ? "250px" : "0",
            width: this.state.drawer ? "100%" : "auto",
            transition: "margin 200ms ease-in",
          }}
        >
          <Navbar
            setDrawerState={this.setDrawerState.bind(this)}
            drawer={this.state.drawer}
            setDocumentState={this.setDocumentState.bind(this)}
            setDocumentsState={this.setDocumentsState.bind(this)}
            document={this.state.document}
            documents={this.state.documents}
            setRef={this.inpRef}
          />

          <Editor
            drawer={this.state.drawer}
            setDocumentState={this.setDocumentState.bind(this)}
            document={this.state.document}
          />
        </section>
      </ThemeContext.Provider>
    );
  }
}
