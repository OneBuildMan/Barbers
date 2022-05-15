import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Select } from "@mui/material";
import React from "react";
import Navbar from "../components/NavBar";
import TextField from "../components/TextField";

const useStyles = makeStyles({
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
    flexDirection: "column",
  },
  registrationContainer: {
    display: "flex",
    flexDirection: "row",
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
  textField:{
    marginTop: 30,
    marginBottom: 30
  }
});

const ReservationPage = () => {
  const styles = useStyles();

  return (
    <div>
      <Navbar />
      <div className={styles.overlay}>
        <Typography color="secondary" className={styles.title} variant="h4">
          Make your reservation <span className={styles.whiteText}>now</span>
        </Typography>
        <div className={styles.registrationContainer}>
          <div className={styles.verticalBar}></div>
          <div className={styles.registrationFields}>
            <Grid container spacing={3}>
              <Grid xs={12} className={styles.textField}>
                <TextField value="fsf" label="Email"/>
              </Grid>
              <Grid xs={12} className={styles.textField}>
                <TextField value="asfs" label="Name"/>
              </Grid>
              <Grid xs={12} className={styles.textField}>
                <Select value="sfs" label="Barber" />
              </Grid>
              <Grid xs={12} className={styles.textField}>
                <Select value="sfs" label="Hour" />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default ReservationPage;
