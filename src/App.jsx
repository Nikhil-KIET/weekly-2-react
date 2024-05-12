import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./Profile";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Certificates from "./Certificates";


function App() {
  return (
    <div className=" flex  justify-center  " id="main">

      <div className=" w-[86%]  flex   gap-12 relative  bg-lime-200  ">

      <Profile></Profile> 
      <Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />}></Route>
      </Routes>

      </Navbar>
    

      </div>
      
      
     

      
    </div>
  );
}

export default App;
