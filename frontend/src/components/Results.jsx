import React, { useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { useState } from "react";
import Result from "./Result";
import FilterBanner from "./FilterBanner";
import { useLocation } from "react-router-dom";

export default function Results() {
  const [results, setResults] = useState([]);

  let startingURL =
    "https://api.rawg.io/api/games?key=4d6e63aaf07b45ada62f971b8736e525";

  const [likedGames, setLikedGames] = useState([]);

  const resultsURLParam = useLocation();
  const searchGenre = (url) => {
    console.log("URL", url);

    axios.get(url).then((response) => {
      console.log("123");

      setResults(response.data.results);
      // make a nested axios call to our own server, to get the games that are liked, and pass them as props to result.jsx, and then render the like button as liked or unliked.
      axios.get("http://localhost:3003/likes").then((likesResponse) => {
        const likesArray = likesResponse.data;
        const gamesLiked = likesArray.map((game) => {
          const gameID = game.game_id;
          return gameID;
        });
        setLikedGames(gamesLiked);
      });
    });
  };

  // Safeguards from infinite loop
  useEffect(() => {
    if (resultsURLParam.state !== null) {
      const { genreValue } = resultsURLParam.state;

      // Dynamically update the startingURL
      startingURL = startingURL + `&genres=${genreValue}`;
      // Calls searchGenre
      searchGenre(startingURL);
    } else {
      searchGenre(startingURL);
    }
  }, [resultsURLParam]);

  const gameList = results.map((result) => {
    let value = result.id;
    let liked = likedGames.includes(value);
    const changeLikedForThisGame = (newLiked) => {
      if (newLiked) {
        likedGames.push(value);
        setLikedGames([...likedGames]);
      } else {
        const newIDS = likedGames.filter((id) => id !== value);
        setLikedGames(newIDS);
      }
    };
    return (
      <Result
        key={value}
        value={value}
        liked={liked}
        setLiked={changeLikedForThisGame}
      ></Result>
    );
  });

  return (
    <div>
      <Navigation />
      <FilterBanner />
      {gameList}
    </div>
  );
}
