import { useState, useEffect, useCallback } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
import { signup, fetchPaymentStatus, fetchPaymentLink } from "slices/auth";
import { Lock, LogIn } from "react-feather";
import { Check, X } from "react-feather";

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

const num = 8;
const randomNameGenerator = (num) => {
  let res = "";
  for (let i = 0; i < num; i++) {
    const random = Math.floor(Math.random() * 27);
    res += String.fromCharCode(97 + random);
  }
  return res;
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  phoneNumber: yup
    .string()
    .required("Contact number is required")
    .matches(/^[6789]\d{9}$/, "Contact number is invalid"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/\d/, "Password must contain at least 1 number")
    .matches(/[a-zA-Z]/, "Password must contain at least 1 letter"),
  referedBy: yup.string().matches(/^[0-9a-fA-F]{24}$/, {
    message: "Invalid referral id",
    excludeEmptyString: true,
  }),
});

var fetchInterval;
var timer = 60;
var userVar;
const RegisterView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [step, setStep] = useState(history.location.state?.step ?? 0);
  const [seconds, setSeconds] = useState(60);

  const { paymentLink, paymentStatus, user, isSubmitting } = useSelector(
    (state) => state.auth
  );
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onFocus = useCallback(() => {
    if (fetchInterval) {
      setTimeout(async () => {
        timer = 60;
        await dispatch(fetchPaymentStatus({ userId: userVar.id }));
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (history.location.state !== null) {
      history.replace();
    }
  }, []);

  useEffect(() => {
    if (step === 2) {
      userVar = user;
      fetchInterval = setInterval(async () => {
        timer--;
        if (timer < 1) {
          timer = 60;
          await dispatch(fetchPaymentStatus({ userId: user.id }));
        }
        setSeconds(timer);
      }, 1000);
    }
    return () => {
      clearInterval(fetchInterval);
    };
  }, [step, user]);

  useEffect(() => {
    if (
      paymentStatus === "paymentCompleted" ||
      paymentStatus === "paymentFailed"
    ) {
      window.removeEventListener("focus", onFocus);
      clearInterval(fetchInterval);
    } else window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("focus", onFocus);
    };
  }, [paymentStatus]);

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
                    {isSubmitting && <LinearProgress color="secondary" />}
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
                              const res = await dispatch(signup(data));
                              if (res) setStep(step + 1);
                            })}
                          >
                            <Box my={2}>
                              <TextField
                                id="name"
                                name="name"
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                defaultValue={randomNameGenerator(5)}
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
                                defaultValue={`${randomNameGenerator(
                                  5
                                )}@gmail.com`}
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
                                defaultValue="Password123@"
                                required
                                inputRef={register}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                              />
                            </Box>
                            <Grid container spacing={1} justify="space-between">
                              <Hidden smDown>
                                <Grid item xs={2}>
                                  <TextField
                                    variant="outlined"
                                    value="+91"
                                    fullWidth
                                    disabled
                                  />
                                </Grid>
                              </Hidden>
                              <Grid item xs={12} md={10}>
                                <TextField
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  label="Contact Number"
                                  variant="outlined"
                                  fullWidth
                                  required
                                  defaultValue={
                                    Math.floor(Math.random() * 1000000000) +
                                    6000000000
                                  }
                                  inputRef={register}
                                  error={!!errors.phoneNumber}
                                  helperText={
                                    errors.phoneNumber?.message ||
                                    (isSmall && "without country code")
                                  }
                                />
                              </Grid>
                            </Grid>

                            <Box my={2}>
                              <TextField
                                id="referedBy"
                                name="referedBy"
                                label="Referral Id"
                                variant="outlined"
                                fullWidth
                                inputRef={register}
                                error={!!errors.referedBy}
                                helperText={
                                  errors.referedBy?.message ||
                                  "Leave referral id blank if you dont have"
                                }
                              />
                            </Box>
                            <Button
                              color="primary"
                              variant="contained"
                              type="submit"
                              fullWidth
                              disabled={isSubmitting}
                              startIcon={<LogIn />}
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
                              onClick={() => {
                                window.open(
                                  paymentLink,
                                  "",
                                  "width=1000, height=1000"
                                );
                                setStep(2);
                              }}
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
                              {paymentStatus === "paymentCompleted" &&
                                "Yey! the payment got approved. It is succeed."}
                              {paymentStatus === "paymentFailed" &&
                                "Sorry the payment can't make through. It is failed."}
                              {paymentStatus === "paymentPending" &&
                                "Once you complete payment, we'll show you the status here. Next status check in"}
                            </Typography>
                            <br />
                            <br />
                            {paymentStatus === "paymentPending" && (
                              <Typography variant="h1">
                                {seconds} sec
                              </Typography>
                            )}
                            <br />
                            <Link
                              component="button"
                              variant="subtitle1"
                              disabled={isSubmitting}
                              onClick={async () => {
                                if (paymentStatus === "paymentCompleted") {
                                  history.push("/auth/login");
                                } else if (paymentStatus === "paymentFailed") {
                                  await dispatch(
                                    fetchPaymentLink({ userId: user.id })
                                  );
                                  setStep(step - 1);
                                } else {
                                  timer = 60;
                                  await dispatch(
                                    fetchPaymentStatus({ userId: user.id })
                                  );
                                }
                              }}
                            >
                              {paymentStatus === "paymentCompleted"
                                ? "login now"
                                : paymentStatus === "paymentFailed"
                                ? "retry now"
                                : "check now"}
                            </Link>
                            <br />
                            {paymentStatus === "paymentPending" && (
                              <Link
                                component="button"
                                variant="subtitle1"
                                disabled={isSubmitting}
                                onClick={() => {
                                  window.open(
                                    paymentLink,
                                    "",
                                    "width=1000, height=1000"
                                  );
                                }}
                              >
                                re-open payment dialog?
                              </Link>
                            )}
                          </Box>
                          <Box mb={2}>
                            <Button
                              color="primary"
                              variant="contained"
                              fullWidth
                              disabled
                              startIcon={
                                paymentStatus === "paymentCompleted" ? (
                                  <Check size={20} />
                                ) : paymentStatus === "paymentFailed" ? (
                                  <X size={20} />
                                ) : (
                                  <CircularProgress size={20} color="primary" />
                                )
                              }
                            >
                              <Box my={1} mx={1}>
                                <Typography variant="subtitle2">
                                  {paymentStatus === "paymentCompleted"
                                    ? "Payment Completed"
                                    : paymentStatus === "paymentFailed"
                                    ? "Payment Failed"
                                    : "Please Wait"}
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
