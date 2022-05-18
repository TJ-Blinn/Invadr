import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { shadows, borders } from "@mui/system";
import "../App.css";

// This is the child component for Likes
// on LikesMapped.jsx, we can accessing the like game id through props.gameId, then we make an api call to RAWG to
//  receive all of that specific game's info
// then we populate our front end with values returned from RAWG

export default function LikesMapped(props) {
  const [result, setResult] = useState([]);
  const gameId = props.gameId;
  const [liked, setLiked] = useState(true);
  const gameURL = `https://api.rawg.io/api/games/${gameId}?key=4d6e63aaf07b45ada62f971b8736e525`;

  // response.data = the full payload from the Rawg call
  useEffect(() => {
    axios.get(gameURL).then((response) => {
      setResult(response.data);
    });
  }, [gameURL]);
  // Result is the payload from RAWG

  const onClick = () => {
    axios
      .post("http://localhost:3003/test", {
        isLiked: !liked,
        game_id: gameId,
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
    // <Container maxWidth="md">
    // <div
    //   style={{
    //     display: "grid",
    //     gridTemplateColumns: "repeat(3, 1fr)",
    //     gap: "10px",
    //   }}
    // >
    //   {/* Div here creates column, do the loop for the content in */}
    //   <div
    //     style={{
    //       boxShadow: "0px 3px 1px rgb(0 0 0 / 20%)",
    //       borderRadius: "8px",
    //       padding: "16px",
    //     }}
    //   >
    //     <img
    //       src={result.background_image}
    //       style={{ width: "100%", height: "auto" }}
    //     />
    //   </div>
    // </div>

    <div>
      {result ? (
        <ImageListItem
          sx={{
            width: 500,
            height: 500,
            boxShadow: 4,
            borderRadius: 8,
            p: 2,
            m: 2,
          }}
        >
          <img
            style={{ borderRadius: 8, whiteSpace: "normal" }}
            src={`${result.background_image}?w=240&fit=crop&auto=format`}
            srcSet={`${result.background_image}?w=240&fit=crop&auto=format&dpr=2 2x`}
            alt={result.name}
            loading="lazy"
          />
          <button onClick={onClick}>{liked ? "Unlike" : "Like"}</button>
          <ImageListItemBar
            // style={{ width: 250, height: 250 }}
            title={result.name}
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

/*
//   return (
//     <Container maxWidth="md">
//       <ImageList
//         sx={{ boxShadow: 2, borderRadius: 2, p: 2 }}
//         cols={3}
//         gap={10}
//       >
//         {mapping()}
//       </ImageList>
//     </Container>
//   );

// return <>{displayLikes()}</>;

// export default function LikesMapped(props) {
//   const displayLikes = () => {
//     const likes = props.userLikes;

//     return likes.map((like, index) => {
//       console.log(like);
//       return (
//         <div key={like.id}>
//           <h3>{like.name}</h3>
//           <div>{like.description}</div>
//           <img
//             src={like.thumbnail_url}
//             alt="User's favorite games"
//             width="200"
//             height="200"
//           ></img>
//         </div>
//       );
//     });
//   };
//   return <>{displayLikes()}</>;
// }
*/
