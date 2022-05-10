import React from "react";
import { Link } from "@mui/material";
// import { makeStyles } from "@mui/styles";

const navigationLinks = [
  { name: "Homepage", href: "/" },
  { name: "Login", href: "http://localhost:3001/login" },
  { name: "Register", href: "/register" },
  { name: "About", href: "/about" },
];

// Adds space between the links on the nav pullout
// const useStyles = makeStyles((theme) => ({
//   link: {
//     marginRight: 20,
//   },
// }));

export default function Navigation() {
  // const styles = useStyles();

  return (
    <div>
      {navigationLinks.map((item) => (
        <Link
          // className={styles.link}
          color="textPrimary"
          variant="button"
          underline="none"
          href={item.href}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
