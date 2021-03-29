import { useState } from "react";
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
  CircularProgress,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "store";
import { signup } from "slices/auth";
import { Lock, LogIn } from "react-feather";

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

const validationSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  phoneNumber: yup
    .string()
    .required("Email is required")
    .matches(/^[6789]\d{9}$/, "Phone number is invalid"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contains atleast 1 latter and 1 number"
    ),
});

const RegisterView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [step, setStep] = useState(2);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <Box style={{ backgroundColor: "#243e63", minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Box py={8}>
            <Card>
              <CardContent style={{ padding: 0 }}>
                <Grid container justify="center">
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    style={{ minHeight: "700px" }}
                  >
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
                      {step === 0 && (
                        <>
                          <form
                            noValidate
                            onSubmit={handleSubmit(async (data) => {
                              await dispatch(signup(data));
                              setStep(step + 1);
                            })}
                          >
                            <Box my={2}>
                              <TextField
                                id="name"
                                name="name"
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                required
                                inputRef={register}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                              />
                            </Box>
                            <Box my={2}>
                              <TextField
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                inputRef={register}
                                error={!!errors.email}
                                helperText={errors.email?.message}
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
                                required
                                inputRef={register}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                              />
                            </Box>
                            <Box my={2}>
                              <TextField
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Contact Number"
                                variant="outlined"
                                fullWidth
                                required
                                inputRef={register}
                                error={!!errors.phoneNumber}
                                helperText={
                                  errors.phoneNumber?.message ||
                                  "without country code"
                                }
                              />
                            </Box>
                            <Box my={2}>
                              <TextField
                                id="referedBy"
                                name="referedBy"
                                label="Referal Id"
                                variant="outlined"
                                fullWidth
                                inputRef={register}
                                error={!!errors.referedBy}
                                helperText={
                                  errors.referedBy?.message ||
                                  "Leave referal id blank if you dont have"
                                }
                              />
                            </Box>
                            <Button
                              color="primary"
                              variant="contained"
                              type="submit"
                              fullWidth
                              startIcon={<LogIn />}
                              onClick={() => setStep(1)}
                            >
                              <Box my={1}>
                                <Typography variant="subtitle2">
                                  Sign Up
                                </Typography>
                              </Box>
                            </Button>
                          </form>
                          <Box my={2}>
                            <Typography variant="caption">
                              <Link
                                component={NavLink}
                                to="/"
                                underline="always"
                              >
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
                        </>
                      )}
                      {step === 1 && (
                        <>
                          <Box my={8}>
                            <Typography variant="subtitle2">
                              Please complete your payment to activate your
                              account
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="h1">₹ 100</Typography>
                            <br />
                            <Typography variant="subtitle1">
                              Registration fee
                            </Typography>
                          </Box>
                          <Box mb={2}>
                            <Button
                              color="primary"
                              variant="contained"
                              type="submit"
                              fullWidth
                              startIcon={<Lock />}
                            >
                              <Box my={1}>
                                <Typography variant="subtitle2">
                                  Pay Now
                                </Typography>
                              </Box>
                            </Button>
                          </Box>
                          <Typography variant="caption">
                            *all payment made through are secure
                          </Typography>
                        </>
                      )}
                      {step === 2 && (
                        <>
                          <Box my={8}>
                            <Typography variant="subtitle2">
                              Once you complete payment, we'll show you the
                              status here. Next status check in
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="h1">59 sec</Typography>
                            <br />
                            <Link
                              component="button"
                              variant="subtitle1"
                              onClick={() => {
                                console.info("I'm a button.");
                              }}
                            >
                              check now
                            </Link>
                          </Box>
                          <Box mb={2}>
                            <Button
                              color="primary"
                              variant="contained"
                              fullWidth
                              disabled
                              startIcon={
                                <CircularProgress size={20} color="primary" />
                              }
                            >
                              <Box my={1} mx={1}>
                                <Typography variant="subtitle2">
                                  Please Wait
                                </Typography>
                              </Box>
                            </Button>
                          </Box>
                          <Typography variant="caption">
                            *we'll update the button with appropriate payment
                            status
                          </Typography>
                        </>
                      )}
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
