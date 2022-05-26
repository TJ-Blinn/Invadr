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
