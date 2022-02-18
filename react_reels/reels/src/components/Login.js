// import React from 'react';

// let login = useContext(AuthContext);
// export default function Login() {
//   const [error,setError] = useState(false);
//   const [email,setEmail] = useState("");
//   const [user,setUser] = useState(null);
//   const [password,setPassword] = useState("");
//   const [loader,setLoader] = useState(false);
  
//   const handleEmailInput = (e)=>{
//     setEmail(e.target.value);
//   }

//   const handlePasswordInput = (e)=>{
//     setPassword(e.target.value);
//   }

//   const handleSubmit = async (e)=>{
//     e.preventDefault();
//     try{
//       setLoader(true);
//       let res = await Login(email,password);
//       setLoader(false);
//       props.history.push("/");
//     }
//     catch(err){
//       setError(true);
//       setLoader(true);

//       setEmail("");
//       setPassword("");
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="email" value={email} onChange={handleEmailInput}></input>
//         <input type="password" value={password} onChange={handlePasswordInput}></input>
//         <input type="button" value="submit" onClick={handleSubmit}></input>
//       </form>
//     </div>
//   );
// }

