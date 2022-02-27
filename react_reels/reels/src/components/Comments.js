import { CircularProgress, Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { database } from "../firebase";

function Comments({ postData }) {
  const [comments, setComments] = useState(null);
  const[render,setRender] = useState(false);

  useEffect(async() => {
    let arr = [];
    for (let i = 0; i < postData.comments.length; i++) {
      let data = await database.comments.doc(postData.comments[i]).get();
      arr.push(data.data());
      
    }
    // setTimeout(()=>{
        if(arr && arr.length>0 ){
            console.log(arr);
            setComments([...arr])};
    // },1000)
  }, [postData]);

  useEffect(()=>{
    
    if(comments){
        console.log(comments);
        setRender(true);
    }
  },[comments])

  return (
    <div>
      {!render ? (
        <CircularProgress />,
        <p>hello</p>
      ) : (
        <>
          {comments.map((comment, index) => {
              return(
            <div style={{ display: "flex" }} key={index}>
              <Avatar src={comment.uProfileImage} />
              <p>
                <span style={{ fontWeight: "bold" }}>{comment.uName}</span>
                &nbsp;&nbsp;{comment.text}
              </p>
            </div>);
          })}
        </>
      )}
    </div>
  );
}

export default Comments;

