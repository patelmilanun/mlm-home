import {
  Typography,
  Box,
  Button,
  Container,
  Grid,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "store";
import { ChevronDown } from "react-feather";

const useStyles = makeStyles((theme) => ({
  smallAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
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
}));

const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const { title } = useSelector((state) => state.common);

  return (
    <Container maxWidth="xl">
      <Box mb={2}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">{title}</Typography>
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
                // src="https://i.pravatar.cc/50"
              />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Sidebar;
