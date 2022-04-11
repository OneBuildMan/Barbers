import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../components/NavBar";

const useStyles = makeStyles({
  
});

function ReservationPage() {
  const styles = useStyles();

  return (
    <div>
      <Navbar />
      <div>Reservations</div>
    </div>
  )
}

export default ReservationPage