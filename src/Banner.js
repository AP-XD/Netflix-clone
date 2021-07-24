import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function dot(string, n) {
  return string.length > n ? string.substr(0, n) + " ..." : string;
}
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetch() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetch();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
          )`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{`${movie.title}` || `${movie.original_title}`}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {dot(`${movie.overview}`, 100)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
