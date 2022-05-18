import React, { Component, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { useState } from "react";
import Result from "./Result";
import FilterBanner from "./FIlterBanner";
import { CompareSharp } from "@mui/icons-material";

// // const db =
// // // If we have an API endpoint we want to use we can initialize xios w/ and instance://
// const api = axios.create({
//   //   //with this function we will pass an initial configuration with an object which has a baseURL//
//      baseURL: `http://localhost:8080/results`
//    })

//    const ResultsComponent = function(props) {
//     const [games, setGames] = useState([]);

//    }

// export default class Results extends Component {

//   state = {
//     games: []
//   };

//   constructor() {
//     super();
//     this.getGames();
//   }setResults(response.data.results)

//   getGames = async () => {
//     try {
//     let data = await api.get('/results').then(({ data }) => data);
//       this.setState({ games: data })
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   // createGame = async () => {
//   //   let res = await api
//   //   .post('/results', { title: "Test", id: 4, author: "test" })
//   //   .catch(err=> console.log(err))

//   //   console.log(res);
//   //   this.getGames();
//   // }

//   // deleteCourse = async (id) => {
//   //   let data = await api.delete(`/${id}`)
//   //   this.getGames();
//   // }

//   // updateGame = async (id, val) => {
//   //   let data = await api.patch(`/${id}`, { title: val })
//   //   this.getGames();
//   // }

//   // <button onClick={this.createGame}>createGame</button>
//   //     {this.state.games.map(game => <h2 key={game.id}> {game.title} <button onClick={()=>this.deleteGame(game.id)}>x</button></h2>)}

// render() {
//   return(

//     <div>
//       <Navigation />
//       <Result />
//     </div>
//   )
// }
// };

export default function Results() {
  const [results, setResults] = useState([]);

  let startingURL =
    "https://api.rawg.io/api/games?key=4d6e63aaf07b45ada62f971b8736e525";

  const [URL, setURL] = useState(startingURL);

  const [genre, setGenre] = useState("");

  const [likedGames, setLikedGames] = useState([]);

  const update = () => {
    let genreSelect = document.getElementById("select-genre");
    let genreValue = genreSelect.options[genreSelect.selectedIndex].value;
    setGenre(genreValue);
    setURL(startingURL + `&genres=${genreValue}`);
  };

  useEffect(() => {
    axios.get(URL).then((response) => {
      setResults(response.data.results);
      // make a nested axios call to our own server, to get the games that are liked, and pass them as props to result.jsx, and then render the like button as liked or unliked.
      axios.get("http://localhost:3003/likes").then((likesResponse) => {
        const likesArray = likesResponse.data;
        const gamesLiked = likesArray.map((game) => {
          const gameID = game.game_id;
          return gameID;
        });
        setLikedGames(gamesLiked);
      });
    });
  }, [URL]);

  const gameList = results.map((result) => {
    let value = result.id;
    let liked = likedGames.includes(value);
    const changeLikedForThisGame = (newLiked) => {
      if (newLiked) {
        likedGames.push(value);
        setLikedGames([...likedGames]);
      } else {
        const newIDS = likedGames.filter((id) => id !== value);
        setLikedGames(newIDS);
      }
    };
    return (
      <Result
        key={value}
        value={value}
        liked={liked}
        setLiked={changeLikedForThisGame}
      ></Result>
    );
  });

  return (
    <div>
      <Navigation />
      <FilterBanner update={update} />
      {gameList}
    </div>
  );
}
