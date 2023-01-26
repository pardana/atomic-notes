import React, { Component } from "react";
import "./Dashboard.scss";
import { addDataToAPI } from "../../../config/redux/action";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    date: "",
  };

  handleSaveNotes = () => {
    const { title, content } = this.state;
    const { saveNotes } = this.props;

    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: this.props.userData.uid,
    };

    saveNotes(data);
    console.log(data);
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
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
          <button className="save-btn" onClick={this.handleSaveNotes}>
            Simpan
          </button>
        </div>

        <hr />

        <div className="card-content">
          <p className="title">Title</p>
          <p className="date">26 Jan 2023</p>
          <p className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  userData: state.user,
});

const reduxDispatch = (dispatch) => ({
  saveNotes: (data) => dispatch(addDataToAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
