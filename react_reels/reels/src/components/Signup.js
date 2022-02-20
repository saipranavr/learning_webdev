import * as React from "react";
import {useState,useContext} from "react";
import {useHistory} from "react-router-dom"
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
import {AuthContext} from "../Context/AuthContext"
import { database,storage } from "../firebase";

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
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [file,setFile] = useState(null);
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);

  const history = useHistory();
  const {signup} = useContext(AuthContext);
  async function handleSubmit(){
    try{
      setError('');
      setLoading(true);
      let userObj =await signup(email,password);
      let uid = userObj.user.uid;
      console.log(uid);

      const uploadTask = storage.ref(`/users/${uid}/profileImage`).put(file);
      uploadTask.on('state_changed',fn1,fn2,fn3);

      function fn1(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      }
      function fn2(error){
        setError(error);
        setTimeout(()=>{
        setError('')
        },2000)
        setLoading(false);
      }
      function fn3(){
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
          console.log(url);

          database.users.doc(uid).set({
            email:email,
            password:password,
            fullname:name,
            profileUrl:url
          })
        })
      }
      setLoading(false);
      history.push('/');
      
    }catch(error){
      if(file==null){setError(error);
      setTimeout(()=>{
      setError('')
    },2000)}
    }
  }
  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card variant="outlined">
          <div className="cardLogo">
            <img src={logo} />
          </div>
          <CardContent>
            <Typography className={classes.text}>
              Sign up to see photos and videos of your friends
            </Typography>
            {error!='' && <Alert severity="error" margin="dense" size="small">
              {error}
            </Alert>}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              value={password}
              onChange = {(e)=>{
                setPassword(e.target.value)
              }}
            />
            <TextField
              id="outlined-basic"
              label="FullName"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              value={name}
              onChange = {(e)=>{
                setName(e.target.value)
              }}
            />
            <Button
              variant="outlined"
              color="secondary"
              fullWidth={true}
              margin="dense"
              component="label"
            >
              Upload Profile Image
              <input type="file" accept="Image*/" hidden onChange={(e)=>{
                let file = e?.target?.files[0];
                if (file != null) {
                console.log(e.target.files[0])
                setFile(e.target.files[0]);
                }
              }}/>
            </Button>
          </CardContent>
          <CardActions>
            <Button color="primary" fullWidth={true} variant="contained" disabled={loading} onClick={(e)=>{handleSubmit()}}>
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
