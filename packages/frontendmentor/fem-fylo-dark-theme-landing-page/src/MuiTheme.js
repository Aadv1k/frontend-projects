import { createTheme } from "@mui/material/styles";
import { colors } from "./Variables";

const theme = createTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",

    button: {
      fontFamily: "'Raleway', sans-serif",
    },

    h1: {
      fontSize: "2rem",
      maxWidth: "35ch",
      fontWeight: 700,
      fontFamily: "'Raleway', sans-serif",
    },

    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
      maxWidth: "35ch",
      fontFamily: "'Raleway', sans-serif",
    },

    h3: {
      fontSize: "1.3em",
      fontWeight: 700,
      lineHeight: 1.5,
      maxWidth: "35ch",
      fontFamily: "'Raleway', sans-serif",
    },

    body2: {
      maxWidth: "60ch",
      fontSize: "1em",
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },

      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },

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
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },

        body: {
          backgroundColor: colors.main,
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
