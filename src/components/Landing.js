import React, { useState, useEffect } from 'react';

function Landing() {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);

  useEffect(() => {}, [isLeft, isRight]);

  const checkSide = () => {
    var side = document.getElementById;
  };

  const mouseLeft = () => {
    setIsLeft(true);
    setIsMouseInside(true);
  };
  const mouseRight = () => {
    setIsRight(true);
    setIsMouseInside(true);
  };

  return (
    <div
      className={`container ${
        isLeft & isMouseInside
          ? ' hover-left '
          : isRight & isMouseInside
          ? ' hover-right'
          : ''
      }`}
      // className={`container`}
    >
      <div
        id="left"
        onMouseEnter={mouseLeft}
        onMouseLeave={() => setIsMouseInside(false) & setIsLeft(false)}
        // className={`split left ${isMouseInside ? ' hover-left ' : ''}`}
        className="split left"
      >
        <h1>Employees</h1>
        <a href="#" className="btn">
          Login
        </a>
      </div>
      <div
        id="right"
        onMouseEnter={mouseRight}
        onMouseLeave={() => setIsMouseInside(false) & setIsRight(false)}
        // className={`split right ${isMouseInside ? ' hover-right' : ''}`}
        className="split right"
      >
        <h1>Customers</h1>
        <a href="#" className="btn">
          Login
        </a>
      </div>
    </div>
  );
}

export default Landing;
