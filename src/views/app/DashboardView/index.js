import { NavLink } from "react-router-dom";
import { history } from "utils/history";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Box,
  IconButton,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Monitor,
  Video,
  Share2,
  DollarSign,
  Settings,
  Menu,
  Users,
  Check,
  ExternalLink,
  ChevronDown,
} from "react-feather";

import Sidebar from "components/Sidebar";

const useStyles = makeStyles((theme) => ({
  cardIcon: {
    verticalAlign: "middle",
    stroke: "#FFFFFF",
  },
  cardIconContainer: {
    backgroundColor: "#243e63",
    padding: theme.spacing(1),
    borderRadius: 30,
  },
  cardGridContainer: {
    textAlign: "center",
  },
  smallAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  bigAvatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    display: "inline-block",
  },
  miniProfileContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: "6px",
    display: "inline-flex",
    alignItems: "center",
    border: "1px solid #F4F4F4",
  },
  miniProfileDownArrow: {
    verticalAlign: "middle",
  },
  btnShareRefLink: {
    borderRadius: 6,
    // backgroundColor:
  },
}));

const DashboardView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  return (
    <>
      {/* <Sidebar />
      <Box ml={30}> */}
      <Box>
        <Box my={2}>
          <Container maxWidth="xl">
            <Box mb={2}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="h4">Dashboard</Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    disableElevation
                    className={classes.miniProfileContainer}
                    endIcon={
                      <Box px={1}>
                        <ChevronDown
                          size="20"
                          className={classes.miniProfileDownArrow}
                        />
                      </Box>
                    }
                  >
                    <Avatar
                      className={classes.smallAvatar}
                      alt="user"
                      src="https://i.pravatar.cc/50"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Grid container spacing={3} justify="space-between">
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  {[
                    {
                      label: "Wallet Amount",
                      value: "500 ₹",
                      icon: DollarSign,
                    },
                    {
                      label: "Refered People",
                      value: "10",
                      icon: Users,
                    },
                    {
                      label: "Completed Course",
                      value: "3",
                      icon: Check,
                    },
                    {
                      label: "Withdrawn",
                      value: "1000 ₹",
                      icon: ExternalLink,
                    },
                  ].map((item, index) => (
                    <Grid item xs={6} md={6} key={index}>
                      <Card style={{ height: isSmall ? "150px" : "100px" }}>
                        <CardContent>
                          <Grid
                            container
                            spacing={isSmall ? 1 : 4}
                            alignItems="center"
                          >
                            <Grid
                              item
                              xs={12}
                              md={3}
                              className={
                                isSmall ? classes.cardGridContainer : ""
                              }
                            >
                              <Box
                                mr={isSmall ? 0 : 2}
                                display="inline-block"
                                className={classes.cardIconContainer}
                              >
                                <item.icon className={classes.cardIcon} />
                              </Box>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={9}
                              className={
                                isSmall ? classes.cardGridContainer : ""
                              }
                            >
                              <Typography variant="h6">{item.value}</Typography>
                              <Typography variant="body2">
                                {item.label}
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Box textAlign="center">
                      <Box my={2}>
                        <Avatar
                          className={classes.bigAvatar}
                          alt="user"
                          src="https://i.pravatar.cc/150"
                        />
                      </Box>
                      <Box my={2}>
                        <Typography variant="h6">John Doe</Typography>
                        <Typography variant="subtitle1">
                          john.doe@gmail.com
                        </Typography>
                      </Box>
                      <Button
                        color="primary"
                        variant="contained"
                        className={classes.btnShareRefLink}
                        startIcon={<Share2 />}
                      >
                        <Box my={1} mx={1}>
                          <Typography variant="subtitle2">
                            Share Your Referal Link
                          </Typography>
                        </Box>
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default DashboardView;
