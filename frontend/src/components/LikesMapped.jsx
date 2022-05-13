// import { display } from "@mui/system";
import React from "react";
import Likes from "./Likes";

// This is the child component for Likes

export default function LikesMapped(props) {
  const displayLikes = () => {
    const likes = props.userLikes;

    return likes.map((like, index) => {
      console.log(like);
      return (
        <div key={like.id}>
          <h3>{like.name}</h3>
          <div>{like.description}</div>
          <img
            src={like.thumbnail_url}
            alt="User's favorite games"
            width="200"
            height="200"
          ></img>
        </div>
      );
    });
  };
  return <>{displayLikes()}</>;
}
