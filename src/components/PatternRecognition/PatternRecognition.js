import React from "react";
import "./PatternRecognition.css";

const PatternRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
          className="bounding-box"
        ></div>
      </div>
    </div>
  );
};

export default PatternRecognition;
