import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};
const baseURL = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState("");

  function handleVideo(movie) {
    console.log(movie);
    if (videoId) {
      setVideoId("");
    } else {
      movieTrailer(movie?.name || movie.genre_ids?.name || " ")
        .then((url) => {
          const URlparam = new URLSearchParams(new URL(url).search);
          setVideoId(URlparam.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleVideo(movie)}
              className={`row_poster ${isLarge && "row_poster_larger"}`}
              src={`${baseURL}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        {videoId && <YouTube videoId={videoId} opts={opts} />}
      </div>
    </>
  );
}

export default Row;
