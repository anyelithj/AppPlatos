import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import AddArticle from '../components/AddArticle';
import EditArticle from '../components/EditArticle';
import ListArticles from '../components/ListArticles';
import Login from '../components/Login';
import NavBar from '../components/NavBar';
import Register from '../components/Register';
import Home from '../page/Home';
import { DashboardRoutes } from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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
           <NavBar/>
            <Routes>
                <Route path="/" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login/>
                    </PublicRoute>
                 } />

                <Route  path="/register" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Register/>
                    </PublicRoute>
                } />

                <Route path="/dashboard/*" element={//path="/dashboard/*" 
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes/>
                    </PrivateRoute>
                }/>
                <Route path="/Home"  element={
                    <PublicRoute> 
                      <Home/>
                    </PublicRoute>
                 } />
                {/* <Route path="/" element={<Login/>}/> */}
                {/* <Route path="/register" element={<Register/>}/>
                <Route path="/Home" element={<Home/>}/> */}
                <Route path="/listArticle" element={<ListArticles/>}/>
                <Route path="/addArticle" element={<AddArticle/>}/>
                <Route path="/EditArticle/:articleIndex/:ingredientIndex" element={<EditArticle/>}/>
                {/* <Route path="/deleteArticle" element={<DeleteArticle/>}/> */}
                <Route path="*" element={<Navigate to="/"/>}/>  
                </Routes>
            </Router>
    </div>
  )
}

export default AppRouters
