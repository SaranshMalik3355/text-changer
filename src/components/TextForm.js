import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    // console.log("capital button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    // console.log(text);
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label for="myBox" className="form-label">
          Example textarea
        </label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerCase}>
          Convert to LowerCase letter
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ")[text.split(" ").length - 1] === ""
            ? text.split(" ").length - 1
            : text.split(" ").length}{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length - 0.008} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
