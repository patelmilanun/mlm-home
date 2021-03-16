import { NavLink } from "react-router-dom";
import {
  Typography,
  Divider,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Avatar,
  LinearProgress,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Share2,
  DollarSign,
  Users,
  Check,
  ExternalLink,
  ArrowRight,
} from "react-feather";

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
  mediumAvatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  bigAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
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
  },
  btnShareRefLinkTextContainer: {
    margin: "4px 0",
  },
  courseProgressbar: {
    borderRadius: 5,
    height: 6,
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
                  <Grid item xs={12}>
                    <Card>
                      <CardContent>
                        <Grid
                          container
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid item xs={9}>
                            <Typography variant="h6">
                              Recent Completed Courses
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Box textAlign="right">
                              <Link
                                component={NavLink}
                                to="/app/course"
                                underline="none"
                              >
                                <Typography variant="subtitle1">
                                  more{" "}
                                  <ArrowRight
                                    style={{ verticalAlign: "middle" }}
                                  />
                                </Typography>
                              </Link>
                            </Box>
                          </Grid>
                        </Grid>
                        <br />
                        {[
                          {
                            name: "How to solve Rubik's cube under 1 minute",
                            value: 80,
                          },
                          { name: "How to tie a tie", value: 60 },
                        ].map((item, index) => (
                          <Box key={index}>
                            <Box my={2}>
                              <Grid
                                container
                                justify="space-between"
                                alignItems="center"
                              >
                                <Grid item xs={12} md={6}>
                                  <Typography variant="subtitle1">
                                    {item.name}
                                  </Typography>
                                </Grid>
                                <Grid item xs={9} md={4}>
                                  <LinearProgress
                                    className={classes.courseProgressbar}
                                    variant="determinate"
                                    value={item.value}
                                  />
                                </Grid>
                                <Grid item xs={3} md={1}>
                                  <Typography align="right" variant="subtitle1">
                                    {item.value}%
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Box>
                            {index === 0 && <Divider />}
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Card>
                      <CardContent>
                        <Box textAlign="center">
                          <Box mb={2}>
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
                            <Box
                              my={0}
                              mx={1}
                              className={classes.btnShareRefLinkTextContainer}
                            >
                              <Typography variant="subtitle2">
                                Share Your Referal Link
                              </Typography>
                            </Box>
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card>
                      <CardContent>
                        <Grid
                          container
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid item xs={9}>
                            <Typography variant="h6">
                              Recent Joins via Your Referal
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Box textAlign="right">
                              <Link
                                component={NavLink}
                                to="/app/course"
                                underline="none"
                              >
                                <Typography variant="subtitle1">
                                  more{" "}
                                  <ArrowRight
                                    style={{ verticalAlign: "middle" }}
                                  />
                                </Typography>
                              </Link>
                            </Box>
                          </Grid>
                        </Grid>
                        <br />
                        {[
                          {
                            name: "Astha Datta",
                            email: "asthata@gmail.com",
                            profile: "https://i.pravatar.cc/151",
                          },
                          {
                            name: "Charandeep Thakkar",
                            email: "charanar@gmail.com",
                            profile: "https://i.pravatar.cc/155",
                          },
                          {
                            name: "Anees Nagy",
                            email: "aneegy@gmail.com",
                            profile: "https://i.pravatar.cc/145",
                          },
                        ].map((item, index) => (
                          <Box key={index}>
                            <Box my={2} key={index}>
                              <Grid
                                // spacing={4}
                                container
                                justify="space-between"
                                alignItems="center"
                              >
                                <Grid item xs={4} sm={3} md={3}>
                                  {/* <Box mb={2}> */}
                                  <Avatar
                                    className={classes.mediumAvatar}
                                    alt={item.name}
                                    src={item.profile}
                                  />
                                  {/* </Box> */}
                                </Grid>
                                <Grid item xs={8} sm={9} md={9}>
                                  <Typography variant="h6" noWrap>
                                    {item.name}
                                  </Typography>
                                  <Typography variant="subtitle1" noWrap>
                                    {item.email}
                                  </Typography>
                                  {/* <Typography variant="body1" noWrap>
                                    12 hours ago
                                  </Typography> */}
                                </Grid>
                              </Grid>
                            </Box>
                            {index !== 2 && <Divider />}
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default DashboardView;
