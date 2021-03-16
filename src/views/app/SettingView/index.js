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
  useMediaQuery,
  Tabs,
  Tab,
  TabPanel,
  Badge,
  Fab,
  TextField,
} from "@material-ui/core";
import { history } from "utils/history";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Share2,
  DollarSign,
  Users,
  Check,
  ExternalLink,
  ArrowRight,
  PlayCircle,
  X,
  Save,
} from "react-feather";

const useStyles = makeStyles((theme) => ({
  bigAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    display: "inline-block",
  },
  fab: {
    border: `3px solid #FFFFFF`,
  },
}));

const SettingView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="General" />
          <Tab label="Password" />
        </Tabs>
        <Divider />
        <Box mt={3}>
          {value === 0 && (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Box textAlign="center">
                        <Box mb={2}>
                          <Badge
                            overlap="circle"
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            badgeContent={
                              <Fab
                                className={classes.fab}
                                size="small"
                                color="primary"
                                aria-label="add"
                              >
                                <X className={classes.plus} />
                              </Fab>
                            }
                          >
                            <Avatar
                              className={classes.bigAvatar}
                              alt="user"
                              src="https://i.pravatar.cc/150"
                            />
                          </Badge>
                        </Box>
                        <Box>
                          <Typography variant="h6">John Doe</Typography>
                          <Typography variant="subtitle1">
                            john.doe@gmail.com
                          </Typography>
                          <br />
                          <Divider />
                          <br />
                          <Typography variant="subtitle2">
                            Ref. ID: 1154896314
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Card>
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography variant="subtitle2">Profile</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="name"
                            name="name"
                            type="text"
                            label="Name"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="no"
                            name="no"
                            type="text"
                            label="Mobile No."
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="name"
                            name="name"
                            type="text"
                            label="Name"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="name"
                            name="name"
                            type="text"
                            label="Name"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container justify="flex-end">
                            <Grid item xs={8}></Grid>
                            <Grid item>
                              <Button
                                color="primary"
                                size="small"
                                variant="contained"
                                fullWidth
                                startIcon={<Save />}
                              >
                                <Box my={1}>
                                  <Typography variant="subtitle2">
                                    Save Changes
                                  </Typography>
                                </Box>
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          )}
          {value === 1 && (
            <>
              <Card>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2">
                        Change Password
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container justify="flex-end">
                        <Grid item xs={8}></Grid>
                        <Grid item>
                          <Button
                            className={classes.smallBtn}
                            size="small"
                            color="primary"
                            variant="contained"
                            fullWidth
                            startIcon={<Save />}
                          >
                            <Box my={1}>
                              <Typography variant="subtitle2">
                                Save Changes
                              </Typography>
                            </Box>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default SettingView;
