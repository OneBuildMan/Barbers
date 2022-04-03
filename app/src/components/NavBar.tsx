import { Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React from "react";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles({
  appbar: {
    background: "gray",
  },
  logo: {
    width: "100px",
    height: "90px",
    margin: "10px",
  },
  grow: {
    flexGrow: 1,
  },
});

const CustomNavbar = () => {
  const styles = useStyles();

  return (
    <AppBar position="static" className={styles.appbar} color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <img src="logo.png" alt="logo" className={styles.logo} />
          <div className={styles.grow}></div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomNavbar;
