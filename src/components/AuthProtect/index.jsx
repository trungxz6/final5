import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Footer from "../Footer";
import { Outlet } from 'react-router-dom';
import HeaderAuth from "../HeaderAuth/indexAuth";



function AuthProtect(props) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        if (localStorage.getItem('crrUser')){
            const getUser = JSON.parse(localStorage.getItem('crrUser'))
            console.log(getUser)
            if (getUser.username && getUser.pass) {
                setLoading (false)
            }
            else {
                navigate('/login')
                localStorage.removeItem('crrUser')
            }
        } 
        else {
            navigate('/login')
            localStorage.removeItem('crrUser')
        }
    }, [])
    return (
        <>
        {
        loading ? 
        <div style={{backgroundColor: '#102531'}}>
            <Header/>
            <Navbar/>
            <Banner/>
            <Outlet />
            <Footer/>
        </div>:
            props.children
        }
            
        </>
    );
  }
  
  export default AuthProtect;