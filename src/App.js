import React from "react";
import "./portfolio.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img1 from "./WhatsApp Image 2023-08-14 at 10.29.34 AM.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from "./Layout";
import { Link, Outlet } from "react-router-dom";




function App() {
  return (
   <>
  <div>
   <div className="one"  >

   <Navbar className="bg-body-primary"  >
      <Container  >
        <Navbar.Brand href="#home" style={{color:"aliceblue",fontWeight:"bolder",fontStyle:"oblique",marginTop:"0px"}}><h3>About Myself</h3></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text><h3 style={{color:"aliceblue",fontWeight:"bolder",fontStyle:"oblique"}}>Portfolio</h3>
           
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    

   </div>
   <div className="ef">
   <div className="two">
<div className="three">

    <h1 style={{textShadow:"3px 1px"}}>Hi! I'm!</h1>
    <h1 style={{color:"#242624" ,textShadow:"3px 1px"}}>Vijin cp</h1>
    <h1 style={{textShadow:"3px 1px"}}>Mern Stack Developer</h1><br></br>

    <p  style={{color:"#242624"}}>I'm a tech enthusiast who thrives on challenges and believes in the power of clean, efficient code to create seamless user experiences. My journey into the world of web development started with a curiosity-driven exploration and has now evolved into a full-fledged career where I continue to learn and grow every day.</p>
    <button style={{width:'100px',borderRadius:"15px"}}>Hire Me</button>
    <button style={{width:'100px',borderRadius:"15px",marginLeft:"15px",backgroundColor:"white", color:"#2bb550",border:"1px solid green"}}>Yes Talk</button>

</div>
<div>
  <img src={img1} alt='' height={'376px'} width={'250px'} style={{marginRight:"50px",borderRadius:"100px",border:"none"}}></img>
</div>
</div>
<div className="four" style={{display:"flex"}}>
  <div className="five">

  <Link to="about"><button style={{marginBottom:"20px",borderRadius:"25px"}}>About</button><br></br></Link>
    <Link to="education"><button style={{marginBottom:"20px",borderRadius:"25px"}}>Education</button><br></br></Link>
    <Link to="experiance"><button style={{marginBottom:"20px",borderRadius:"25px"}}>Experiance</button><br></br></Link>
    <Link to="skils"><button style={{marginBottom:"20px",borderRadius:"25px"}}>Skils</button><br></br></Link>
    <Link to="contact"><button style={{marginBottom:"20px",borderRadius:"25px"}}>Contact</button><br></br></Link>
    <Link to="project"><button style={{marginBottom:"20px",borderRadius:"25px"}}>Project</button></Link>






  </div>
  <div className="six shadow p-2 m-4" style={{}} >
    <Outlet />
    
  </div>
</div>


    


  
   </div>
   </div>
   
   
   </>
  );
}

export default App;
