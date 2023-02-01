import React, { Component } from "react";
import "./Dashboard.scss";
import { addDataToAPI, getDataFromAPI } from "../../../config/redux/action";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    date: "",
    textButton: "SIMPAN",
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    this.props.getNotes(userData);
  }

  handleSaveNotes = () => {
    const { title, content } = this.state;
    const { saveNotes } = this.props;
    const userData = JSON.parse(localStorage.getItem("userData"));

    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: userData.uid,
    };

    saveNotes(data);
    console.log(data);
    alert("Data Berhasil Disimpan!");
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  updateNotes = (note) => {
    this.setState({
      title: note.data.title,
      content: note.data.content,
      textButton: "UPDATE",
    });
  };

  cancelNotes = () => {
    this.setState({
      title: "",
      content: "",
      textButton: "SIMPAN",
    });
  };

  render() {
    const { title, content, date } = this.state;
    return (
      <div className="conteiner">
        <div className="input-form">
          <input
            placeholder="title"
            className="input-title"
            value={title}
            onChange={(e) => this.onInputChange(e, "title")}
          />
          <textarea
            placeholder="content"
            className="input-content"
            value={content}
            onChange={(e) => this.onInputChange(e, "content")}
          ></textarea>
          <div className="action-wrapper">
            {this.state.textButton === "UPDATE" ? (
              <button className="save-btn cancel" onClick={this.cancelNotes}>
                CANCEL
              </button>
            ) : (
              <div />
            )}
            <button className="save-btn" onClick={this.handleSaveNotes}>
              {this.state.textButton}
            </button>
          </div>
        </div>

        <hr />

        {this.props.notes.length > 0 ? (
          <>
            {this.props.notes.map((note) => {
              return (
                <div
                  key={note.id}
                  className="card-content"
                  onClick={() => this.updateNotes(note)}
                >
                  <p className="title">{note.data.title}</p>
                  <p className="date">{note.data.date}</p>
                  <p className="content">{note.data.content}</p>
                  <hr />
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    );
  }
}

const reduxState = (state) => ({
  userData: state.user,
  notes: state.notes,
});

const reduxDispatch = (dispatch) => ({
  saveNotes: (data) => dispatch(addDataToAPI(data)),
  getNotes: (data) => dispatch(getDataFromAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
