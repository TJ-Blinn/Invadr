import React, { useEffect, useState } from "react";
import axios from "axios";
// import {
//   ImageList,
//   ImageListItem,
//   ImageListItemBar,
//   Container,
// } from "@mui/material";

// This is the child component for Likes
// on LikesMapped.jsx, we can accessing the like game id through props.gameId, then we make an api call to RAWG to
//  receive all of that specific game's info
// then we populate our front end with values returned from RAWG

export default function LikesMapped(props) {
  const [result, setResult] = useState([]);
  // console.log("111111111111111", props);
  const gameId = props.gameId;

  const gameURL = `https://api.rawg.io/api/games/${gameId}?key=d355ab68065146b29254681eac449af9`;

  // response.data = the full payload from the Rawg call
  useEffect(() => {
    axios.get(gameURL).then((response) => {
      setResult(response.data);
    });
  }, [gameURL]);
  // Result is the payload from RAWG
  console.log("999999999999", result);
  return (
    <div>
      {result ? (
        <div>
          <img src={result.background_image} alt={result.name} loading="lazy" />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

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
