import React, { Component } from "react";
import uuid from "react-uuid";
import style from "./AppDrawer.module.css";
import ThemeContext from "../contexts/ThemeContext";

import Toggle from 'react-toggle';
import "react-toggle/style.css"

export default class extends Component {
  componentDidUpdate() {
    this.props.drawer
      ? (document.getElementById("root").style.overflow = "hidden")
      : (document.getElementById("root").style.overflow = "auto");
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          return <div>
        <div
          className={style.drawer}
          style={{
            transform: !this.props.drawer
              ? "translateX(-250px)"
              : "translateX(0)",
          }}
        >
          <ul className={style.ul}>
            {this.props.documents.map((e, i) => (
              <li
                key={i}
                onClick={() => {
                  this.props.setDrawerState();
                  this.props.setDocumentState(e.id, e.name, e.content, true);

                  const data = this.props.documents.map((elem) => {
                    if (elem.id !== e.id) {
                      return {
                        name: elem.name,
                        content: elem.content,
                        id: elem.id,
                        lastOpened: false,
                      };
                    }

                    return {
                      name: elem.name,
                      content: elem.content,
                      id: elem.id,
                      lastOpened: true,
                    };
                  });

                  this.props.setDocumentsState(data);
                  localStorage.setItem("document", JSON.stringify(data));
                  this.props.inputRef.current.value = "";
                }}
              >
                <span>{e.name}</span>
                <span>{`${e.content.slice(0, 20)}...`}</span>
              </li>
            ))}
          </ul>

                <div className={style.bottom}>


                <button
                  type="button"
                  className={style.btn}
                  onClick={() => {
                    const id = uuid();
                    const content = "# Welcome to the markdown editor";
                    const name = "untitled.md";

                    this.props.saveDocument(content, id, name, true);
                    this.props.setDocumentState(id, name, content, true);
                    this.props.setDrawerState();
                    this.props.inputRef.current.value = "";
                  }}
                >
                  New Document
                </button>

                <Toggle 
                  icons={false}
                  defaultChecked={theme === "dark" ? true : false}
                  onChange={setTheme}
                  />
              </div>
        </div>
        <div className={style.overlay} />
      </div>
        }}

      </ThemeContext.Consumer>

    );
  }
}
