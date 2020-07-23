import React, { useState, useEffect } from "react";
import CatImg from "assets/images/cat.png";

function Cat(props) {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({
        left: e.pageX,
        top: e.pageY,
      });
    }
    document.addEventListener("mousemove", handleMouseMove);
    return function clean() {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <img
      src={CatImg}
      alt="cat"
      style={{ position: "absolute", left: position.left, top: position.top }}
    />
  );
}

export default Cat;
