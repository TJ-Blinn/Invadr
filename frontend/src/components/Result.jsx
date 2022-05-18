import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";

export default function Result(props) {
  const [result, setResult] = useState([]);

  const liked = props.liked;

  const gameURL = `https://api.rawg.io/api/games/${props.value}?key=4d6e63aaf07b45ada62f971b8736e525`;

  useEffect(() => {
    axios.get(gameURL).then((response) => {
      setResult(response.data);
    });
  }, [gameURL]);

  // holly's works on port 8080, mine works on port 3003, amend axios.post in the onClick handler accordingly

  const onClick = () => {
    axios
      .post("http://localhost:3003/test", {
        isLiked: !liked,
        game_id: props.value,
      })
      .then((response) => {
        console.log(response);
        props.setLiked(!liked);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {result ? (
        <article className="game-card">
          <h3 className="game-title">{result.name}</h3>
          <img
            className="game-image"
            src={result.background_image}
            alt="game image"
          />
          <p className="game-description">{result.description_raw}</p>

          <button onClick={onClick}>{liked ? "Unlike" : "Like"}</button>

          <h3>Metacritic score: {result.metacritic}</h3>
        </article>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
