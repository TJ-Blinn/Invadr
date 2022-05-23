import React from "react";
import { Link } from "@mui/material";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import { Hidden } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";

const navigationLinks = [
  { name: "Homepage", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  let navigate = useNavigate();

  // Adds space between the links on the nav pullout
  const navStyles = {
    marginRight: 20,
  };

  // AppBar and Toolbar MUI components to contain active elements, also adds padding and spacing
  // Container is used here to put constraints on the toolbar when window is large
  // Hidden MUI component is hidding 1) the menu bar when screen is small, 2) the menubar icon when screen is small

  const [drawer, setDrawer] = React.useState(false);

  // Add icon components in this array when more pages are added
  const icons = [<HomeIcon />, <LoginIcon />, <InfoIcon />];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => setDrawer(true)}
    >
      <List>
        {navigationLinks.map((navObj, index) => (
          <ListItem key={navObj.name} disablePadding>
            {/* navigate is the component that we use to pass in our obj's href links to each page */}
            <ListItemButton onClick={() => navigate(navObj.href)}>
              {/* This icons var contains the icon components form MUI. Add more to it so that they render in the drawer */}
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={navObj.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Hidden smDown>
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
          {/* Hamburger menu and pop out drawer */}
          <Hidden smUp>
            <IconButton onClick={() => setDrawer(true)}>
              <MenuIcon />
              <Drawer
                anchor={"right"}
                open={drawer}
                onClose={() => setDrawer(false)}
              >
                {list("right")}
              </Drawer>
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
