// Wait for the DOM content to finish loading
import axios from "axios";
import React, { useState, useEffect } from "react";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";

const Profile = function () {
  const [userLikes, setUserLikes] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/likes/`)
      // result is what is being returned by axios from the API
      .then((result) => {
        console.log("-------", result.data);
        setUserLikes(result.data);
      });
  }, []);

  return (
    // <button onClick={() => }>
    <button>
      <div className="like-button">
        <RecommendOutlinedIcon />
        <span>Likes: {this.state.count} </span>
      </div>
    </button>
  );
};

export default Profile;
