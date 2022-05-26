import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import "../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import FullHeart from "../files/fullheart.png";
import EmptyHeart from "../files/emptyheart.png";

export default function Result(props) {
  const [result, setResult] = useState([]);

  const liked = props.liked;

  const gameURL = `https://api.rawg.io/api/games/${props.value}?key=4d6e63aaf07b45ada62f971b8736e525`;

  useEffect(() => {
    axios.get(gameURL).then((response) => {
      setResult(response.data);
    });
  }, [gameURL]);

  const onClick = () => {
    axios
      .post("http://localhost:3003/test", {
        isLiked: !liked,
        game_id: props.value,
      })
      .then((response) => {
        console.log(response);
        props.setLiked(!liked);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffebee",
        contrastText: "A400",
      },
      secondary: lightGreen,
    },
    typography: {
      fontFamily: "Bungee",

      body1: {
        fontFamily: "Helvetica",
      },
    },
  });

  return (
    <div>
      {result ? (
        <ThemeProvider theme={theme}>
          <Stack alignItems="center" spacing={2}>
            <ImageListItem
              sx={{
                width: "50%",
                height: 500,
                boxShadow: 4,
                borderRadius: 8,
                border: "solid lightGreen",
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
              <h2 className="resultTitle">{result.name}</h2>
              <ImageListItemBar
                subtitle={result.description_raw}
                position="below"
                sx={{
                  margin: 1,
                  fontWeight: "medium",
                  fontFamily: "Helvetica",
                  p: 3,
                }}
              />
              <article className="game-card">
                <button
                  onClick={onClick}
                  style={{
                    width: "8%",
                    textAlign: "center",
                    backgroundColor: "#76ff05",
                    borderRadius: "1.66em",
                    border: "none",
                    paddingTop: "2%",
                  }}
                >
                  <div>
                    {liked ? (
                      <img
                        style={{ height: "2em", width: "auto" }}
                        src={FullHeart}
                        alt="Full Heart icon"
                      />
                    ) : (
                      <img
                        style={{ height: "2em", width: "auto" }}
                        src={EmptyHeart}
                        alt="Empty Heart icon"
                      />
                    )}
                  </div>
                </button>

                <Typography
                  variant="h3"
                  color="white"
                  align="center"
                  sx={{
                    fontFamily: "Oswald",
                    fontWeight: 700,
                    fontSize: 24,
                    p: 3,
                    textShadow: "1px 1px 1px black",
                  }}
                >
                  Metacritic score: {result.metacritic}
                </Typography>
              </article>
            </ImageListItem>
          </Stack>
        </ThemeProvider>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
