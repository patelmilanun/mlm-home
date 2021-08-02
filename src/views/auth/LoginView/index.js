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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "store";
import { login } from "slices/auth";
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

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/\d/, "Password must contain at least 1 number")
    .matches(/[a-zA-Z]/, "Password must contain at least 1 letter"),
});

const LoginView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const { isSubmitting } = useSelector((state) => state.auth);

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
                  <Grid item xs={12} sm={8} md={6}>
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
                        Sign In To Inspireonic
                      </Typography>
                      <br />
                      <br />
                      <form
                        noValidate
                        onSubmit={handleSubmit(async (data) => {
                          await dispatch(login(data));
                        })}
                      >
                        <TextField
                          id="email"
                          name="email"
                          label="Email"
                          variant="outlined"
                          fullWidth
                          defaultValue="wxupu@gmail.com"
                          inputRef={register}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                        <Box my={2}>
                          <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            defaultValue="Password123@"
                            inputRef={register}
                            error={!!errors.password}
                            helperText={errors.password?.message}
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
                            <Typography variant="subtitle2">Log In</Typography>
                          </Box>
                        </Button>
                      </form>
                      <Box my={2}>
                        <Typography variant="caption">
                          <Link component={NavLink} to="/" underline="always">
                            Forgot Password
                          </Link>
                        </Typography>
                      </Box>
                      <Typography variant="body1">
                        Dont have an account?{" "}
                        <Link
                          component={NavLink}
                          to="/auth/signup"
                          underline="always"
                        >
                          Sign Up
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
                        src="/static/undraw_enter_uhqk.svg"
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

export default LoginView;
