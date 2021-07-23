import React from "react";
import "./Banner.css";
function dot(string, n) {
  return string.length > n ? string.substr(0, n) + ". . ." : string;
}
function Banner() {
  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {dot(
            `Test description for movie`,
            100
          )}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
