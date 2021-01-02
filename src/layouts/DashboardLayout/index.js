import { Box, useMediaQuery, Hidden } from "@material-ui/core";
import Sidebar from "./sidebar";
import { useTheme } from "@material-ui/core/styles";

const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  return (
    <>
      <Hidden smDown>
        <Sidebar />
      </Hidden>
      <Box ml={isSmall ? 0 : 30}>{children}</Box>
    </>
  );
};

export default DashboardLayout;
