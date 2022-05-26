import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import "../App.css";
import FullHeart from "../files/fullheart.png";
import EmptyHeart from "../files/emptyheart.png";

/* This is the child component for Likes
    on LikesMapped.jsx, we can accessing the like game id through props.gameId, then we make an api call to RAWG to
    receive all of that specific game's info
    then we populate our front end with values returned from RAWG */

export default function LikesMapped(props) {
  const [result, setResult] = useState([]);
  const { gameId, getAllLikes } = props;
  const liked = true;
  const gameURL = `https://api.rawg.io/api/games/${gameId}?key=4d6e63aaf07b45ada62f971b8736e525`;

  // response.data = the full payload from the Rawg call
  useEffect(() => {
    axios.get(gameURL).then((response) => {
      setResult(response.data);
    });
  }, [gameURL]);
  // Result is the payload from RAWG

  const handleLike = () => {
    axios
      .post("http://localhost:3003/test", {
        isLiked: !liked,
        game_id: gameId,
      })
      .then((response) => {
        console.log(response);
        getAllLikes();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {result ? (
        <ImageListItem
          sx={{
            width: "60%",
            height: 500,
            boxShadow: 4,
            borderRadius: 8,
            border: "solid lightGreen",
            p: 2,
            m: 2,
            marginLeft: "20%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{ borderRadius: 8, whiteSpace: "normal" }}
            src={`${result.background_image}?w=240&fit=crop&auto=format`}
            srcSet={`${result.background_image}?w=240&fit=crop&auto=format&dpr=2 2x`}
            alt={result.name}
            loading="lazy"
          />
          <button
            onClick={handleLike}
            style={{
              width: "8%",
              textAlign: "center",
              backgroundColor: "transparent",
              border: "none",
              paddingTop: "2%",
            }}
          >
            <div>
              {liked ? (
                <img
                  style={{ height: "2em", width: "auto" }}
                  src={FullHeart}
                  alt="Full heart icon"
                />
              ) : (
                <img src={EmptyHeart} alt="Empty Heart icon" />
              )}
            </div>
          </button>
          <h2 className="resultTitle">{result.name}</h2>
          <ImageListItemBar
            subtitle={result.description_raw}
            position="below"
            sx={{ margin: 1, fontWeight: "medium" }}
          />
        </ImageListItem>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
