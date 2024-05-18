import React, { useState } from 'react'
import "./Login.css"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'


function Login() {

  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

  const handleLogin = async (e)=>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,email,password)
      console.log("Login Succesful")
      alert("Login Succesful")
      window.location.href="/Page"

    }catch(error){
      console.log(error.message)
      alert(error.message)
    }

  }

  return (
    <div>
            
           <div>
                <div className="login-page">
                <form onSubmit={handleLogin} className="login-form" >
                    <div className="titles">Registered Users: LogIn</div>
                    <input type="Id" name="Email"placeholder="email..." required onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" name="password" placeholder="Password..." required onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit">Login</button>
                    <div><a href='/Signup'>SignUp here</a></div>
                </form>
                </div>
               </div> 
            </div>    


    
  )
}


export default  Login