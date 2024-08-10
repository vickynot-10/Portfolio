import { motion } from "framer-motion";
import { assestObj } from "../../assests/assest";
import './project.css'
export function Project(){
    let projectDetails=[
        {
            image:assestObj.skullcandyLogo,
            title:"Simple Skullcandy Clone",
            desc:"This website features JWT-based user authentication for secure login and registration,A shopping page with cart management and checkout functionality",
            link: "https://skullcandy-completed.onrender.com/",
            linkName:"Skullcandy Live Server Link"
        },
         {
             image:assestObj.ATMlogo,
             title:"ATM Management",
             desc:`The System for allows users to perform financial transactions like withdrawal and
                 Deposit , Balance inquiries ,featuring PIN verification for security and PiN Change
                 System and with Loan management.Transaction history is logged in MySQL within
                 specified timestamps`,
             link:"https://vickynot-10.github.io/ATM-Management/",
             linkName:"Github Repo Link"
         },
         {
            image:assestObj.WeatherLogo,
            title:"Weather Forecast",
            desc:` The weather forecast allows users to input city names and displays the current weather
                information such as Temperature,Wind speed and Humidity for the specified city.`,
            link:"https://vickynot-10.github.io/Weather/",
            linkName:"Weather Live Link"
        }
    ]
    return(
        <motion.div id="project-container" 
        onAnimationStart={()=>{
            document.body.style.overflow = 'hidden' ;
      }}
      onAnimationComplete={()=>{
           document.body.style.overflow = 'auto'; 
      }}

        initial={{
            opacity:0
        }}
        animate={{
            opacity:1,transition:{
                delay:0.3,
            }
        }}
        exit={{x: "100vw" , transition:{
            ease:"easeInOut",
            duration:0.3
        }}}
        >
            <p id="project-p">Projects</p>

        {projectDetails.map((elem,index)=>{
        return <div id="project-section" key={`div-${index}`}  >
                <div id="project-img">
                    <img src={elem.image} id="project-logo" key={`img-${index}`} alt="projectlogo" />  
                 </div>
                <div id="project-texts">
                    <p id="project-title" key={`p-${index}`}> {elem.title} </p>
                    <p id="project-desc" key={`p1-${index}`}> {elem.desc} </p>
                    <p id="project-link" key={`link-${index}`}> Link : 
                        <motion.a href={elem.link} target="_blank" id="link-a" 
                            whileHover={{
                             color:"yellow",fontSize:"20px"
                            }}
                        > {elem.linkName} </motion.a>
                         </p>
                </div>
            </div>
            })}
        </motion.div>
    )
}
