import React, { useEffect, useState } from "react";
import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";

let editOFF = "#000000";
let editButtomText = "#FFFFFF";
let editON = "#FF0000";

let numsBackgroundOFF = "#9b97ff";
let numsBackgroundON = "#1309ff";

let numBackgroundOFF = "#c3c1ff";
let numBackgroundON = "#FFFFFF";

let one = "#000000";
let two = "#00FF00";
let three = "#0000FF";
let four = "#FF8500";
let five = "#808000";
let six = "#CD853F";
let seven = "#00008B";
let eight = "#B22222";

let topLeft = "#808080";
let topRight = "#808080";
let bottomLeft = "#808080";
let bottomRight = "#808080";



function DesignContainer(props) {
  useEffect(() => {
    document.getElementById("edit-button").innerHTML =
      "<span id='test' style='color:#FFFFFF;'>EDIT</span>";
    document.getElementById("edit-button").style.backgroundColor = edit ? editON : editOFF;
  });

  const [edit, setEdit] = useState(false);
  // const [colors, setColors] = useState({ topLeft, topRight, bottomLeft, bottomRight });
  const [topLeftColor, setTopLeftColor] = useState(topLeft);
  const [topRightColor, setTopRightColor] = useState(topRight);
  const [bottomLeftColor, setBottomLeftColor] = useState(bottomLeft);
  const [bottomRightColor, setBottomRightColor] = useState(bottomRight);

  const handleEditChange = (event) => {
    setEdit(!edit);
    document.getElementById("edit-button").style.backgroundColor = edit ? editON : editOFF;
  }

  const allowDrop = (event) => {
    event.preventDefault();
  }
  const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  }
  const drop = (event) => {
    event.preventDefault();
    var input = event.dataTransfer.getData("text");
    var board = event.target.id;

    console.log("input = " + input);
    console.log("board = " + board);

    setBoard(
      board,
      getColor(input)
    );
  }

  const setBoard = (board, color) => {
    switch (board) {
      case "top-left":
        setTopLeftColor(color);
        break;
      case "top-right":
        setTopRightColor(color);
        break;
      case "bottom-left":
        setBottomLeftColor(color);
        break;
      case "bottom-right":
        setBottomRightColor(color);
        break;
      default:
        break;
    }
  }

  const getColor = (color) => {
    switch (color) {
      case "one":
        return one;
      case "two":
        return two;
      case "three":
        return three;
      case "four":
        return four;
      case "five":
        return five;
      case "six":
        return six;
      case "seven":
        return seven;
      case "eight":
        return eight;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="design-pad-h1">DESIGN PAD</h1>
      </div>

      <div className="button-div">
        <button id="edit-button" onClick={() => handleEditChange()} >
          <span id="buttonspan">EDIT</span>
        </button>
      </div>

      <PadInput canEdit={edit}
        ondragstart={drag}
        numsBackgroundON={numsBackgroundON}
        numsBackgroundOFF={numsBackgroundOFF}
        numBackgroundON={numBackgroundON}
        numBackgroundOFF={numBackgroundOFF} />

      <DesignBoard onDrop={drop} ondragover={allowDrop} colors={{ topLeftColor, topRightColor, bottomLeftColor, bottomRightColor }} topLeftColor={topLeftColor}
        topRightColor={topRightColor}
        bottomLeftColor={bottomLeftColor}
        bottomRightColor={bottomRightColor} />
    </div>
  );
}

export default DesignContainer;