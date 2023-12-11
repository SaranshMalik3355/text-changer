import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  // for label text
  const [labelText, setLabelText] = useState("Enable Dark Mode");
  const handleToggleMode = () => {
    props.toggleMode(null);
    // let prevText;
    if (labelText === "Enable Dark Mode") {
      setLabelText("Enable Light Mode");
    } else {
      setLabelText("Enable Dark Mode");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={props.mode}
        style={{ backgroundColor: props.toggleColorChange }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                onClick={() => {
                  props.toggleMode("primary");
                }}
              ></div>
              <div
                className="bg-warning rounded mx-2"
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                onClick={() => {
                  props.toggleMode("warning");
                }}
              ></div>
              <div
                className="bg-success rounded mx-2"
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                onClick={() => {
                  props.toggleMode("success");
                }}
              ></div>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={handleToggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {labelText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
