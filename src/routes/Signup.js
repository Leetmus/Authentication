import React, {  useState } from 'react'
import "./Signup.css"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth,db } from '../config/firebase'
import {setDoc,doc} from "firebase/firestore"

 function Signup() {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const[fname, setFname] = useState("")
  const[Lname, setLname] = useState("")
 

  const handleSignup = async(e)=>{
    e.preventDefault();

    try{
     await createUserWithEmailAndPassword(auth,email,password)
      const user = auth.currentUser;
      console.log(user)

      if(user){
        await setDoc(doc(db, "Users",user.uid),{
          email: user.email,
          firstname: fname,
          lastname: Lname
        })
      }
      console.log("User is registered succesfully")
      alert('User registered Succesfully')
    }catch(error){
      console.log(error.message)
      alert(error.message)
    }

  }
 
  return (
    <div>
            
           <div>
                <div className="login-page">
                <form onSubmit={handleSignup} className="login-form" >
                    <div className="titles">SignUp Users: SignUp</div>
                    <input type="Id" name="Firstname"placeholder="First Name" required onChange={(e)=>setFname(e.target.value)} />
                    <input type="Id" name="Lastname"placeholder="Last Name" required onChange={(e)=>setLname(e.target.value)}/>
                    <input type="Id" name="email"placeholder="email" required onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" name="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" >SignUp</button>
                    <div><a href='/'>Login</a></div>
                </form>
                </div>
               </div> 
            </div>    


    
  )
}


export default  Signup


