// In the function, add a return statement that will return JSX with an <h1>
import Likes from "./Likes";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Navigation from "./Navigation";

// route for testing only, hard-coded and must be updated later
const Profile = function () {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3003/user/1`)
      // result is what is being returned by axios from the API
      .then((result) => {
        // console.log("===============", result.data);
        // console.log("+++++++++++++++", result);
        setUserData(result.data);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      });
  }, []);

  return (
    <Container>
      <div>
        <Navigation />
      </div>
      <aside>
        <div>
          <AccountBoxOutlinedIcon sx={{ fontSize: 60 }} />
          <div className="profile__name">
            <h2>
              <span className="profile--bold">{userData.name}</span>
            </h2>
          </div>

          <div>
            <h2>
              <span className="profile--bold">{userData.email}</span>
            </h2>
          </div>
        </div>
        <Likes />
        <br />
      </aside>
    </Container>
  );
};

export default Profile;

// Alternative avios.get using async/await

// const Profile = async () => {
//   try {
//       const res = await axios.get('http://localhost:8080/user/1');
//       console.log(res.data);
//   } catch (err) {
//       // Handle Error Here
//       console.error(err);
//   }
// };

// Profile();
