import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../assets/Instagram-Logo.png";
import "./Signup.css";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from "react-router-dom";

export default function SignUp() {
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
    <div className="signupWrapper">
      <div className="signupCard">
        <Card variant="outlined">
          <div className="cardLogo">
            <img src={logo} />
          </div>
          {/* <CardActionArea> */}
          <CardContent>
            <Typography className={classes.text}>
              Sign up to see photos and videos of your friends
            </Typography>
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
            <TextField
              id="outlined-basic"
              label="FullName"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <Button
              variant="outlined"
              color="secondary"
              fullWidth={true}
              margin="dense"
              component="label"
            >
              Upload Profile Image
              <input type="file" accept="Image*/" hidden />
            </Button>
          </CardContent>
          {/* </CardActionArea> */}
          <CardActions>
            <Button color="primary" fullWidth="true" variant="contained">
              Sign Up
            </Button>
          </CardActions>
          <CardContent>
            <Typography className={classes.text}>
              By signing up,you agree to our Terms,Data Policy and Cookies
              Policy
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card2}>
          <CardContent className="loginCard">
            <Typography>
              Having an account? <Link to="/login">Login</Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
