import { useState } from "react";
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
  IconButton,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Plus, Minus } from "react-feather";

const useStyles = makeStyles((theme) => ({}));

const WithdrawalView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const isXLarge = useMediaQuery(theme.breakpoints.up("xl"), {
    defaultMatches: true,
  });

  const [level, setLevel] = useState("98.4");
  const [step, setStep] = useState(0);

  return (
    <>
      <Container maxWidth="xl">
        <Box mt={3}>
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Box mb={2}>
                  <Card>
                    <CardContent>
                      <Box textAlign="left">
                        <Typography variant="h5">Your Total Balance</Typography>
                        <Box mt={2} textAlign="right">
                          <Typography display="inline" variant="h4">
                            ₹
                          </Typography>
                          <Typography display="inline" variant="h1">
                            {level}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
                {step === 0 && (
                  <Box>
                    <Card>
                      <CardContent>
                        <Box textAlign="left">
                          <Typography variant="h5">
                            Cashout Your Balance
                          </Typography>
                          <Box mt={3}>
                            <TextField
                              id="amount"
                              name="amount"
                              label="Amount"
                              placeholder="Enter amount"
                              type="text"
                              variant="outlined"
                              fullWidth
                            />
                          </Box>
                          <Box mt={3} mb={1}>
                            <Button
                              size="large"
                              fullWidth
                              variant="contained"
                              color="primary"
                              onClick={() => setStep(step + 1)}
                              // disabled
                            >
                              Next
                            </Button>
                          </Box>
                          <Typography variant="caption">
                            *You need minum of ₹ 100 to withdraw
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                )}
                {step === 1 && (
                  <Box>
                    <Card>
                      <CardContent>
                        <Box textAlign="left">
                          <Typography variant="h5">
                            Select your method
                          </Typography>
                          <Box mt={3} textAlign="left">
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label={
                                <Typography
                                  display="inline"
                                  variant="subtitle1"
                                >
                                  ***********10054
                                </Typography>
                              }
                            />
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label={
                                <Typography
                                  display="inline"
                                  variant="subtitle1"
                                >
                                  ***********12354
                                </Typography>
                              }
                            />
                          </Box>
                          <Box mt={3} mb={1}>
                            <Grid container spacing={1}>
                              <Grid item xs={12} md={6}>
                                <Button
                                  size="large"
                                  fullWidth
                                  variant="outlined"
                                  color="primary"
                                  onClick={() => setStep(step - 1)}
                                  // disabled
                                >
                                  Back
                                </Button>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Button
                                  size="large"
                                  fullWidth
                                  variant="contained"
                                  color="primary"
                                  onClick={() => setStep(step + 1)}
                                  // disabled
                                >
                                  Cashout
                                </Button>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} md={9}>
                <Box mb={2}>
                  <Card>
                    <CardContent>
                      <Grid container spacing={2} justify="space-between">
                        <Grid item xs={12} sm={6} lg={4}>
                          <Box>
                            <Typography
                              variant="body2"
                              style={{ color: "rgb(36 62 99 / 60%)" }}
                            >
                              ID
                            </Typography>
                            <Typography variant="subtitle2">
                              6084247339feda3130a0a035
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                          <Box>
                            <Typography
                              variant="body2"
                              style={{ color: "rgb(36 62 99 / 60%)" }}
                            >
                              Name
                            </Typography>
                            <Typography variant="subtitle2">
                              Milan Unmeshbhai Patel
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} lg={2}>
                          <Box>
                            <Typography
                              variant="body2"
                              style={{ color: "rgb(36 62 99 / 60%)" }}
                            >
                              Date
                            </Typography>
                            <Typography variant="subtitle2">
                              11-02-2021
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} lg={2}>
                          <Box>
                            <Typography
                              variant="body2"
                              style={{ color: "rgb(36 62 99 / 60%)" }}
                            >
                              Payment
                            </Typography>
                            <Typography variant="subtitle2">
                              Completed
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </>
        </Box>
      </Container>
    </>
  );
};

export default WithdrawalView;
