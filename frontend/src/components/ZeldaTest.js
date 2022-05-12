import React from "react";
import axios from "axios";

// const rawgApiKey = process.env.RAWG_API_KEY;

const api = axios.create();

// export default class ZeldaTest extends React.Component {
//   state = {
//     persons: [],
//   };

//   componentDidMount() {
//     axios.get(`http://localhost:3001/test`).then((res) => {
//       const persons = res.data;
//       this.setState({ persons });
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map((person) => (
//           <li key={person.id}>{person.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// if (res.data.results.length > 0) {
//   const game = res.data.results[0];
//   axios
//     .get("https://api.rawg.io/api/games/" + game.id)
//     .then((res) => {
//       if (res && res.data) {
//         const info = res.data;
//         resolve(res.data);
//       }
//     })
//     .catch((err) => {
//       reject(err);
//     });
// } else reject("No game found");
