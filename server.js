// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const cors = require("cors");
app.use(cors());

// This is requiring all the data being exported from users.js.
// The function in the users.js file is using the "router" var name to create user routes
const userRouteCreator = require("./routes/users");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const { response } = require("express");
const db = new Pool(dbParams);

db.connect().catch((err) => console.log("THIS IS THE ERROR:", err));

// const db = "This is just filler for now! ----------";

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: replace routes below. Ex users and widgets are files held in the db > schema and seeds folders.
// const userRouteCreator = require("./routes/users");
// const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: replace routes below. Ex users and widgets are files held in the db > schema and seeds folders.
const userRouter = userRouteCreator(db);

app.use("/accounts", userRouter);
// app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// remove the id from the route on front-end, not needed
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  // console.log("================", req.params.id);
  db.query(
    `
SELECT * FROM users WHERE id = $1;
`,
    [userId]
  ).then(({ rows }) => {
    // console.log("+++++++++++++++++++", req.params.id);
    res.status(200).json(rows[0]);
  });
  // res.send("user" + req.params.id);
});

// --------------------------------------
app.get("/likes", (req, res) => {
  // const userId = req.params.id;
  // console.log("================", req.params.id);
  db.query(
    `
SELECT * FROM likes WHERE user_id = 1;
`
    // [userId]
  )
    .then(({ rows }) => {
      // console.log("+++++++++++++++++++", req.params.id);
      res.status(200).json(rows);
    })
    .catch((error) => {
      console.log(error);
    });
  // res.send("user" + req.params.id);
});

// ---------------------------------------

// ---------------------------------------
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// -----------------

// app.get("/about", (req, res) => {
//   res.render("about");
// });

app.get("/about", (req, res) => {
  res.send("about");
});

app.post("/register", (req, res) => {
  res.send("register");
});
