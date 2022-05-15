import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Container,
} from "@mui/material";

// This is the child component for Likes

export default function LikesMapped(props) {
  const displayLikes = () => {
    const likes = props.userLikes;

    return (
      <Container maxWidth="md">
        <ImageList
          sx={{ boxShadow: 2, borderRadius: 2, p: 2 }}
          cols={3}
          gap={10}
        >
          {likes.map((like, index) => (
            <ImageListItem key={like.id}>
              <img src={like.thumbnail_url} alt={like.name} loading="lazy" />
              <ImageListItemBar
                title={like.name}
                subtitle={like.description}
                position="below"
                sx={{ margin: 1 }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    );
  };
  return <>{displayLikes()}</>;
}

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
