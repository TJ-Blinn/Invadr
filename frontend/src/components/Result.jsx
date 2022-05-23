import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { Stack, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import "../App.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';

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
        main: '#ffebee',
        contrastText: 'A400'
      },
      secondary: lightGreen
    },
    typography: {
      fontFamily: 'Bungee',


      body1: {
        fontFamily: "Helvetica",
     }
    }
  })

  return (
    <div>
      {result ? (
        <ThemeProvider theme={theme}>
        <Stack alignItems="center" spacing={2}
        >
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
          <ImageListItemBar
            // style={{ width: 250, height: 250 }}
            title={result.name}
            subtitle={result.description_raw}
            position="below"
            sx={{
              margin: 1,
              fontWeight: "medium",
              fontFamily: "Helvetica",
              p: 3
            }}
          />
        <article className="game-card">
          {/* <h3 className="game-title">{result.name}</h3>
          <img
            className="game-image"
            src={result.background_image}
            alt="game image"
          />
          <p className="game-description">{result.description_raw}</p> */}


          <button onClick={onClick}>{liked ?
                  <img style={{ height: "1em", width: "auto"}} src={require("../files/fullheart.png")} />
                  :
                  <img style={{ height: "1em", width: "auto"}} src={require("../files/emptyheart.png")} />
                  }</button>

          <h3>Metacritic score: {result.metacritic}</h3>
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
