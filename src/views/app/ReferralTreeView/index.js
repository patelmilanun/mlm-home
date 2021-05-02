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
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Plus, Minus } from "react-feather";

const useStyles = makeStyles((theme) => ({}));

const ReferralTreeView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const isXLarge = useMediaQuery(theme.breakpoints.up("xl"), {
    defaultMatches: true,
  });

  const [level, setLevel] = useState(1);

  return (
    <>
      <Container maxWidth="xl">
        <Box mt={3}>
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={isXLarge ? 2 : 3}>
                <Card>
                  <CardContent>
                    <Box textAlign="center">
                      <Typography variant="h5">Select your level</Typography>
                      <Box my={3}>
                        <Typography variant="h1">{level}</Typography>
                      </Box>
                      <Grid container justify="space-between">
                        <Grid item>
                          <Button
                            color="primary"
                            variant="outlined"
                            disabled={level < 2}
                            onClick={() => setLevel(level - 1)}
                          >
                            <Minus />
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            color="primary"
                            variant="outlined"
                            disabled={level > 9}
                            onClick={() => setLevel(level + 1)}
                          >
                            <Plus />
                          </Button>
                        </Grid>
                      </Grid>
                      <Box mt={3}>
                        <Button
                          size="large"
                          fullWidth
                          variant="contained"
                          color="primary"
                        >
                          Show
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={isXLarge ? 10 : 9}>
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

export default ReferralTreeView;
