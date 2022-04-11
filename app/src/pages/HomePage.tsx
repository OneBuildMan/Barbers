import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import MenuButton from "../components/MenuButton";
import Navbar from "../components/NavBar";

const useStyles = makeStyles({
  background: {
    position: "relative",
  },
  videoWrapper: {
    position: "absolute",
    top: 0,
    zIndex: -9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    background: "rgba(0,0,0,.4)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: -1,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 200
  },
  grow: {
    flexGrow: 1
  }
});

function HomePage() {
  const styles = useStyles();

  return (
    <div>
      <Navbar />
      <div className={styles.overlay}>
        <Typography color="secondary">
         D & D style
        </Typography>
        <div className={styles.buttonContainer}>
        <MenuButton
          variant="contained"
          color="secondary"
          route="/reservation"
        >
          Make a reservation
        </MenuButton>
        <MenuButton
          variant="contained"
          color="secondary"
          route="/barber-registration"
        >
          Are you a barber?
        </MenuButton>
        </div>
      </div>
      <div className={styles.videoWrapper}>
        <video className={styles.background} loop autoPlay>
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default HomePage;
