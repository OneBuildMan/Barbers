import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../components/NavBar";

const useStyles = makeStyles({
  image: {
    minHeight: "87.5vh",
    backgroundImage: `url(/contact.jpg)`,
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
  title: {
    fontFamily: "Cookie",
  },
  smallTitle: {
    fontFamily: "Cookie",
    color: "white",
  },
  text: {
    fontFamily: "Playfair",
    color: "white",
  },
});

const ContactPage = () => {
  const styles = useStyles();

  return (
    <div style={{ maxHeight: "100vh" }}>
      <Navbar />
      <div className={styles.overlay}>
        <Grid container spacing={3}>
          <Grid style={{ marginBottom: 50 }} item xs={12}>
            <Typography variant="h2" color="secondary" className={styles.title}>
              Stay in touch
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant="h3" color="secondary" className={styles.title}>
              Adress
            </Typography>
            <Typography variant="h4" className={styles.smallTitle}>
              City
            </Typography>
            <Typography variant="h5" className={styles.text}>
              Timisoara
            </Typography>
            <Typography variant="h4" className={styles.smallTitle}>
              Street
            </Typography>
            <Typography variant="h5" className={styles.text}>
              Bulevardul Vasile Pârvan 2
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant="h3" color="secondary" className={styles.title}>
              Program
            </Typography>
            <Typography variant="h4" className={styles.smallTitle}>
              Monday - Friday
            </Typography>
            <Typography variant="h5" className={styles.text}>
              09:00 - 19:00
            </Typography>
            <Typography variant="h4" className={styles.smallTitle}>
              Weekend
            </Typography>
            <Typography variant="h5" className={styles.text}>
              off
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant="h3" color="secondary" className={styles.title}>
              Contact us
            </Typography>
            <Typography variant="h4" className={styles.smallTitle}>
              Email
            </Typography>
            <Typography variant="h5" className={styles.text}>
              mitadanyel@gmail.com
            </Typography>
            <Typography variant="h4" className={styles.smallTitle}>
              Phone number
            </Typography>
            <Typography variant="h5" className={styles.text}>
              +40786457284
            </Typography>
          </Grid>
          <Grid></Grid>
        </Grid>
      </div>
      <div className={styles.image}></div>
    </div>
  );
}

export default ContactPage;
