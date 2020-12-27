import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Link,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Shield,
  Headphones,
  UserCheck,
  ChevronDown,
  Facebook,
  Twitter,
  Youtube,
} from "react-feather";

const useStyles = makeStyles((theme) => ({
  activeLink: {
    color: theme.palette.primary.main,
  },
  signupBtn: {
    borderRadius: 50,
  },
  link: {
    "&:hover": {
      color: theme.palette.primary.main,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      paddingBottom: "0.25rem",
    },
  },
  showoffSection: {
    backgroundColor: "#3c0d99",
  },
  footer: {
    backgroundColor: "#000000",
  },
  featureIc: {
    border: "1px solid #E2E8F0",
    borderRadius: 50,
    padding: theme.spacing(2),
  },
  faqAccordion: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderRadius: "0.3rem",
    marginBottom: theme.spacing(2),
  },
}));

const HomeView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* ------------------------------section 1------------------------------ */}
      <AppBar position="static" color="transparent">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Grid
              container
              spacing={1}
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Box display="flex">
                  <Box mr={2}>
                    <img alt="logo" src="static/logo.svg" width="40" />
                  </Box>
                  <Typography variant="h5">Inspireonics</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box textAlign="center">
                  {[
                    { label: "Home", path: "/" },
                    { label: "About Us", path: "/about" },
                    { label: "Contact Us", path: "/contact" },
                  ].map((link, index) => {
                    return (
                      <Box key={index} mx={2} display="inline">
                        <Link
                          // activeClassName={classes.activeLink}
                          className={classes.link}
                          color="inherit"
                          exact
                          component={NavLink}
                          to={link.path}
                          underline="none"
                        >
                          <Typography display="inline" variant="body2">
                            {link.label}
                          </Typography>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box textAlign="right">
                  <Box display="inline" mr={3}>
                    <Link
                      className={classes.link}
                      color="inherit"
                      exact
                      component={NavLink}
                      to={"/auth/login"}
                      underline="none"
                    >
                      <Typography display="inline" variant="body2">
                        Login
                      </Typography>
                    </Link>
                  </Box>
                  <Box display="inline">
                    <Button
                      className={classes.signupBtn}
                      component={NavLink}
                      color="primary"
                      variant="contained"
                      to={"/auth/signup"}
                    >
                      <Box px={1}>
                        <Typography display="inline" variant="body2">
                          Sign Up
                        </Typography>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ------------------------------section 2------------------------------ */}
      <Box my={6}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={1}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={8} md={6}>
              <Box>
                <Box my={2}>
                  <Typography variant="h2">
                    Learn some Latest courses from our Greatest teachers.
                  </Typography>
                </Box>
                <Typography variant="subtitle1">
                  You can choose from our wide range of courses. Our teachers
                  are best in the class.
                </Typography>
                <br />
                <Button
                  className={classes.signupBtn}
                  component={NavLink}
                  color="primary"
                  variant="contained"
                  to={"/dashboard"}
                >
                  <Typography display="inline" variant="subtitle2">
                    <Box px={4} py={1}>
                      Get Started
                    </Box>
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6}>
                <img
                  src="static/undraw_Online_learning_re_qw08.svg"
                  alt="learn"
                  width="100%"
                />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>

      {/* ------------------------------section 3------------------------------ */}
      <Box my={6} py={12} textAlign="center" className={classes.showoffSection}>
        <Container maxWidth="md">
          <Typography variant="h2" color="secondary">
            We helped thousands of people already.
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Many people have lernt from our online learning plateform. We update
            our courses on regular basis.
          </Typography>
          <br />
          <br />
          <Grid
            container
            spacing={1}
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <Box textAlign="center">
                <Typography variant="h2" color="secondary">
                  500+
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                  hours of content
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box textAlign="center">
                <Typography variant="h2" color="secondary">
                  10+
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                  teachers
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box textAlign="center">
                <Typography variant="h2" color="secondary">
                  1000+
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                  users learn everyday
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ------------------------------section 4------------------------------ */}
      <Box my={6} py={12} textAlign="center">
        <Container maxWidth="md">
          <Typography variant="subtitle2" color="primary">
            Features
          </Typography>
          <Box my={3}>
            <Typography variant="h2" display="inline">
              Amazing&nbsp;&nbsp;
            </Typography>
            <Typography variant="h2" color="primary" display="inline">
              Features
            </Typography>
          </Box>
          <Box px={isSmall ? 0 : 18}>
            <Typography variant="subtitle1">
              Many people have learnt from our online learning plateform. We
              update our courses on regular basis.
            </Typography>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <Grid
            container
            spacing={5}
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={6} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box textAlign="right">
                    <Shield size="60" className={classes.featureIc} />
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box textAlign="left">
                    <Typography variant="h5">Secure</Typography>
                    <br />
                    <Typography variant="subtitle1">
                      Your data is secured with us.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box textAlign="right">
                    <Headphones size="60" className={classes.featureIc} />
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box textAlign="left">
                    <Typography variant="h5">24/7 Support</Typography>
                    <br />
                    <Typography variant="subtitle1">
                      We provide support via different medium.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box textAlign="right">
                    <UserCheck size="60" className={classes.featureIc} />
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box textAlign="left">
                    <Typography variant="h5">Easy to use</Typography>
                    <br />
                    <Typography variant="subtitle1">
                      We provide easy to use interface.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ------------------------------section 4------------------------------ */}
      <Box my={6} py={6} textAlign="center">
        <Container maxWidth="md">
          <Typography variant="subtitle2" color="primary">
            FAQS
          </Typography>
          <Box my={3}>
            <Typography variant="h2" display="inline">
              Any&nbsp;&nbsp;
            </Typography>
            <Typography variant="h2" color="primary" display="inline">
              Questions ?
            </Typography>
          </Box>
          <Box px={isSmall ? 0 : 18}>
            <Typography variant="subtitle1">
              Got any questions? We got you covered. Below are some FAQs which
              may help you.
            </Typography>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <Box px={4}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              square={true}
              className={classes.faqAccordion}
            >
              <AccordionSummary
                expandIcon={
                  <ChevronDown color={theme.palette.secondary.main} />
                }
              >
                <Typography variant="subtitle1" align="left">
                  What is the registration fee?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" align="left">
                  ₹ 100
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              square={true}
              className={classes.faqAccordion}
            >
              <AccordionSummary
                expandIcon={
                  <ChevronDown color={theme.palette.secondary.main} />
                }
              >
                <Typography variant="subtitle1" align="left">
                  Can I access every course?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" align="left">
                  Yes, once you complete your registration you can access every
                  course.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              square={true}
              className={classes.faqAccordion}
            >
              <AccordionSummary
                expandIcon={
                  <ChevronDown color={theme.palette.secondary.main} />
                }
              >
                <Typography variant="subtitle1" align="left">
                  Do you provide referal bonus?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" align="left">
                  Yes, we provide 10 level referal bonus.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>

      {/* ------------------------------section 3------------------------------ */}
      <Box mt={6} py={10} textAlign="center" className={classes.footer}>
        <Container maxWidth="md">
          <Box display="flex" justifyContent="center" mb={4}>
            <Box mr={2}>
              <img alt="logo" src="static/logo.svg" width="40" />
            </Box>
            <Typography color="secondary" variant="h5">
              Inspireonics
            </Typography>
          </Box>
          <Box textAlign="center" mb={4}>
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
            ].map((link, index) => {
              return (
                <Box key={index} mx={2} display="inline">
                  <Link
                    color="secondary"
                    exact
                    component={NavLink}
                    to={link.path}
                    underline="none"
                  >
                    <Typography display="inline" variant="body2">
                      {link.label}
                    </Typography>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Box textAlign="center" mb={4}>
            {[
              { ic: <Facebook />, path: "https://facebook.com/" },
              { ic: <Twitter />, path: "https://twitter.com/" },
              { ic: <Youtube />, path: "https://youtube.com/" },
            ].map((link, index) => {
              return (
                <Box key={index} mx={2} display="inline">
                  <Link color="secondary" underline="none" href={link.path}>
                    <Typography display="inline" variant="body2">
                      {link.ic}
                    </Typography>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Typography variant="caption" color="secondary">
            © Copyright 2020, Inspireonics. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default HomeView;
