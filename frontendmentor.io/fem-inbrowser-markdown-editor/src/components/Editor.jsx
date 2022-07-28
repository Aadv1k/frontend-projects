import { Component } from "react";

import style from "./Editor.module.css";

import { marked } from "marked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { preview: false };
    this.setPreviewState = this.setPreviewState.bind(this);
  }

  setPreviewState() {
    if (this.state.preview) {
      this.setState({ preview: false });
      return;
    }
    this.setState({ preview: true });
  }

  markedHtml(markdown) {
    return { __html: marked(markdown) };
  }

  render() {
    console.warn("RENDERED AGAIN");

    return (
      <section
        className={style.section}
        style={{
          marginLeft: this.props.drawer ? "250px" : "0",
        }}
      >
        <div className={style.previewBar}>
          <div className={style.title}>
            {this.state.preview ? "preview" : "markdown"}
          </div>
          <button
            type="button"
            className={style.eyebtn}
            onClick={this.setPreviewState}
          >
            <FontAwesomeIcon icon={this.state.preview ? faEyeSlash : faEye} />
          </button>
        </div>

        <div className={style.editors}>
          <div
            className={`${style.editor} ${
              this.state.preview ? style.triggerRev : style.mobileTrigger
            }`}
            onPaste={(e) => {
              const text = e.clipboardData.getData("text");
              setTimeout(() => {
                e.target.innerText = text;
              }, 10);
            }}
          >
            <textarea
              id="text"
              onInput={(e) => {
                const text = e.target.value;
                this.props.setDocumentState(
                  this.props.document.id,
                  this.props.document.name,
                  text
                );
              }}
              value={this.props.document.content}
            ></textarea>
          </div>

          <div
            className={`${style.preview} ${
              this.state.preview ? style.mobileTrigger : ""
            }`}
          >
            <div
              dangerouslySetInnerHTML={this.markedHtml(
                this.props.document.content
              )}
            ></div>
          </div>
        </div>
      </section>
    );
  }
}
