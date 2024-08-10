import './about.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export function About( {setNav} ){
    let navigate=useNavigate();
    let skills=["Python","HTML","CSS","Tailwind CSS","Bootstrap","JavaScript","Node.js","Express","MySQL","MongoDB","Github"];
    function redirectContact(){
        navigate('/contact');
        setNav('contact');
    }
    return(
        <motion.div id="skills-container"
        
       initial={{
            opacity:0
        }}
        animate={{
            opacity:1,transition:{
                delay:0.3
            }
        }}
        exit={{x: "-100vw" , transition:{
            ease:"easeInOut"
        }}}
        onAnimationStart={()=>{
            document.body.style.overflow='hidden';
        }}
        onAnimationComplete={()=>{
            document.body.style.overflow='auto';
        }}

       
        >
            <div id='about-section'>
                <p id="about-me">About Me</p>
                <p id='about-me-desc'>
                    Hi ! I'm Vignesh, A recent graduate in 2024 with knowledge in programming concepts and Web development. <br /> I'm enthusiastic about applying my skills to new projects and am eager to continue learning and growing in tech field. <br /> Feel free to reach out if you'd like to connect!
                </p>
                <motion.button id='contact-btn' onClick={ redirectContact }  
                whileHover={{
                    scale:1.2,origin:0,boxShadow:'5px 5px 5px lightblue'
                }}         
                >Contact</motion.button>
            </div>
            <div id='skill-div'>
                <p id='skills-p'>Skills</p>
                <div id='skills-elem'>
                { skills.map((val,index)=>{
                  return  <motion.p key={index}  id='skills-text'
                  whileHover={{
                   color:"rgba(255,255,0,0.8)"  ,scale:1.5,cursor:'pointer',originX:0
                 }}
                  whileTap={{
                    color:"rgba(255,255,0,0.8)"  ,scale:1.5,cursor:'pointer',originX:0   
                  }}
                  
                  > {val} </motion.p>
                }) }
                </div>
            </div>
        
        </motion.div>
    )
}