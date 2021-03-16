import { NavLink } from "react-router-dom";
import {
  Typography,
  Divider,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  Grid,
  Link,
  Avatar,
  LinearProgress,
  Hidden,
  useMediaQuery,
  TextField,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Share2,
  DollarSign,
  Users,
  Check,
  ExternalLink,
  ArrowRight,
  PlayCircle,
  LogIn,
} from "react-feather";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "2.5rem",
  },
  sideImage: {
    maxWidth: theme.spacing(45),
    display: "block",
    height: "100%",
    margin: "auto",
  },
}));

const RegisterView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  return (
    <>
      <Box style={{ backgroundColor: "#243e63", minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Box py={8}>
            <Card>
              <CardContent style={{ padding: 0 }}>
                <Grid container justify="center">
                  <Grid item xs={12} sm={8} md={6}>
                    <Box py={4} px={isSmall ? 4 : 6} textAlign="center">
                      <Box pb={4}>
                        <img
                          className={classes.logo}
                          src="/static/logo-half.svg"
                          alt="logo"
                        />
                      </Box>
                      <Typography variant="h5">
                        Sign Up For Inspireonic
                      </Typography>
                      <br />
                      <Box my={2}>
                        <TextField
                          id="referal"
                          name="referal"
                          label="Referal Id"
                          variant="outlined"
                          fullWidth
                        />
                      </Box>
                      <Box my={2}>
                        <TextField
                          id="fname"
                          name="fname"
                          label="Full Name"
                          variant="outlined"
                          fullWidth
                        />
                      </Box>
                      <Box my={2}>
                        <TextField
                          id="email"
                          name="email"
                          label="Email"
                          variant="outlined"
                          fullWidth
                        />
                      </Box>
                      <Box my={2}>
                        <TextField
                          id="password"
                          name="password"
                          label="Password"
                          type="password"
                          variant="outlined"
                          fullWidth
                        />
                      </Box>
                      <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        startIcon={<LogIn />}
                      >
                        <Box my={1}>
                          <Typography variant="subtitle2">Sign Up</Typography>
                        </Box>
                      </Button>
                      <Box my={2}>
                        <Typography variant="caption">
                          <Link component={NavLink} to="/" underline="always">
                            Forgot Password
                          </Link>
                        </Typography>
                      </Box>
                      <Typography variant="body1">
                        Already have an account?{" "}
                        <Link
                          component={NavLink}
                          to="/auth/login"
                          underline="always"
                        >
                          Log In
                        </Link>
                      </Typography>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid
                      item
                      md={6}
                      style={{ backgroundColor: "rgb(250, 245, 255)" }}
                    >
                      <img
                        width="100%"
                        className={classes.sideImage}
                        src="/static/undraw_completing_6bhr.svg"
                        alt="login"
                      />
                    </Grid>
                  </Hidden>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RegisterView;
