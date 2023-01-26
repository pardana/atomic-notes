import React, { Component } from "react";
import "./Dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="conteiner">
        <div className="input-form">
          <input placeholder="title" className="input-title" />
          <textarea placeholder="content" className="input-content"></textarea>
          <button className="save-btn">Simpan</button>
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

export default Dashboard;
