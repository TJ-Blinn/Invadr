import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box } from "@mui/material";
import { lightGreen } from '@mui/material/colors';

export default function FilterBanner(props) {
  const [genres, setGenres] = useState([]);
 // useNavigate redirects to new page and then we can pass in parameters
  const navigate = useNavigate();

  const handleGenreSearch = () => {

    let genreSelect = document.getElementById("select-genre");
    let genreValue = genreSelect.options[genreSelect.selectedIndex].value;

    // redirects to /results and then passes the genre parameter
    // Passing an object with  "state" key
    navigate("/results", {state: {genreValue}})
  };


  let startingURL =
    "https://api.rawg.io/api/genres?key=4d6e63aaf07b45ada62f971b8736e525";


  // Calls the api to get genres
  // TODO **** for pagination query the api for value limits

  useEffect(() => {
    axios.get(startingURL).then((response) => {
      console.log(response.data.results);
      setGenres(response.data.results);
    });
  }, []);

// Creates the options element
  const genresMapped = genres.map((genre, i) => {
    let value = genre.slug
    let text = genre.name
    return (<option key={i} value={value}>{text}</option>)
  });

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
    },

  })


  return (
    <div>
      <ThemeProvider theme={theme}>
      {genres ? <div class="banner">
      <Typography
      variant="h3"
      color="secondary"
      align="center"
      sx={{
        p: 3
      }}
      >
        BEWARE THE INVASION
        </Typography>
        <Typography
      variant="h5"
      color="primary"
      align="center"
      sx={{
        p: 1
      }}
      >
      Pick A Genre:
        </Typography>
      <Box align="center"
      sx={{
        p: 3
      }}>
        <select id="select-genre" name="genre" onChange={handleGenreSearch}>
          {genresMapped}
        </select>
        </Box>
      </div> : <h1>Loading</h1>}

      </ThemeProvider>
    </div>
  );
};
/* genresMapped = list of options */
