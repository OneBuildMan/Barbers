import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { makeStyles, Typography  } from "@material-ui/core";

import Navbar from "../components/NavBar";

const barbers= ["Popescu George", "Neacsu Mihai", "Alex Avram", "Random", "Random", "Random"]

const useStyles = makeStyles({
  container:{
    width: "100vw",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    minHeight: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 100
  },
  card: {
    margin: 40
  }
});

const BarberCard = (p: {imagePath?: string, name: string}) => {

  const styles= useStyles()

  return (
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="reservation.jpg"
          alt="green iguana"
        />
        <CardContent style={{backgroundColor: "white"}}>
          <Typography gutterBottom variant="h5" color="secondary">
            {p.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const BarbersPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>{barbers.map((barber) => {
        return <BarberCard name={barber} />
      })}</div>
    </div>
  )
}

export default BarbersPage;