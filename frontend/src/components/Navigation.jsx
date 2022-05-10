import React from "react";
import { Link } from "@mui/material";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import { Hidden } from "@mui/material";

const navigationLinks = [
  { name: "Homepage", href: "/" },
  { name: "Login", href: "http://localhost:3001/login" },
  { name: "Register", href: "/register" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  // Adds space between the links on the nav pullout
  const navStyles = {
    marginRight: 20,
  };
  // AppBar and Toolbar MUI components to contain active elements, also adds padding and spacing
  // Container is used here to put constraints on the toolbar when window is large
  // Hidden MUI component is hidding the menu bar when screen is small
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Hidden>
            {navigationLinks.map((item) => (
              <Link
                sx={navStyles}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
