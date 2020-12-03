import React, { useState } from "react";
import "./style.scss";

function StyleLayout() {
  const [text, setText] = useState("");
  return (
    <div className="wrapper">
      <div className="header">
        <h1>header</h1>
      </div>
      <div className="container">
        <div id="container-navbar">
          <h1>Menu</h1>
        </div>
        <div className="container-content">
          <div className="content-header">
            <div
              onClick={() => setText("blue")}
              className="todo"
              style={{ backgroundColor: "blue", cursor: "pointer" }}
            >
              <p>todo1</p>
            </div>
            <div
              onClick={() => setText("green")}
              className="todo"
              style={{ backgroundColor: "green", cursor: "pointer" }}
            >
              <p>todo2</p>
            </div>
            <div
              onClick={() => setText("yellow")}
              className="todo"
              style={{ backgroundColor: "yellow", cursor: "pointer" }}
            >
              <p>todo3</p>
            </div>
            <div
              onClick={() => setText("red")}
              className="todo"
              style={{ backgroundColor: "red", cursor: "pointer" }}
            >
              <p>todo4</p>
            </div>
            <div className="nav-bar-button">
              <p>search "height and line height css center text in w3school"</p>
            </div>
          </div>
          <div style={{ backgroundColor: text }} className="content-footer">
            <p>Content Footer</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
}

export default StyleLayout;
