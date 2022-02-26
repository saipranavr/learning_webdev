import React,{useContext,useState,useEffect} from 'react'
import  FavoriteIcon  from '@material-ui/icons/Favorite';
import { database } from "../firebase"
import { AuthContext } from "../Context/AuthContext";
import "./Post.css";

function Like({postData}) {
    const[like,setLike] = useState(null);
    const { currentUser,signOut } = useContext(AuthContext);
    useEffect(()=>{
        const check = postData.likes.includes(currentUser.uid)?true:false;
        setLike(check);
    },[postData])
    const handleLike=()=>{
        if(like==true){
            let narr = postData.likes.filter((el)=> el!= currentUser.uid)
            database.posts.doc(postData.postId).update({
                likes:narr
            })
            
        }else{
            
            let narr = [...postData.likes,currentUser.uid];
            database.posts.doc(postData.postId).update({
                likes:narr
            })
        }
    }
  return (
    <div>
    {
        like!=null?
        <>
            {
                like==true?<FavoriteIcon className="icon-style like" onClick={handleLike} /> : <FavoriteIcon className="icon-style unlike"  onClick={handleLike}/>
            }
        </>:
        <>

        </>
    
    }
    </div>    
  )
}

export default Like