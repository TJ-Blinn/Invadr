import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Stack, Button, Container } from "@mui/material";
import axios from "axios";

const styles = {
  "&#outlined-basic-root": {
    border: "10px black solid",
  },
};

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3003/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        // This useNavigate will Programmatically navigate back to home using React router
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container
      className="login-container"
      maxWidth="false"
      sx={{ height: "100vh", width: "100vw" }}
    >
      <nav class="login-nav">
        <h1 class="title-page-gradient">INVADR</h1>
      </nav>

      <div className="body-title">
        <p>Login</p>
        <br />
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50%", margin: "auto" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack spacing={2}>
          <TextField
            required
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <br />
        <Stack spacing={1} direction="column" alignItems="center">
          <Button size="large" variant="contained" type="submit">
            Login
          </Button>

          <Button
            sx={{
              color: "white",
              backgroundColor: "#2F1B5B",
              borderColor: "#2F1B5B",
            }}
            size="large"
            variant="outlined"
            type="reset"
          >
            Reset
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
