import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";

export default function Result(props) {

  const [result, setResult] = useState([]);

  const gameURL = `https://api.rawg.io/api/games/${props.value}?key=d355ab68065146b29254681eac449af9`

  useEffect(() => {
    axios.get(gameURL).then(response => {
      setResult(response.data)
    });
  }, []);

  return (
    <div>
      {result ? <article class="game-card">
          <h3 class="game-title">{result.name}</h3>
          <img
            class="game-image"
            src={result.background_image}
            alt="game image"
          />
          <p class="game-description">
            {result.description_raw}
          </p>
          <button>CLICK ME TO LIKE</button>
          <h3>Metacritic score: {result.metacritic}</h3>
        </article> : <h1>Loading</h1> }
    </div>

  )
}
