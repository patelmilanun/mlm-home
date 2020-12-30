import { Box } from "@material-ui/core";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box ml={30}>{children}</Box>
    </>
  );
};

export default DashboardLayout;
