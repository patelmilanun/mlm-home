import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#6415ff",
      },
      secondary: {
        main: "#f7fafc",
      },
      text: {
        primary: "#243e63",
        secondary: "#3c0d99",
      },
    },
    typography: {
      fontFamily: "Inter",
      h1: {
        fontSize: "4rem", //64px
        fontWeight: 900,
      },
      h2: {
        fontSize: "3rem", //48px
        fontWeight: 900,
        lineHeight: "1.2",
      },
      h3: {
        fontSize: "2.25rem", //36px
        fontWeight: 900,
      },
      h4: {
        fontSize: "1.875rem", //30px
        fontWeight: 900,
      },
      h5: {
        fontSize: "1.5rem", //24px
        fontWeight: 900,
      },
      h6: {
        fontSize: "1.25rem", //20px
        fontWeight: 900,
      },
      subtitle1: {
        fontSize: "1.125rem", //18px
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: "1rem", //16px
        fontWeight: 700,
      },
      body1: {
        fontSize: "0.875rem", //14px
        fontWeight: 700,
      },
      body2: {
        fontSize: "0.875rem", //14px
        fontWeight: 600,
      },
      button: {},
      caption: {
        fontSize: "0.75rem", //12px
        fontWeight: 500,
      },
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: "none",
        },
      },
      MuiCardContent: {
        root: {
          "&:last-child": {
            paddingBottom: "16px",
          },
        },
      },
    },
  })
);
