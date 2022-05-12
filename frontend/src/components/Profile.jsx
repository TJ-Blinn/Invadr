// In the function, add a return statement that will return JSX with an <h1>

import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
// import Navigation from "./Navigation";

// route for testing only, hard-coded and must be updated later
const Profile = function () {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/1`)
      // result is what is being returned by axios from the API
      .then((result) => {
        console.log(result.data);
        setUserData(result.data);
      });
  }, []);

  return (
    <aside>
      <div>
        <AccountBoxOutlinedIcon />
      </div>
      <br />
      <div className="profile__name">
        <h2>
          <span className="profile--bold">{userData.name}</span>
        </h2>
      </div>
      <br />
      <div>
        <h2>
          <span className="profile--bold">{userData.email}</span>
        </h2>
      </div>
    </aside>
  );
};

export default Profile;

// hook is setting up state and retireving data for it
// when used in other component, we can call on Profile to change the state
// return [userData, setUserData];
