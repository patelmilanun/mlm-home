import { useState, useEffect } from "react";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Player, BigPlayButton } from "video-react";
import { useDispatch } from "store";
import { setIsFullScreen } from "slices/common";
import {
  Share2,
  DollarSign,
  Users,
  Check,
  ExternalLink,
  ArrowRight,
  PlayCircle,
  ChevronDown,
} from "react-feather";
import "video-react/dist/video-react.css";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 176,
    "&:hover ~ $cardPlayIc": {
      display: "block",
    },
  },
  cardMediaContainer: {
    position: "relative",
  },
  cardPlayIc: {
    display: "contents",
    width: "200px",
    position: "absolute",
    left: "50%",
    top: "30%",
    marginLeft: "-100px",
    zIndex: 999,
    "&:hover": {
      display: "block",
    },
  },
}));

const CourseListView = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [source, setSource] = useState(
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  );

  useEffect(() => {
    dispatch(setIsFullScreen(true));
    return () => {
      dispatch(setIsFullScreen(false));
    };
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} md={8}>
            <Player
              style={{ overflow: "hidden" }}
              src={source}
              poster="https://static.skillshare.com/cdn-cgi/image/width=1000,quality=85,format=auto/uploads/video/thumbnails/25b037696f7d1aa734cecea539cf464a/original"
            >
              <BigPlayButton position="center" />
            </Player>
            <Box mt={3} mb={1}>
              <Typography variant="h6">
                Animating in Procreate: Simple Steps to Create Awesome
                Animations
              </Typography>
              <Typography variant="subtitle2">308 students enrolled</Typography>
              <br />
              <Typography variant="h6">About</Typography>
              <Typography variant="subtitle1">
                In this 90 minute course, Sean focuses on all the essential
                information you need to know in order to capture beautiful
                images. You'll learn all the most fundamental lessons of
                photography, as well as countless tips and tricks that will help
                you establish yourself as a prominent photographer.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Here are some of the things you will learn: How to fully
                understand and master your DSLR or mirrorless camera How to
                choose the best camera settings and camera mode How to nail the
                perfect composition How to get tack-sharp focus in every photo
                How to identify perfect lighting environments How to find your
                unique photography style Photo editing tips Social media tips
                for photographers Plus countless other tips that will propel
                your photography skills even further.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ChevronDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="subtitle2">13 Lessons (1h 30m)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box width="100%" style={{ maxHeight: 400, overflow: "auto" }}>
                  <List>
                    {[
                      { title: "1. Course Introduction" },
                      { title: "2. Course Project" },
                      { title: "3. Camera Settings" },
                      { title: "4. Balancing Exposure" },
                      { title: "1. Course Introduction" },
                      { title: "2. Course Project" },
                      { title: "3. Camera Settings" },
                      { title: "4. Balancing Exposure" },
                      { title: "1. Course Introduction" },
                      { title: "2. Course Project" },
                      { title: "3. Camera Settings" },
                      { title: "4. Balancing Exposure" },
                    ].map((item, index) => (
                      <ListItem
                        key={index}
                        button
                        disableGutters
                        onClick={() =>
                          setSource(
                            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                          )
                        }
                        selected={index === 9}
                        autoFocus={!isSmall && index === 9}
                      >
                        <Box px={2} display="flex">
                          <ListItemIcon
                            style={{ minWidth: 40, alignItems: "center" }}
                          >
                            <PlayCircle />
                          </ListItemIcon>
                          <ListItemText>
                            <Typography variant="body2">
                              {item.title}
                            </Typography>
                          </ListItemText>
                        </Box>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CourseListView;
