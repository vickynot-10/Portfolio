import './home.css';
import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { About } from '../About/about';
import { assestObj } from '../../assests/assest';
import { useNav } from '../../Contexts/navcontext';
export function HomePage(  ){
    let {setNav} =useNav();
    useEffect(()=>{
        setNav("home");
    },[])
    
  useEffect(()=>{
    function mobileWidth(){
        setIsmobile(window.innerWidth <= 640)
    }
    mobileWidth()
    window.addEventListener("resize",mobileWidth);
    return () => window.removeEventListener("resize", mobileWidth);
  },[])


    let Navigate = useNavigate();
    const [isMobile,setIsmobile]=useState(false)
    function redirectProjetcs(){
        Navigate('/projects');
        setNav("projects")
    }
    return(
        <>
        <motion.div id= { isMobile ? "mobile-container" : "container" }
      
        initial={{ opacity:0 }}
        animate={{ 
            opacity :  1 ,transition:{
            delay:0.3
        }}}
        exit={{x:"-100vw",transition:{
            ease:"easeInOut",
            duration:0.3,
        }}}
        onAnimationStart={()=>{
            document.body.style.overflow='hidden';
        }}
        onAnimationComplete={()=>{
            document.body.style.overflow='auto';
        }}
        >
        <p id='My-name'>Hi, My name is</p>
        <p id='name'> VIGNESH </p>
        {
            isMobile ? <div id='social-links-mobile' >
                <a href="mailto:vigneshselvam504@gmail.com" target="_blank" rel="noopener noreferrer">
                        <motion.img src={assestObj.mailLogo} id="gmail-mobile" alt="gmail"
                        whileHover={{
                            scale:1.5
                        }}
                        />
                    </a>


                    <a href="https://github.com/vickynot-10" target="_blank" rel="noopener noreferrer">
                        <motion.img src={assestObj.githublogo} id="github-logo-mobile" alt="github"
                        whileHover={{
                            scale:1.5
                        }}
                        />
                </a>

                <a href="https://www.linkedin.com/in/vignesh-s-512245293/" target="_blank" rel="noopener noreferrer">
                        <motion.img src={assestObj.LinkedInLogo} id="linkedin-logo-mobile" alt="linkedin" 
                        whileHover={{
                            scale:1.5
                        }}
                        />
                </a>




            </div>
            
            
            : null
        }
        <p id='desc'>A focused Web Developer building Websites </p>
        <p id='desc1'>and web Applications that leads to the success of the overall product.</p>

        {
            isMobile ? 

            <div id='child-components-about' >
             <About isMobile={isMobile} /> 
            </div>
            
            
            :   



        <motion.button
         whileHover={{
            scale:1.2,origin:0,boxShadow:'5px 5px 5px lightblue'
        }}
        onClick={redirectProjetcs}
        >Projects</motion.button>
    }
        </motion.div>
    
        </>
    )
}