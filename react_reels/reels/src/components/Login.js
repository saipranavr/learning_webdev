import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../assets/Instagram-Logo.png";
import "./Login.css";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import iphone7 from "../assets/iphone7.jpg";
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Login() {
  const useStyle = makeStyles({
    text: {
      color: "grey",
    },
    card2: {
      height: "6vh",
      marginTop: "2%",
    },
  });
  const classes = useStyle();
  return (
    <div className="loginWrapper">
      <div
        className="imgCard"
        style={{ backgroundImage: "url(" + iphone7 + ")", background: "cover" }}
      ></div>
      <div className="carousel">
        <CarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={331}
          totalSlides={3}
          visibleSlides={1}
          hasMasterSpinner
          isPlaying={true}
          infinite={true}
          dragEnabled={false}
          touchEnabled={false}
        >
          <Slider>
            <Slide index={0}><Image className="carouselImg" src={img1}></Image></Slide>
            <Slide index={1}><Image className="carouselImg" src={img2}></Image></Slide>
            <Slide index={2}><Image className="carouselImg" src={img3}></Image></Slide>
          </Slider>
        </CarouselProvider>
      </div>
      <div className="signupCard">
        <Card variant="outlined">
          <div className="cardLogo">
            <img src={logo} />
          </div>
          <CardContent>
            <Alert severity="error" margin="dense" size="small">
              This is an error alert — check it out!
            </Alert>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <Typography>
              <Link to="/Signup">Forgot Password?</Link>
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary" fullWidth="true" variant="contained">
              LOGIN
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card2}>
          <CardContent className="loginCard">
            <Typography>
              Don't have an account? <Link to="/Signup">Sign Up</Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}