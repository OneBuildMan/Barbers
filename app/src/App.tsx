import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./routing/router";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2B2C28",
    },
    secondary: {
      main: "#EAC435",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
