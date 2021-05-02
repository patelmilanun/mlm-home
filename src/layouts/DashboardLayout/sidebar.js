import { useState } from "react";
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
  useMediaQuery,
  Hidden,
  Grid,
  Container,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "store";
import { setSidebar } from "slices/common";
import {
  Monitor,
  Video,
  Share2,
  DollarSign,
  Settings,
  Menu,
} from "react-feather";

const drawerWidth = 240;
const miniDrawerWidth = 90;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  miniDrawer: {
    width: miniDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  miniDrawerPaper: {
    width: miniDrawerWidth,
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
  miniNavItem: {
    margin: theme.spacing(1, 0),
    borderRadius: 30,
    maxWidth: theme.spacing(7),
  },
  activNavItem: {
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.main,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  miniActivNavItem: {
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 30,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const { sidebar, isFullScreen } = useSelector((state) => state.common);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarToggle = () => {
    dispatch(setSidebar(sidebar === "full" ? "mini" : "full"));
  };

  const miniDrawer = (
    <>
      <Box pl={2}>
        <Box py={1}>
          <IconButton
            size="medium"
            aria-label="menu"
            onClick={handleSidebarToggle}
          >
            <Menu />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <div className={classes.drawerContainer}>
        <Box pl={2}>
          <List>
            {[
              { text: "Dashboard", icon: Monitor, path: "/app/dashboard" },
              { text: "Course Video", icon: Video, path: "/app/course" },
              { text: "Referral Tree", icon: Share2, path: "/app/referral" },
              {
                text: "Withdrawal",
                icon: DollarSign,
                path: "/app/withdrawal",
              },
            ].map((item, index) => (
              <ListItem
                component={NavLink}
                button
                exact
                key={item.text}
                to={item.path}
                activeClassName={classes.miniActivNavItem}
                className={classes.miniNavItem}
              >
                <ListItemIcon>
                  {/* <item.icon /> */}
                  {history.location.pathname === item.path ? (
                    <item.icon color="white" />
                  ) : (
                    <item.icon />
                  )}
                </ListItemIcon>
                {/* <ListItemText primary={item.text} /> */}
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Box pl={2}>
          <List>
            {[{ text: "Settings", icon: Settings, path: "/app/setting" }].map(
              (item, index) => (
                <ListItem
                  component={NavLink}
                  button
                  exact
                  key={item.text}
                  to={item.path}
                  activeClassName={classes.miniActivNavItem}
                  className={classes.miniNavItem}
                >
                  <ListItemIcon>
                    {history.location.pathname === item.path ? (
                      <item.icon color="white" />
                    ) : (
                      <item.icon />
                    )}
                  </ListItemIcon>
                  {/* <ListItemText primary={item.text} /> */}
                </ListItem>
              )
            )}
          </List>
        </Box>
      </div>
    </>
  );

  const drawer = (
    <>
      <Box pl={2}>
        <Box py={1}>
          <IconButton
            size="medium"
            aria-label="menu"
            onClick={isSmall ? handleDrawerToggle : handleSidebarToggle}
          >
            <Menu />
          </IconButton>
          <Box ml={1} display="inline" className={classes.logoContainer}>
            <img alt="logo" src="/static/logo-full.svg" width="130" />
          </Box>
        </Box>
      </Box>
      <Divider />
      <div className={classes.drawerContainer}>
        <Box pl={2}>
          <List>
            {[
              { text: "Dashboard", icon: Monitor, path: "/app/dashboard" },
              { text: "Course Video", icon: Video, path: "/app/course" },
              { text: "Referral Tree", icon: Share2, path: "/app/referral" },
              {
                text: "Withdrawal",
                icon: DollarSign,
                path: "/app/withdrawal",
              },
            ].map((item, index) => (
              <ListItem
                component={NavLink}
                button
                exact
                key={item.text}
                to={item.path}
                onClick={
                  ((isSmall || isFullScreen) && handleDrawerToggle) || null
                }
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
            {[{ text: "Settings", icon: Settings, path: "/app/setting" }].map(
              (item, index) => (
                <ListItem
                  component={NavLink}
                  button
                  exact
                  key={item.text}
                  to={item.path}
                  onClick={
                    ((isSmall || isFullScreen) && handleDrawerToggle) || null
                  }
                  activeClassName={classes.activNavItem}
                  className={classes.navItem}
                >
                  <ListItemIcon>
                    {history.location.pathname === item.path ? (
                      <item.icon color="white" />
                    ) : (
                      <item.icon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </div>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      {/* <Hidden mdUp implementation="css"> */}
      {(isSmall || isFullScreen) && (
        <>
          <Box py={1}>
            <Container maxWidth="xl">
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <img alt="logo" src="/static/logo-full.svg" width="130" />
                </Grid>
                <Grid item>
                  <IconButton
                    size="medium"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                  >
                    <Menu />
                  </IconButton>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </>
      )}

      {/* </Hidden> */}
      {/* <Hidden smDown implementation="css"> */}
      {!isSmall && !isFullScreen && (
        <Drawer
          classes={{
            paper:
              sidebar === "full"
                ? classes.drawerPaper
                : classes.miniDrawerPaper,
          }}
          variant="permanent"
          open
        >
          {sidebar === "full" ? drawer : miniDrawer}
        </Drawer>
      )}
      {/* </Hidden> */}
    </>
  );
};

export default Sidebar;
