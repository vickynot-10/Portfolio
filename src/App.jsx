import { useState } from "react";
import { Contact } from "./components/Contact/contact.jsx";
import { HomePage } from "./components/Home/home.jsx";
import { NavBar } from "./components/Navbar/nav.jsx";
import { About } from "./components/About/about.jsx";
import { Project } from "./components/Projects/project.jsx";
import { Routes,Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export function App(){
  let [nav,setNav] = useState("home");
  let location =useLocation()
  return(
    <>
    <NavBar nav={nav} setNav={setNav} />
    <AnimatePresence 
    onExitComplete={()=>{
      document.body.style.overflow = 'hidden'
    }}
    > 
    <Routes key={location.key} location={location} >   
      <Route path="/" element={<HomePage setNav={setNav} />} />
      <Route path="/about" element={<About setNav={setNav} />} />
      <Route path="/contact" element={<Contact setNav={setNav} />} />
      <Route path="/projects" element={<Project setNav={setNav} />} />
    </Routes>
    </AnimatePresence>    
    </>
  )
}