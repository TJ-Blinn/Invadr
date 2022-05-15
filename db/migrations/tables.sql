DROP TABLE IF EXISTS likes, comments, games, users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE games (
  id SERIAL PRIMARY KEY NOT NULL,
  thumbnail_url VARCHAR(2048),
  cover_url VARCHAR(2048),
  name VARCHAR(255) NOT NULL,
  genre VARCHAR(50),
  description VARCHAR(2048) DEFAULT 'I am a description.',
  rawg_id INTEGER
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER,
  game_id INTEGER,
  is_liked BOOLEAN
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users (id),
  game_id INTEGER REFERENCES games (id),
  comment VARCHAR(2048),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER USER reviewr WITH SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE reviewrdb TO reviewr;
GRANT ALL PRIVILEGES ON TABLE likes TO reviewr
