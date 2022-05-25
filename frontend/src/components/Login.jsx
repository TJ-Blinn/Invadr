import React from "react";

import { Box, TextField, Stack, Button, Container } from "@mui/material";

export default function Login() {
  return (
    <Container
      className="login-container"
      maxWidth="master"
      sx={{ height: "100vh" }}
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
      >
        <Stack spacing={2}>
          <TextField required type="email" label="Email" />
          <TextField required type="password" label="Password" />
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
