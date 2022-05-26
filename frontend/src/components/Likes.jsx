import axios from "axios";
import React, { useState, useEffect } from "react";
import LikesMapped from "./LikesMapped";
import { ImageList } from "@mui/material";

export default function Likes() {
  const [userLikes, setUserLikes] = useState([]);

  const getAllLikes = () => {
    axios
      .get(`http://localhost:3003/likes/`)
      // result is what is being returned by axios from the API
      .then((result) => {
        const allLikes = result.data;
        setUserLikes(allLikes);
      })
      .catch((error) => console.error(`Error: $error)`));
  };

  // This will pass the game_id to the LikesMapped component
  // on Likes.jsx, we are making an api get request to our likes table, to find all the games that are liked
  // we are saving those liked games into an array, then mapping through the array,
  // and returning a Likes Mapped component, and passing the liked game id as a prop
  // --------------------------- Likes list is sending each game card the id of the game that is liked
  const likesList = userLikes.map((game) => (
    <LikesMapped
      key={game.game_id}
      gameId={game.game_id}
      getAllLikes={getAllLikes}
    />
  ));

  // We will use the useEffect hook to call this function when the Parent component mounts.
  // useEffect runs after the component is rendered, only run on render,
  useEffect(() => getAllLikes(), []);

  return (
    <ImageList
      sx={{
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      cols={1}
      gap={10}
    >
      {likesList}
    </ImageList>
  );
}
