import Likes from "./Likes";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Navigation from "./Navigation";

const Profile = function () {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3003/user/1`)

      .then((result) => {
        setUserData(result.data);
      })
      .catch((err) => {
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
          <div className="profile_name">
            <h2>
              <span className="profile--bold">
                Greetings Invadr {userData.name}!
              </span>
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
