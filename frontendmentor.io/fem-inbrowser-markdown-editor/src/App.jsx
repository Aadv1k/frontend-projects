import { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import Editor from "./components/Editor.jsx";

import "./App.css";

// Works ¯\_(ツ)_/¯heigh
// TODO: Use context here
window.matchMedia("(prefers-color-scheme: light)").matches
  ? document.getElementsByTagName("html")[0].setAttribute("data-theme", "light")
  : document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      document: {},
      documents: [],
    };
  }

  setDrawerState() {
    if (this.state.drawer) {
      this.setState({ drawer: false });
      return;
    }
    this.setState({ drawer: true });
  }

  setDocumentState(id, name, content, lastOpened) {
    if (lastOpened === undefined) {
      lastOpened = true;
    }

    this.setState({
      document: {
        id: id,
        name: name,
        content: content,
        lastOpened: lastOpened,
      },
    });
  }

  setDocumentsState(arr) {
    this.setState({ documents: arr });
  }

  UNSAFE_componentWillMount() {
    const data = JSON.parse(localStorage.getItem("document"));
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

  render() {
    this.state.drawer
      ? (document.getElementById("root").style.overflow = "hidden")
      : (document.getElementById("root").style.overflow = "auto");
    return (
      <>
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
      </>
    );
  }
}
