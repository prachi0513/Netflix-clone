import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import request from "./request.js";
import "./banner.css";
function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(request.fetchNetflixOriginals);
      let dataCollection = Math.floor(Math.random() * data.data.results.length);
      setMovies(data.data.results[dataCollection]);
    }
    fetchData();
  }, []);


  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        http://image.tmdb.org/t/p/original/${movies?.backdrop_path}
    )`,
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movies?.title || movies?.title || movies?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadebottom"></div>
    </div>
  );
}

export default Banner;
