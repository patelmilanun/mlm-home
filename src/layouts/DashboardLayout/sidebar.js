import { NavLink } from "react-router-dom";
import { history } from "utils/history";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Box,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Monitor,
  Video,
  Share2,
  DollarSign,
  Settings,
  Menu,
} from "react-feather";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  logoContainer: {
    verticalAlign: "middle",
  },
  navItem: {
    margin: theme.spacing(1, 0),
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  activNavItem: {
    color: "#FFFFFF",
    backgroundColor: "#243e63",
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    "&:hover, &:focus": {
      backgroundColor: "#243e63",
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box pl={2}>
          <Box py={1}>
            <IconButton size="medium" aria-label="menu">
              <Menu />
            </IconButton>
            <Box ml={1} display="inline" className={classes.logoContainer}>
              <img alt="logo" src="/static/logo-full.svg" width="130" />
            </Box>
          </Box>
        </Box>
        {/* <Toolbar /> */}
        <Divider />
        <div className={classes.drawerContainer}>
          <Box pl={2}>
            <List>
              {[
                { text: "Dashboard", icon: Monitor, path: "/app/dashboard" },
                { text: "Course Video", icon: Video, path: "/app/course" },
                { text: "Referal Tree", icon: Share2, path: "/app/referal" },
                {
                  text: "Widthdrwal",
                  icon: DollarSign,
                  path: "/app/widthdrwal",
                },
              ].map((item, index) => (
                <ListItem
                  component={NavLink}
                  button
                  key={item.text}
                  to={item.path}
                  activeClassName={classes.activNavItem}
                  className={classes.navItem}
                >
                  <ListItemIcon>
                    {/* <item.icon /> */}
                    {history.location.pathname === item.path ? (
                      <item.icon color="white" />
                    ) : (
                      <item.icon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider />
          <Box pl={2}>
            <List>
              {[{ text: "Settings", icon: Settings }].map((item, index) => (
                <ListItem button key={item.text}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
