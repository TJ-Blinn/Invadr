// Wait for the DOM content to finish loading
import axios from "axios";
import React, { useState, useEffect } from "react";
// import Profile from "./Profile";
import LikesMapped from "./LikesMapped";
import { ImageList } from "@mui/material";

// This is the Parent component
export default function Likes() {
  const [userLikes, setUserLikes] = useState([]);

  // This will pass the game_id to the LikesMapped component
  // on Likes.jsx, we are making an api get request to our likes table, to find all the games that are liked
  //we are saving those liked games into an array, then mapping through the array,
  //  and returning a Likes Mapped component, and passing the liked game id as a prop
  // --------------------------- Likes list is sending each game card the id of the game that is liked
  const likesList = userLikes.map((game) => {
    let gameId = game.game_id;

    return (
      <div>
        <LikesMapped gameId={gameId} />
      </div>
    );
  });

  // We will use the useEffect hook to call this function when the Parent component mounts.
  // useEffect runs after the component is rendered, only run on render,
  useEffect(() => {
    getAllLikes();
  }, []);


  const getAllLikes = () => {
    axios
      .get(`http://localhost:3003/likes/`)
      // result is what is being returned by axios from the API
      .then((result) => {
        // console.log("2222222222222", result.data);
        // setUserLikes(result.data);
        const allLikes = result.data;
        setUserLikes(allLikes);
        // console.log("++++++++++++++++++++++", userLikes);
      })
      .catch((error) => console.error(`Error: $error)`));
  };

  return (
    <ImageList sx={{ maxHeight: "100%" }} cols={2} gap={10}>
      {likesList}
    </ImageList>
  );
}

// This is a test of Likes for 1 user. The total number of games liked is:{" "}
//       {userLikes.length}
//       <LikesMapped userLikes={userLikes} />
