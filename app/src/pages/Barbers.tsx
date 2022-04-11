import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../components/NavBar";

const useStyles = makeStyles({
  
});

function BarbersPage() {
  const styles = useStyles();

  return (
    <div>
      <Navbar />
      <div>Barbers</div>
    </div>
  )
}

export default BarbersPage;