/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    /* Here, res.send is sending text only to page on browser
    Here, req.params.id is capturing input after the "/" in the url, on the browser
    res.send("X-user" + req.params.id);
    */

    // USe this as placeholder DATA for React before connecting the db
    res.json({
      id: req.params.id,
      name: "TJ Blinn",
    });
  });

  // router represents everything in this file express.Router()
  //
  router.get("/", (req, res) => {
    res.send("users");
  });
  return router;
};
