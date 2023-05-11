import React from 'react'
// import Menubar from './home/menubar/Menubar'
import { Route, Router,Routes } from 'react-router-dom'
import Home from './home/Home'
import Login from './home/menubar/Login'
import IndividualIntervalsExample from './home/Slider'
import About from './about/About'
import Rooms from './home/rooms/Rooms'
import ContactForm from './home/Contact/Contact'
import MenuItem from './home/menubar/MenuItem'

function App() {
  return (
    <div>
      <MenuItem/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menubar" element={<Menubar />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path='/slider' element={<IndividualIntervalsExample/>}></Route> */}
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />

        


        <Route path="/contacform" element={<ContactForm />} />
      </Routes>
      
    </div>
  )
}

export default App