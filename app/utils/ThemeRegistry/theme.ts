import { Open_Sans, Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poopins = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0097FF", // DodgerBlue / light blue .imp
      dark: "#0D254B", //dark blue .imp
      contrastText: "#ffff",
      light: "#F2F9FF", // light sky blue .imp
    },
    secondary: {
      main: "#ff9525", // yellow .imp
      dark: "#005faf", //medium blue .imp
      contrastText: "#747475", // light gray .imp
      light: "#E3F2FF", // .imp
    },
  },
  typography: {
    fontFamily: poopins.style.fontFamily,
  },

  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
