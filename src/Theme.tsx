import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#F23A1C",
    },
    secondary: {
      main: "#1DCE3E",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
