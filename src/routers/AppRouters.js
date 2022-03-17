import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import AddArticle from '../components/AddArticle';
import DeleteArticle from '../components/DeleteArticle';
import EditArticle from '../components/EditArticle';
import ListArticles from '../components/ListArticles';
import Login from '../components/Login';
import Register from '../components/Register';

const AppRouters = () => {
  const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        const auth = getAuth();
        return onAuthStateChanged(auth, (user)=>{
            console.log(user);
        if(user?.uid){
            setIsLoggedIn(true)
        }
        else{
            setIsLoggedIn(false)
        }
        setChecking(false)
    })
    }, [])
   
    
    if(checking) {
        return (
            <h1>Espere...</h1>
        )
    }
  return (
    <div>
       <Router>
            <Routes>
                <Route path="/listArticle" element={<ListArticles/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/addArticle" element={<AddArticle/>}/>
                <Route path="/EditArticle" element={<EditArticle/>}/>
                <Route path="/deleteArticle" element={<DeleteArticle/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>  
                </Routes>
            </Router>
    </div>
  )
}

export default AppRouters
