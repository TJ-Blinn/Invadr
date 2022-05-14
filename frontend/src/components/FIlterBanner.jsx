import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";

export default function FilterBanner(props) {
  const [genres, setGenres] = useState([]);


  let startingURL =
    "https://api.rawg.io/api/genres?key=4d6e63aaf07b45ada62f971b8736e525";


  useEffect(() => {
    axios.get(startingURL).then(response => {
    setGenres(response.data.results)
    });
  }, []);

  const genresMapped = genres.map(genres => {
    let value = genres.slug
    let text = genres.name
    return (<option value={value}>{text}</option>)
  })


  return (
    <div>
      {genres ? <div class="banner">
        <h1 class="banner-text">BEWARE THE INVASION</h1>
        <h2 class="banner-pick">Pick A Genre:</h2>
        <select id="select-genre" name="genre" onChange={props.update}>
          {genresMapped}
        </select>
      </div> : <h1>Loading</h1>}

    </div>
  );
}
