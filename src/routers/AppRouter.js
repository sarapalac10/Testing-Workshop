import React, {useState, useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Login from '../components/Login';
import { Registro } from '../components/Registro';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { getAuth,onAuthStateChanged } from "@firebase/auth";
import { Task } from "../components/Task";

export const AppRouter = () => {

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [id, setId] = useState('')

 useEffect(() => {
       const auth = getAuth();
       onAuthStateChanged(auth, (user) => {
           if(user?.uid){
            //console.log(user)
             setId(user.uid)
            setIsLoggedIn(true)
           }
           else{
            setIsLoggedIn(false)
           }

           setChecking(false)
       })

    
 }, [])


    if(checking){
        return(
            <h1>Espere...</h1>
        )
    }

    return (
        <BrowserRouter>
     
            <Routes>

                <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login/> 
                    </PublicRoute>
                } />



                <Route path="/registro" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Registro/>
                    </PublicRoute>
                } />

                
                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes/>
                    </PrivateRoute>
                }/>

            </Routes>

            {/*<Task uid={id}/>*/}
        </BrowserRouter>
    )
}
