// Wait for the DOM content to finish loading
import axios from "axios";
import React, { useState, useEffect } from "react";
// import Profile from "./Profile";
import LikesMapped from "./LikesMapped";

// This is the Parent component
export default function Likes() {
  const [userLikes, setUserLikes] = useState([]);

  // We will use the useEffect hook to call this function when the Parent component mounts.
  // useEffect runs after the component is rendered, only run on render,
  useEffect(() => {
    getAllLikes();
  }, []);

  const getAllLikes = () => {
    axios
      .get(`http://localhost:8080/likes/`)
      // result is what is being returned by axios from the API
      .then((result) => {
        console.log("2222222222222", result.data);
        // setUserLikes(result.data);
        const allLikes = result.data;
        setUserLikes(allLikes);
      })
      .catch((error) => console.error(`Error: $error)`));
  };
  return (
    <div>
      This is a test of Likes for 1 user. The total number of games liked is:{" "}
      {userLikes.length}
      <LikesMapped userLikes={userLikes} />
    </div>
  );
}
