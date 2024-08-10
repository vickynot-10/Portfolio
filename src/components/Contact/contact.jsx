import { assestObj } from "../../assests/assest";
import { motion } from "framer-motion";
import './contact.css'
export function Contact(){
    return(
        <motion.div id="contact-container"
       
        initial={{
            opacity:0
        }}
        animate={{
            opacity:1,transition:{
                delay:0.3,
            }
        }}
        exit={{x: "100vw" , transition:{
            ease:"easeInOut",duration:0.3
        }}}
        onAnimationStart={()=>{
            document.body.style.overflow='hidden';
        }}
        onAnimationComplete={()=>{
            document.body.style.overflow='auto';
        }}
        
        >
            <p id="contact-p">Contacts</p>
            <div id="contact-details">
                <div id="mail-div">
                    <a href="mailto:vigneshselvam504@gmail.com" target="_blank" rel="noopener noreferrer">
                        <motion.img src={assestObj.mailLogo} id="gmail" alt="gmail"
                        whileHover={{
                            scale:1.5
                        }}
                        />
                    </a>
                    <p id="mail-me-p">Mail me</p>
                </div>

            </div>
            <div id="socials-container">
                <p id="social-text">Socials</p>
            <div id="social-icons">
                <a href="https://github.com/vickynot-10" target="_blank" rel="noopener noreferrer">
                        <motion.img src={assestObj.githublogo} id="github-logo" alt="github"
                        whileHover={{
                            scale:1.5
                        }}
                        />
                </a>
                { <a href="https://www.linkedin.com/in/vignesh-s-512245293/" target="_blank" rel="noopener noreferrer">
                        <motion.img src={assestObj.LinkedInLogo} id="linkedin-logo" alt="linkedin" 
                        whileHover={{
                            scale:1.5
                        }}
                        />
                </a> }
            </div>
            </div>
        </motion.div>
    )
}