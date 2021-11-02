import React, { useEffect } from "react";
// import DesignPad from "./DesignPad";
function DesignBoard(props) {

  useEffect(() => {
    console.log(props.colors[0]);
    console.log(props.topLeftColor);
    document.getElementById("top-left").style.backgroundColor = props.topLeftColor;
    document.getElementById("top-right").style.backgroundColor = props.topRightColor;
    document.getElementById("bottom-left").style.backgroundColor = props.bottomLeftColor;
    document.getElementById("bottom-right").style.backgroundColor = props.bottomRightColor;
  });

  return (
    <div className="center">
      <div
        id="top-left"
        className="pad top-left"
        onDrop={props.onDrop}
        onDragOver={props.ondragover}
      ></div>

      <div
        id="top-right"
        className="pad top-right"
        onDrop={props.onDrop}
        onDragOver={props.ondragover}
      ></div>

      <div
        id="bottom-left"
        className="pad bottom-left"
        onDrop={props.onDrop}
        onDragOver={props.ondragover}
      ></div>

      <div
        id="bottom-right"
        className="pad bottom-right"
        onDrop={props.onDrop}
        onDragOver={props.ondragover}
      ></div>
    </div>
  );
}

export default DesignBoard;