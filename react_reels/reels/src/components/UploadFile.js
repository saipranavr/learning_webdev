import React from "react";
import { Button, LinearProgress } from "@mui/material";
import MovieIcon from "@material-ui/icons/Movie";
import Alert from "@mui/material/Alert";
import { useContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { database,storage } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

function UploadFile(props) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.uid);
  let handleChange = async(file)=>{
    if(file==null){
      setError(error);
      setTimeout(()=>{
        setError('')
      },2000)
      return;
    }
    if(file.size/(1024*1024)>100){
      setError('file is big');
      setTimeout(()=>{
        setError('')
      },2000)
      return;
    }
    let uid = uuidv4();
    const uploadTask = storage.ref(`/posts/${uid}/${file.name}`).put(file);
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
          let obj = {
            likes:[],
            comments:[],
            pId:uid,
            pUrl:url,
            Uname: props.user.fullname,
            userId:currentUser.uid,
            createdAt:database.getUserTimeStamp.serverTimestamp()
          }
          database.posts.add(obj).then((ref)=>{
            let res = database.users.doc(currentUser.uid).update({
              postIds:props.user.postIds!=null?[...props.user.postIds,ref.id]:[ref.id]
            })
          }).then(()=>{
            setLoading(false);
          }).catch((err)=>{
            setError(err);
            setTimeout(()=>{
              setError('');
            },2000)
          })
        })
      }
  }
  return (
    <div>
      {error == " " ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <input
            type="file"
            accept="video/*"
            id="upload-input"
            style={{ display: "none" }}
            onChange={(e)=>handleChange(e.target.files[0])}
          />
          <label htmlFor="upload-input">
            <Button variant="outlined" color="secondary" component="span" disabled={loading}>
              <MovieIcon />
              &nbsp;Upload Video
            </Button>
          </label>
          {loading && <LinearProgress color="secondary" />}
        </>
      )}
    </div>
  );
}

export default UploadFile;
