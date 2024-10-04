import './about.css';
import { useNavigate } from 'react-router-dom';
import { Project } from '../Projects/project';
import { motion } from 'framer-motion';
import { useNav } from '../../Contexts/navcontext';
import { useEffect } from 'react';
export function About( {isMobile} ){
    let {setNav}=useNav();

    useEffect(()=>{
        setNav("about")
    },[])


    let navigate=useNavigate();
    const Frontend = ["HTML","CSS","Tailwind CSS","Bootstrap","JavaScript","ReactJS"];
    const Backend = ["Node.js","ExpressJS"];
    const DataBase =["Mongodb","MySQL"];
    const versionControls=["Github"];
    const ProgrammingLanguages=["Python","PHP"];
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
            {
                isMobile ? 
                <><div style={{
                        margin: '15px 0'
                    }}>
                        <Project isMobile={isMobile} />
                    </div><div id='skill-div'>
                            <div id='skill-content-div'>
                                <p id='skills-p'>Frontend</p>
                                <div id='skills-elem'>
                                    {Frontend.map((val, index) => {
                                        return <motion.p key={index} id='skills-text'
                                            whileHover={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}
                                            whileTap={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}

                                        > {val} </motion.p>;
                                    })}
                                </div>
                            </div>

                            <div id='skill-content-div'>
                                <p id='skills-p'>Backend</p>
                                <div id='skills-elem'>
                                    {Backend.map((val, index) => {
                                        return <motion.p key={index} id='skills-text'
                                            whileHover={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}
                                            whileTap={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}

                                        > {val} </motion.p>;
                                    })}
                                </div>
                            </div>

                            <div id='skill-content-div'>
                                <p id='skills-p'>Programming Languages</p>
                                <div id='skills-elem'>
                                    {ProgrammingLanguages.map((val, index) => {
                                        return <motion.p key={index} id='skills-text'
                                            whileHover={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}
                                            whileTap={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}

                                        > {val} </motion.p>;
                                    })}
                                </div>
                            </div>

                            <div id='skill-content-div'>
                                <p id='skills-p'>Database</p>
                                <div id='skills-elem'>
                                    {DataBase.map((val, index) => {
                                        return <motion.p key={index} id='skills-text'
                                            whileHover={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}
                                            whileTap={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}

                                        > {val} </motion.p>;
                                    })}
                                </div>
                            </div>

                            <div id='skill-content-div'>
                                <p id='skills-p'>Version Control</p>
                                <div id='version-skills-elem'>
                                    {versionControls.map((val, index) => {
                                        return <motion.p key={index} id='skills-text'
                                            whileHover={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}
                                            whileTap={{
                                                color: "rgba(255,255,0,0.8)", scale: 1.5, cursor: 'pointer', originX: 0
                                            }}

                                        > {val} </motion.p>;
                                    })}
                                </div>
                            </div>

                        </div></> : <div id='skill-div'>
                <div id='skill-content-div' >
                <p id='skills-p'>Frontend</p>
                <div id='skills-elem' >
                { Frontend.map((val,index)=>{
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

                <div id='skill-content-div' >
                <p id='skills-p'>Backend</p>
                <div id='skills-elem'>
                { Backend.map((val,index)=>{
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

                <div id='skill-content-div' >
                <p id='skills-p'>Programming Languages</p>
                <div id='skills-elem'>
                { ProgrammingLanguages.map((val,index)=>{
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

                <div id='skill-content-div' >
                <p id='skills-p'>Database</p>
                <div id='skills-elem'>
                { DataBase.map((val,index)=>{
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

                <div id='skill-content-div' >
                <p id='skills-p'>Version Control</p>
                <div id='version-skills-elem'>
                {versionControls.map((val,index)=>{
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

            </div>
        }
        </motion.div>
    )
}