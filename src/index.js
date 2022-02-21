import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fb7541",
    },
    secondary: {
      main: "#fb7541",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#737373 !important",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "& .MuiInput-input": {
            borderBottom: "2px solid #fb7541 !important",
            color: "#4f4e4e !important",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#fb7541 !important",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "#fb7541 !important",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 1024,
      lg: 1300,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Open Sans"].join(","),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      // classes={{ variantSuccess: classes.success }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
