import React from "react";

import { Box, TextField, Stack, Button } from "@mui/material";

export default function Register() {
  return (
    <div className="container">
      <nav class="nav">
        <img class="hamburger" alt="filter button" />
        <h1 class="page-name">INVADR</h1>
        <img class="sign-up" alt="Sign Up" />
      </nav>
      {/* -------- NAV is the same accross all pages -------- */}

      <div className="body-title">
        <p>Sign In</p>
        <p>Don't have an account? Create one!</p>
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "75%", margin: "auto" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2}>
          <TextField required type="email" label="Email" />
          <TextField required type="password" label="Password" />
        </Stack>

        <Stack spacing={1} direction="column" alignItems="center">
          <Button size="large" variant="contained" type="submit">
            Login
          </Button>

          <Button size="large" variant="outlined" color="error" type="reset">
            Reset
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
