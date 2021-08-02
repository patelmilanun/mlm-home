import { useEffect } from "react";
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
} from "@material-ui/core";
import { history } from "utils/history";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "store";
import { fetchCourses } from "slices/course";
import {
  Share2,
  DollarSign,
  Users,
  Check,
  ExternalLink,
  ArrowRight,
  PlayCircle,
} from "react-feather";

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

const CourseListView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="stretch">
          {[
            {
              id: 1111783378,
              title:
                "Animating in Procreate: Simple Steps to Create Awesome Animations",
              students: 308,
              duration: "2h 14m",
              image:
                "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/25b037696f7d1aa734cecea539cf464a/original",
            },
            {
              id: 1111783379,
              title: "Animation Station With Neil Patrick Harris",
              students: "3.7k",
              duration: "15m",
              image:
                "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/66ff6788d989232ee39f1efa779f1581/original",
            },
            {
              id: 1111783377,
              title:
                "Snowy Christmas Night - Let's celebrate the season with Watercolors",
              students: 754,
              duration: "1h 16m",
              image:
                "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/42dca6f23e0e9ae4e5b84f3f9faa848f/original",
            },
            {
              id: 1111783328,
              title: "Drawing in Perspective",
              students: 142,
              duration: "2h 1m",
              image:
                "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/c51bbbe5e32eb1c618a4e147db1a3fe7/original",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <Card
                style={{ height: "100%", cursor: "pointer" }}
                onClick={() => history.push("/app/course/" + item.id)}
              >
                {/* <CardActionArea> */}
                <Box className={classes.cardMediaContainer}>
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.title}
                  />
                  <PlayCircle size={48} className={classes.cardPlayIc} />
                </Box>
                <CardContent>
                  <Grid container>
                    <Grid item xs={7}>
                      <Typography variant="subtitle1">
                        {item.students} students
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography align="right" variant="subtitle1">
                        {item.duration}
                      </Typography>
                    </Grid>
                  </Grid>
                  <br />
                  <Typography variant="h6">
                    {item.title.length > 75
                      ? item.title.trim().substring(0, 75) + "…"
                      : item.title}
                  </Typography>
                </CardContent>
                {/* </CardActionArea> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CourseListView;
