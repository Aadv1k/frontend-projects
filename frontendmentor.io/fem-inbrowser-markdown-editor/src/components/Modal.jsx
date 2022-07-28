import { Component } from "react";
import style from "./Modal.module.css";

export default class extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.modal}>
          <div>
            <h2> Are you sure you want to delete "{this.props.docName}"?</h2>
            <p>This action cannot be undone.</p>
          </div>

          <div className={style.btns}>
            <button
              className={style.yes}
              onClick={() => {
                this.props.setModalDeleteState();
                this.props.setModalState();
              }}
            >
              delete
            </button>
            <button className={style.no} onClick={this.props.setModalState}>
              cancel
            </button>
          </div>
        </div>
        <div className={style.overlay}></div>
      </div>
    );
  }
}
