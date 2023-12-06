// Point 3 - Joystick
// The inner circle should be draggable and based on the direction the outer container color has to
// be changed.



// This component for Joystick, there are two div first div for inner-circle and second div for outer-circle. 
// First I have initialized state postion to keep track of of joystick positions in x,y
// Second I have initialized state containerColors to keep track of color ,when the joystick move left,right,top and bottom
// I have used Animation to show joystick movements
// Created a handleDrag funtion whenever the joystick is dragged over the container, it keeps track of position of the joystick and updates outer container color accordingly 

import React, { useState } from "react";
const Joystick = () => {
   // State to track the position of the inner circle (movable part of the joystick)
  const [position, setPosition] = useState({ x: 0, y: 0 });
   // State to set the background color of the outer circle container
  const [containerColor, setContainerColor] = useState("#CFD2CF");


 // Event handler triggered when the user drags the mouse over the joystick
  const handleDrag = (event) => {
    // Extracting clientX and clientY from the event, considering touch events as well
    const { clientX, clientY } = event.touches ? event.touches[0] : event;
     // Getting the reference to the outer container and its dimensions
    const container = document.getElementById("outer-container");
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

     // Getting the reference to the outer container and its dimensions x and y
    const x = clientX - containerRect.left - containerWidth / 2;
    const y = clientY - containerRect.top - containerHeight / 2;

    setPosition({ x, y });

    // Changing the color of the outer container based on the joystick position
    if (x < -50) {
      setContainerColor("yellow");
    } else if (x > 50) {
      setContainerColor("red");
    } else if (y < -50) {
      setContainerColor("purple");
    } else if (y > 50) {
      setContainerColor("green");
    } else {
      setContainerColor("");
    }
  };

  return (
    <div
      style={{
        width: "497px",
        height: "350px",
        border: "1px solid #CFD2CF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     {/* outer circle container */}
      <div
        id="outer-container"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: containerColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background-color 0.1s ease",
          border: "1px solid #CFD2CF",
        }}
      >
        {/* // inner circle,movable part of the joystick */}
        <div
          id="inner-circle"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#CDFAD5",
            transform: `translate(${position.x}px, ${position.y}px)`,// Animation
            transition: "transform 0.1s ease",
            border: "1px solid red",
          }}
          onTouchMove={handleDrag}
          onMouseMove={handleDrag}
          onTouchEnd={() => setPosition({ x: 0, y: 0 })}
          onMouseUp={() => setPosition({ x: 0, y: 0 })}
        ></div>
      </div>
    </div>
  );
};

export default Joystick;
