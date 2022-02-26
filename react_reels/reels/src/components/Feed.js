import React from "react";
import { useContext,useState,useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import UploadFile from "../components/UploadFile";
import { database } from "../firebase";
import Post from "./Post";

function Feed() {
  const { currentUser,signOut } = useContext(AuthContext);
  const[userData,setUserData] = useState('');
  useEffect(()=>{
    const unsub = database.users.doc(currentUser.uid).onSnapshot((snapshot)=>{
      // console.log(snapshot.data())
      setUserData(snapshot.data())
    })
    return ()=>{
      unsub()
    }
  },[currentUser])

  const handlesignout = async () => {
    try {
      await signOut();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="comp" style={{width:'50%'}}>
        <h1>Feed</h1>
        <button onClick={handlesignout}>Logout</button>
      </div>
      <UploadFile user={userData}/>
      <Post userData={userData}/>
    </div>
  );
}

export default Feed;
