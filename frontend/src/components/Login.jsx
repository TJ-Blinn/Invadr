import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Stack, Button, Container } from "@mui/material";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();

  // add to CSS
  // height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;

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

    // try {
    //   const response = await axios.post(
    //     LOGIN_URL,
    //     JSON.stringify({ email, password })
    //   );
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response.status === 400) {
    //     setErrMsg("Missing Email or Password");
    //   } else {
    //     setErrMsg("Login Failed");
    //   }
    // }
  };

  return (
    <Container
      className="login-container"
      maxWidth="false"
      sx={{ height: "100vh", width: "100vw" }}
    >
      <nav class="login-nav">
        <h1 class="page-name">INVADR</h1>
      </nav>
      {/* -------- no NAV display on Login page -------- */}

      <div className="body-title">
        <p>Login In</p>
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

          <Button size="large" variant="outlined" color="error" type="reset">
            Reset
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
