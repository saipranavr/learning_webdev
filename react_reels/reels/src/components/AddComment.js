import { TextField } from '@material-ui/core'
import { StylesContext } from '@material-ui/styles'
import React,{useState} from 'react'
import { Button} from "@mui/material";
import { database } from '../firebase';
import Comments from "./Comments.js";

function AddComment({userData,postData}) {
    const [text,setText] = useState("");
    const handleClick=()=>{
        let obj = {
            text:text,
            uProfileImage: userData.profileUrl,
            uName:userData.fullname
        }
        database.comments.add(obj).then((doc)=>{
            database.posts.doc(postData.postId).update({
                comments:[...postData.comments,doc.id]
            })
        })
        setText("")
    }
  return (
    <div>
        <TextField
          id="outlined-basic"
          label="comment"
          variant="outlined"
          size="small"
          sx={{width:'70%'}}
          value={text}
          onChange={(e)=>{
             setText(e.target.value)
          }}
        />
        <Button variant="contained" onClick={handleClick}>Comment</Button>
    </div>
  )
}

export default AddComment