import { Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FullScreenMenu from "./Menu";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "#2B2C28 !important",
  },
  logo: {
    width: "100px",
    height: "90px",
    margin: "10px",
    borderRadius: 15,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row"
  },
  title: {
    fontFamily: "Cookie"
  },
  whiteText:{
    color: "white"
  },
  grow: {
    flexGrow: 1,
  },
});

const CustomNavbar = () => {
  const styles = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="relative" style={{zIndex: 1}} className={styles.appbar}>
        <Container maxWidth="xl">
          <Toolbar>
            <img src="logo.png" alt="logo" className={styles.logo}/>
            <div className={styles.titleWrapper}>
              <Typography color="secondary" className={styles.title} variant="h4">Style <span className={styles.whiteText}>for a living</span></Typography>
            </div>
            <div className={styles.grow}></div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <FullScreenMenu open={open} closeDrawer={closeDrawer} />
    </>
  );
};

export default CustomNavbar;
