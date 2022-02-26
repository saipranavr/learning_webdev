import { CircularProgress,Avatar } from '@material-ui/core';
import React from 'react'
import { useContext,useState,useEffect } from "react";
import { database } from "../firebase";
import Video from "./Video.js"
import "./Post.css"
import Like from "./Like.js"
function Post({userData}) {
    const [posts,setPosts] = useState(null);

    useEffect(()=>{
        let parr=[];
        const unsub = database.posts.orderBy('createdAt','desc').onSnapshot((querySnapshot)=>{
            parr = []
            querySnapshot.forEach((doc)=>{
                let data = {...doc.data(),postId:doc.id}
                parr.push(data);
            })
            setPosts(parr);
        });
        return unsub
    },[])
  return (
    <div>
        {
            posts==null || userData == null ? <CircularProgress />:
            <div className="video-container">
            {
                posts.map((post,index)=>(
                    <React.Fragment key={index}>
                        <div className="videos">
                            <Video src={post.pUrl}/>
                            <div className="fa" style={{display:'flex'}}>
                                <Avatar src={userData.profileUrl}/>
                                <h4>{userData.fullname}</h4>
                            </div>
                            <Like userData={userData} postData={post}/>
                        </div>
                    </React.Fragment>
                    
                ))
            }
            </div>
        }
    </div>
  )
}

export default Post