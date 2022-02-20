import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import UploadFile from "../components/UploadFile";

function Feed() {
  const { signOut } = useContext(AuthContext);
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
    </div>
  );
}

export default Feed;
