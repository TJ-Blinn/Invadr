// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 3003;
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
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
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
  console.log(req);
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

/* ----------------------- */

app.post("/test", (req, res) => {
  console.log("++++++++++++++++", req);
  const like = req.body.isLiked; //can only be true or false. When a game is clicked, it will show true
  const game = req.body.game_id;
  console.log("77777777", req.body);

  // if we get a true like, do an insert statement
  // if we get a false, do a delete statement

  if (like === true) {
    // ADD a new query with Select statement (if [] then there is no game, then insert)
    // hit the db, check for the game_id
    // if game id is here, delete it, if
    // chain promises for the SELECT with the next the if statement + .then ? if statement, is it doesn't exist, INSERT into games table

    db.query(
      `INSERT INTO likes ( user_id, game_id, is_liked)
       VALUES (1, $1, $2)`,

      // If the relation exists update the value
      // if not insert
      //

      [game, like]
    )
      .then(() => {
        res.status(200).json();
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json(error);
      });
  } else if (like === false) {
    db.query(`DELETE FROM likes WHERE user_id=1 AND game_id =$1`, [game])
      .then(() => {
        res.status(200).json();
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json(error);
      });
  }
});

/*
 main/routes.js/router.put

 //Edit posts//

router.put('/api/put/post', (req, res, next) => {
 const values = [req.body.title, req.body.body, req.body.uid, req.body.pid, req.body.username]
 pool.query('UPDATE posts SET title = $1, body = $2, user_id = $3, author= $5, date_created = NOW() WHERE pid = $4', values, (q_err, q_res) => {
  if (q_err) return next(q_err);
  console.log(q_res)
  res.json(q_res.rows);
 });
});

 ----------------------------------------------



 /*
   USER PROFILE ROUTES SECTION

   main/routes.js/router.post

//Save user profile data to the db//

router.post('/api/post/userprofiletodb', (req, res, next) => {
  const values = [req.body.profile.nickname, req.body.profile.email, req.body.profile.email_verified]
  pool.query('INSERT INTO users(username, email, date_created, email_verified) VALUES($1, $2, NOW(), $3) ON CONFLICT DO NOTHING', values, (q_err, q_res) => {
   if (q_err) return next(q_err);
   console.log(q_res)
   res.json(q_res.rows);
  });
 });

------------------------------------------
main/routes.js/router.post

//save posts to db//

router.post('/api/post/poststodb', (req, res, next) => {
 const values = [req.body.title, req.body.body, req.body.uid, req.body.username]
 pool.query('INSERT INTO posts(title, body, user_id, author, date_created) VALUES($1, $2, $3, $4, NOW())', values, (q_err, q_res) => {
  if (q_err) return next(q_err);
  console.log(q_res)
  res.json(q_res.rows);
 });
});


 */
