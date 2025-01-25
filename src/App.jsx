import React from 'react'
import  Navbar from "./components/Navbar"
import CurrTasks from './components/CurrTasks'
import Recommendation from './components/Recommendation'
import ImpactDash from './components/ImpactDash'
import AllJobs from './components/AllJobs'
import Feature from './components/Feature'


//import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Home from "./pages";
// import About from "./pages/about";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";
// import Contact from "./pages/contact";

const App = () => {
  return (
    <>
    <Navbar />
    <ImpactDash />
    <div  class="all-cards">

    <Recommendation />
    <Feature />
    <AllJobs />
    
    </div>
    
    <CurrTasks />
  
   
    
    </>
  )
}

export default App