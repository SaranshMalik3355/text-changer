import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    if (newText === "") {
      props.tellAlert(
        "Text cannot be changed to UpperCase because it is empty",
        "danger"
      );
    } else {
      props.tellAlert("Text changed to uppercase", "success");
    }
  };
  const handleLowerCase = () => {
    // console.log("capital button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    if (newText === "") {
      props.tellAlert(
        "Text cannot be changed to Lowercase because it is empty",
        "danger"
      );
    } else {
      props.tellAlert("Text changed to Lowercase", "success");
    }
  };
  const handleReverseCase = () => {
    // console.log("reverse button was clicked");
    let splitString = text.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    setText(joinArray);
  };
  const handleClearCase = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    // console.log(text);
    setText(event.target.value);
  };
  // let newArr = text.split(" ");

  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1 className="mb-2">{props.heading}</h1>
          {/* <label for="myBox" className="form-label">
          Example textarea
        </label> */}
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn  btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCase}
        >
          Convert to LowerCase letter
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleReverseCase}
          disabled={text.length === 0}
        >
          Reverse String
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearCase}
          disabled={text.length === 0}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+ /).filter((el) => {
              return el.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+ /).filter((el) => {
              return el.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview "}</p>
      </div>
    </>
  );
}
