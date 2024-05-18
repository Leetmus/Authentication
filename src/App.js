import {
  BrowserRouter, Routes, Route, 
} from 'react-router-dom';
import './App.css';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Page from "./routes/Page"
import { useEffect, useState } from 'react';
import { auth } from './config/firebase';
import { Navigate } from 'react-router-dom';

const App=()=> {

  const [user , setUser] = useState()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user);
    })
  })


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/Page" element={<Page/>} />
    </Routes>
    </BrowserRouter>

 
  );
}

export default App;
