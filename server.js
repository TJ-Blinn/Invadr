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

// Mount all resource routes
const userRouter = userRouteCreator(db);

app.use("/accounts", userRouter);

// remove the id from the route on front-end, not needed
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  db.query(
    `
SELECT * FROM users WHERE id = $1;
`,
    [userId]
  ).then(({ rows }) => {
    res.status(200).json(rows[0]);
  });
});

// --------------------------------------      LOGIN
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    `
  SELECT * FROM users WHERE email = $1;
  `,
    [email]
  )
    .then(({ rows }) => {
      if (rows.length == 0) {
        return res.status(400).send({ status: 0, message: "Email not found" });
      }

      const user = rows[0];
      if (user.password !== password) {
        return res
          .status(400)
          .send({ status: 0, message: "Password is not valid" });
      }

      return res.status(200).send({
        status: 1,
        message: `Login successful for ${user.name}`,
        user,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
});

// --------------------------------------

app.get("/likes", (req, res) => {
  db.query(
    `
SELECT * FROM likes WHERE user_id = 1;
`
  )
    .then(({ rows }) => {
      res.status(200).json(rows);
    })
    .catch((error) => {
      console.log(error);
    });
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

app.get("/about", (req, res) => {
  res.send("about");
});

app.post("/register", (req, res) => {
  res.send("register");
});

/* ----------------------- */

app.post("/test", (req, res) => {
  const like = req.body.isLiked;
  const game = req.body.game_id;

  if (like === true) {
    db.query(
      `INSERT INTO likes ( user_id, game_id, is_liked)
       VALUES (1, $1, $2)`,

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
