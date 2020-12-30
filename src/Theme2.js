import { theme } from "./Theme";

export const theme2 = {
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      main: "#243e63",
    },
  },
};
