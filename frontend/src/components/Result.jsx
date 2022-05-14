import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";

export default function Result(props) {

  const [result, setResult] = useState([]);
  const [like, setLike] = useState(false);

  const gameURL = `https://api.rawg.io/api/games/${props.value}?key=d355ab68065146b29254681eac449af9`


  useEffect(() => {
    axios.get(gameURL).then(response => {
      setResult(response.data)
    });
  }, []);

  const onClick = () => {
    setLike((prevLike) => !prevLike)
    console.log("555555555");
  }

  return (
    <div>
      {result ? <article className="game-card">
          <h3 className="game-title">{result.name}</h3>
          <img
            className="game-image"
            src={result.background_image}
            alt="game image"
          />
          <p className="game-description">
            {result.description_raw}
          </p>
          <button onClick={ onClick }>{like.toString()}
      </button>
          <h3>Metacritic score: {result.metacritic}</h3>
        </article> : <h1>Loading</h1> }
    </div>

  )
}
