import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import BarbersPage from "../pages/Barbers";
import ReservationPage from "../pages/Reservation";
import RegistrationPage from "../pages/BarberRegistration";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
  fullHeight: {
    height: "100%",
  },
});

const Router = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.fullHeight}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/barbers" element={<BarbersPage />} />
            <Route path="/barber-registration" element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Router;
