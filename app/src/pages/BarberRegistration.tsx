import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import TextField from "../components/TextField";
import Navbar from "../components/NavBar";

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    minHeight: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  image: {
    minHeight: "87.5vh",
    backgroundImage: `url(/reservation.jpg)`,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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
    flexDirection: "row",
  },
  registrationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  registrationFields: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
  },
  verticalBar: {
    borderLeft: "10px solid #EAC435",
    width: 50,
    height: "100%",
  },
  title: {
    fontFamily: "Cookie",
  },
  whiteText: {
    color: "white",
  },
  textField: {
    marginTop: 30,
    marginBottom: 30,
  },
  photo:{
    margin: 100,
    width: 350
  }
});

const RegistrationPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.overlay}>
      <div className={styles.verticalBar}></div>
        <div className={styles.registrationContainer}>
          <Typography color="secondary" className={styles.title} variant="h4">
            Register as a <span className={styles.whiteText}>barber</span>
          </Typography>
          <div className={styles.registrationFields}>
            <Grid container spacing={3}>
              <Grid xs={12} className={styles.textField}>
                <TextField value="fsf" label="Email" />
              </Grid>
              <Grid xs={12} className={styles.textField}>
                <TextField value="asfs" label="Name" />
              </Grid>
              <Grid xs={12} className={styles.textField}>
                <TextField value="sfs" label="Random" />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={styles.photo}>
          <Button variant="contained" >Add a photo</Button>
        </div>
      </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default RegistrationPage;
