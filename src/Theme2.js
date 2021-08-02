import { theme } from "./Theme";

export const theme2 = {
  ...theme,
  palette: {
    ...theme.palette,
    primary: theme.palette.augmentColor({
      main: "#243e63",
    }),
    secondary: theme.palette.augmentColor({
      main: "#634924",
    }),
  },
  props: {
    ...theme.props,
    MuiTextField: {
      InputLabelProps: {
        style: { color: "rgb(160, 174, 192)" },
      },
    },
  },
};
