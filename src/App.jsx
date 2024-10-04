
import { Contact } from "./components/Contact/contact.jsx";
import { HomePage } from "./components/Home/home.jsx";
import { NavBar } from "./components/Navbar/nav.jsx";
import { About } from "./components/About/about.jsx";
import { Project } from "./components/Projects/project.jsx";
import { Routes,Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ContextProvider } from "./Contexts/navcontext.jsx";
import { useLocation } from "react-router-dom";

export function App(){
  let location =useLocation();

  return(
    <>
    <ContextProvider>
    <NavBar />
    <AnimatePresence 
    onExitComplete={()=>{
      document.body.style.overflow = 'hidden';

    }}
    > 
    <Routes key={location.key} location={location} >   
      <Route path="/" element={<HomePage  />} />
      <Route path="/about" element={<About  />} />
      <Route path="/contact" element={<Contact  />} />
      <Route path="/projects" element={<Project  />} />
    </Routes>
    </AnimatePresence>    
    </ContextProvider>
    </>
  )
}