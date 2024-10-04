import { Link } from "react-router-dom";
import './nav.css';
import { assestObj } from "../../assests/assest";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNav } from "../../Contexts/navcontext";


export function NavBar( ){
    let {nav,setNav} =useNav();
    let [isMobile,setMobile]= useState(false);
    return(
    <div id="navbar-container" >
           
        <div id={isMobile?'navlinks-mobile':'navlinks'}>
        
        <p onClick={ ()=>setNav("home")  }  >
             <Link to="/" className={nav==='home'?"active":" "}>Home</Link>
        </p>
        <p onClick={ ()=>setNav("about")  } >
            <Link to="/about"  className={nav==='about'?"active":" "} >About</Link>
        </p>
        <p onClick={ ()=>setNav("projects")  } >
            <Link to="/projects"  className={nav==='projects'?"active":" "}>Projects</Link>
        </p>
        <p onClick={ ()=>setNav("contact")  } >
            <Link to="/contact"  className={nav==='contact'?"active":" "} >Contact</Link>
        </p>
           <motion.button id="resume-btn"
           whileHover={
            {
                scale:1.3,boxShadow:'2px 2px 2px 2px lightblue'

            }}
            > 
             <a href={assestObj.ResumePdf} download="Resume" >Resume</a> 
           </motion.button>
        </div>
        <motion.button className="mobile-menu-icon" onClick={()=> setMobile(!isMobile) }
            whileHover={
                {
                    scale:1.5
                }}>
            {isMobile ? (
                    <motion.img
                    src={assestObj.Closemenu} 
                    alt="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ rotate:-360,
                        duration: 0.5, ease: "easeInOut" }}
                    />
                    ) : (
                    <motion.img
                    src={assestObj.MenuOpen} 
                    alt="menu"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    whileTap={{
                        rotate: 180,
                        transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    />
                )
            
             }
        </motion.button>     
 
    </div>

    
    )
}