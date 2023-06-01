import React, { useState } from 'react'
// import Menubar from './home/menubar/Menubar'
import { Route, Router,Routes } from 'react-router-dom'
import Home from './home/Home'
import Login from './home/menubar/Login'
import Slider from './home/Slider'
import About from './about/About'
import Rooms from './home/rooms/Rooms'
import ContactForm from './home/Contact/Contact'
import MenuItem from './home/menubar/MenuItem'
// import Admin from './adminPanel/Admin'
import SignUpForm from './home/menubar/SignUpForm'
import CreateRoom from './crud/CreateRoom'

import ShowRoom from './crud/ShowRoom'
import AdminLayout from './about/Adminpanel/AdminLayout'
import UpdateRoom from './crud/UpdateRoom'

function App() {
  //state for editing the data
  // const [Getid, SetGetid] = useState();
  // const empty = {
  //   roomNo: "",
  //   title: "",
  //   floorNo: "",
  //   description: "",
  //   rating: "",
  //   price: "",
  //   roomCapacity: "",
  //   img: "",
  // };
  // //state for handling input
  // const [handle, setHandle] = useState(empty);

  // // function for handle the input fields
  // const handler = (e) => {
  //   const { name, value } = e.target;
  //   setHandle({ ...handle, [name]: value });
  //   console.log(handle);
  // };

  // // function for creating the Api data
  // const createApi = () => {
  //   fetch("http://localhost:5000/room", {
  //     method: "POST",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(handle),
  //   });
  // };
  // // function for editing the Api
  // const editApi = async (id) => {
  //   var data = await fetch(`http://localhost:5000/room/${id}`);
  //   data = await data.json();
  //   console.log(data);
  //   setHandle(data);
  //   SetGetid(id);
  // };
  // // function for updating the Api
  // const updateApi = () => {
  //   fetch(`http://localhost:5000/room/${Getid}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(handle),
  //   });
  // };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menubar" element={<Menubar />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path='/slider' element={<Slider/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/createroom" element={<CreateRoom />} />
        <Route path="/showroom" element={<ShowRoom />} />
        <Route path="/admin" element={<AdminLayout />} />

{/* NEW PAGES ADDED IN COMPONRNTS */}
<Route path="/showroom" element={<ShowRoom />} />
<Route path="/createroom" element={<CreateRoom />} />

        <Route path="/update" element={<UpdateRoom  />} />
        







        


        <Route path="/contacform" element={<ContactForm />} />
      </Routes>
      
    </div>
  )
}

export default App