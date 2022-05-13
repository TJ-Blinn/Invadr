import React, { Component, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { useState } from "react";
import Result from "./Result";


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
//   }

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

  const startingURL = "https://api.rawg.io/api/games?key=d355ab68065146b29254681eac449af9";

  useEffect(() => {
    axios.get(startingURL).then(response => {
      console.log(response.data.results)
      setResults(response.data.results)
    });
  }, []);

  const gameList = results.map(result => {
    let value = result.id
    return (<Result value={value}></Result>)
  })

  return (
    <div>
      <Navigation />
      {gameList}
    </div>
  )
}
