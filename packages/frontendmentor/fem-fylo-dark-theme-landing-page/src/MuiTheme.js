import { createTheme } from "@mui/material/styles";
import { colors } from "./Variables";

const theme = createTheme({
  typography: {
    fontFamily: "'Raleway', sans-serif",
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          if (
            ownerState.color === "primary" &&
            ownerState.variant === "contained"
          ) {
            return {
              backgroundImage: `linear-gradient(90deg, ${colors.gradient.to}, ${colors.gradient.from})`,
              fontWeight: 700,
              borderRadius: "999px",
              textTransform: "capitalize",
            };
          }
          if (ownerState.color === "primary" && ownerState.variant === "text") {
            return {
              textTransform: "capitalize",
              color: "white",
              ":hover": {
                textDecoration: "underline",
              },
            };
          }
          return ownerState.style;
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.main,
          color: "#fff",
        },

        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
  },
});

export default theme;
