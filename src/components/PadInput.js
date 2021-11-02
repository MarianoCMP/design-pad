import React, { useEffect } from "react";

function PadInput(props) {
  console.log("ondragstart = " + props.ondragstart);
  console.log(props.numsbackground);

  //the commented code simply places a random background color on each of the eight h3 tags

  // useEffect(() => {
  //   for (
  //     var i = 0;
  //     i < document.getElementsByClassName("number").length;
  //     i++
  //   ) {
  //     document.getElementsByClassName("number")[i].style.backgroundColor =
  //       generateRandomColor();
  //   }
  // });

  // const generateRandomColor = () => {
  //   let maxVal = 0xFFFFFF; // 16777215
  //   let randomNumber = Math.random() * maxVal;
  //   randomNumber = Math.floor(randomNumber);
  //   randomNumber = randomNumber.toString(16);
  //   let randColor = randomNumber.padStart(6, 0);
  //   return `#${randColor.toUpperCase()}`
  // }

  let nB = props.canEdit ? props.numsBackgroundON : props.numsBackgroundOFF;
  let bON = props.canEdit ? props.numBackgroundON : props.numBackgroundOFF;

  return (
    <div className="design-numbers" style={{ backgroundColor: nB }}>
      <h3 id="one" className="number one" onDragStart={props.ondragstart} draggable={props.canEdit} style={{ backgroundColor: bON }}>1</h3>
      <h3 id="two" className="number two" onDragStart={props.ondragstart} draggable={props.canEdit} style={{ backgroundColor: bON }}>2</h3>
      <h3 id="three" className="number three" onDragStart={props.ondragstart} draggable={props.canEdit} style={{ backgroundColor: bON }}>3</h3>
      <h3 id="four" className="number four" onDragStart={props.ondragstart} draggable={props.canEdit} style={{ backgroundColor: bON }}>4</h3>
      <h3 id="five" className="number five" onDragStart={props.ondragstart} draggable={props.canEdit} style={{ backgroundColor: bON }}>5</h3>
      <h3 id="six" className="number six" onDragStart={props.ondragstart} draggable={props.canEdit} style={{ backgroundColor: bON }}>6</h3>
      <h3 id="seven" className="number seven" onDragStart={props.ondragstart} draggable={props.canEdit} style={{ backgroundColor: bON }}>7</h3>
      <h3 id="eight" className="number eight" onDragStart={props.ondragstart} draggable={props.canEdit} style={{ backgroundColor: bON }}>8</h3>
    </div >
  );
}

export default PadInput;