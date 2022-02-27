import { CircularProgress, Avatar } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { database } from "../firebase";
import Video from "./Video.js";
import "./Post.css";
import Like from "./Like.js";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Like2 from "./Like2.js"
import AddComment from "./AddComment.js"
import Comments from "./Comments.js";

function Post({ userData }) {
  const [posts, setPosts] = useState(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    let parr = [];
    const unsub = database.posts
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        parr = [];
        querySnapshot.forEach((doc) => {
          let data = { ...doc.data(), postId: doc.id };
          parr.push(data);
        });
        setPosts(parr);
      });
    return unsub;
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {posts == null || userData == null ? (
        <CircularProgress />
      ) : (
        <div className="video-container">
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <div className="videos">
                <Video src={post.pUrl} />
                <div className="fa" style={{ display: "flex" }}>
                  <Avatar src={userData.profileUrl} />
                  <h4>{userData.fullname}</h4>
                </div>
                <Like userData={userData} postData={post} />
                <ChatBubble className="chat-style" onClick={handleClickOpen} />
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  fullWidth={true}
                  maxWidth="lg"
                >
                  <div className="modal-container">
                    <div className="video-modal">
                      {/* <video autoPlay={true} muted="muted" controls>
                          {/* <source src={post.pUrl} /> */}
                      {/*</video> */}
                    </div>
                    <div className="comment-modal">
                      <Card className="card1" style={{height:"70vh"}}>
                        <Comments postData={post}/>
                      </Card>
                      <Card variant="outlined" className="card2">
                        <Typography>
                            {post.likes.length==0?'':`liked by ${post.likes.length} people`}
                        </Typography>
                        <div style={{display:'flex'}}>
                          <Like2 postData={post}/>
                          <AddComment userData={userData} postData={post}/>
                        </div>
                      </Card>
                    </div>
                  </div>
                </Dialog>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
