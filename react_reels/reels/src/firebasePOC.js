import React,{useState} from 'react'
import auth from './firebase';

function App() {
  const [error,setError] = useState(false);
  const [email,setEmail] = useState("");
  const [user,setUser] = useState(null);
  const [password,setPassword] = useState("");
  const [loader,setLoader] = useState(false);

  const handleEmailInput = (e)=>{
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e)=>{
    setPassword(e.target.value);
  }

  const handleSubmit = async ()=>{
    try{
      setLoader(true);
      let res = await auth.signInWithEmailAndPassword(email,password);
      console.log(res.user);
      setUser(res.user);
      setLoader(false);
    }
    catch(err){
      setError(true);
      setLoader(false);
    }
  }
  return (
    <>
    {error == true?<h1>failed to login</h1>:
      loader== true? <h1>Loading....</h1>:
      user!=null?<h1>user logged in {user.uid}</h1>:
      <>
        <h1>Firebase Login</h1>
        <input type="email" value={email} onChange={handleEmailInput}></input>
        <input type="password" value={password} onChange={handlePasswordInput}></input>
        <input type="button" value="submit" onClick={handleSubmit}></input>
      </>
    }
    </>
  );
}
export default App;