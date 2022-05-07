const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    console.log("homepage endpoint hit", req.body);

    req.session.user_id = req.params.id;
    res.redirect("/");
  });

  router.post("/register", (req, res) => {
    console.log("signup endpoint hit", req.body);

    let { f_name, l_name, email, password } = req.body;
    if (
      f_name === undefined ||
      l_name === undefined ||
      email === undefined ||
      password === undefined
    ) {
      res.json({ success: false }); // same as res.send(JSON.stringify({ success: false })
      return;
    }
  });

  return router;
};

//authentication.js //

//res.json
/*
click on sign up icon
type in f_name
type l_name
type email
create password
click register button
{ f_name: “string”,
  l_name: “string”,
  email: “string”,
  pswrd: “”
};post request app.post(“/register”)
receive user input(object) from the client
validate inputs (checks to see if user data already
   exist etc)
   stores user input in db
   send confirmation user has been created
   (React handles rendering)  });
   */
