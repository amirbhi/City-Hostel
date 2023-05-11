import React from 'react'
import IndividualIntervalsExample from './Slider'
import CheckAvailability from './checkAvailablity/CheckAvailability'
import Services from './services/Services'
import BackgroundEgg from './bgEgg/BackgroundEgg'
// import ContactUS from './Contact/ContactUS'
// import MenuItem from './menubar/MenuItem'
// import Rooms from './rooms/Rooms'
import ContactForm from './Contact/Contact'
import Rooms from './rooms/Rooms'
import CardSlider from './CardSlider'


function Home() {
  return (
    <div>
        {/* <Menubar/> */}
        {/* <MenuItem/> */}
        <IndividualIntervalsExample/>
        <CheckAvailability/>
        <Services/>
        <CardSlider/>
        <BackgroundEgg/>
        {/* <Rooms className='mt-4'/> */}
        {/* <ContactUS/> */}
        <ContactForm/>

    </div>
  )
}

export default Home