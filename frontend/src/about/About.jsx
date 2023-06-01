import React from "react";
import MenuItem from "../home/menubar/MenuItem";

import "./About.css";
import BackgroundEgg from "../home/bgEgg/BackgroundEgg";
import Rooms from "../home/rooms/Rooms";
import ContactUS from "../home/Contact/ContactUS";
import ContactForm from "../home/Contact/Contact";


function About() {
  return (
    <div>
      <MenuItem/>
      
      <div className="aboutBack">
        <h1 style={{ color:'white' }} className="Abouth1 text-center">About Page</h1>
      </div>
      <div  className=" aboutPara mb-4" >
        <h1
          className="Abouth1 text-center"
        >
          Welcome !!
        </h1>
        <h6 style={{ color: "gray" ,textAlign: "center"}}>ABOUT US</h6>
        <p className="mb-4 aboutPara1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida
          ipsum nec ullamcorper condimentum. In lacinia fringilla ante, et
          efficitur tortor commodo pulvinar. Nam id eros convallis, malesuada
          lectus eu, euismod quam. Suspendisse potenti. Pellentesque vel
          condimentum velit, vel suscipit lorem. Etiam vitae neque rutrum,
          feugiat ex non, mattis purus. In pellentesque dictum nulla, non
          ullamcorper diam.</p> <p className="aboutPara1"> Quisque malesuada, ipsum eu tincidunt porta, orci
          est scelerisque eros, quis rutrum nisl nisl id justo. Vestibulum
          commodo, massa porttitor venenatis placerat, leo tellus rhoncus
          lectus, nec bibendum nisl purus a nulla. Donec at hendrerit arcu.
          Curabitur sapien purus, rutrum at quam vel, laoreet rutrum erat.
        </p>
        <br /><br />
        <img src="./images/badge.png" alt=""  style={{display:'block', margin:'0 auto'}}/>
        <br /><br />
        <BackgroundEgg/>
      </div>
      {/* <Rooms /> */}
      <ContactForm/>

    </div>
  );
}

export default About;
