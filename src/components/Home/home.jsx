import './home.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function HomePage( {setNav} ){
    let Navigate = useNavigate();
    
    function redirectProjetcs(){
        Navigate('/projects');
        setNav("projects")
    }
    return(
        <>
        <motion.div id="container"  
      
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
        <p id='name'> Vignesh </p>
        <p id='desc'>A focused Web Developer building Websites </p>
        <p id='desc'>and web Applications that leads to the success of the overall product.</p>
        <motion.button
         whileHover={{
            scale:1.2,origin:0,boxShadow:'5px 5px 5px lightblue'
        }}
        onClick={redirectProjetcs}
        >Projects</motion.button>
        </motion.div>
        </>
    )
}