import { Box, useMediaQuery } from "@material-ui/core";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { useTheme } from "@material-ui/core/styles";
import { useSelector } from "store";

const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const { sidebar, isFullScreen } = useSelector((state) => state.common);

  return (
    <>
      <Sidebar />

      <Box ml={isSmall || isFullScreen ? 0 : sidebar === "full" ? 30 : 11}>
        <Topbar />
        {children}
      </Box>
    </>
  );
};

export default DashboardLayout;
