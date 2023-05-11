import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";



function ContactUS() {
  return (
    <div className="container mt-3 lh-lg contact">
      <div className="row">
        <div className="col-md-6 ">
          <h1 className="fs-2 " style={{color:'brown'}}>Contacts</h1>
          <div className="d-flex flex-column">
            <div className="d-flex ">
              <CiLocationOn
                className="adresIcon mt-2 me-2 "
                style={{ backgroundColor: "#ffdb74", borderRadius: "50%" }}
              />
              <h3 className="fs-4">ADDRESS</h3>
            </div>
            <div>
              <p style={{marginRight:'20px'}}>Ali Town Station Lahore</p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex ">
              <BsFillTelephoneFill
                className="adresIcon mt-2 me-2"
                style={{ backgroundColor: "#ffdb74", borderRadius: "50%" }}
              />
              <h3 className="fs-4">PHONE</h3>
            </div>
            <div>
              <p style={{marginRight:'20px' ,color:'#ffdb74'}}>+92-303-0957344</p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex ">
              <MdAlternateEmail
                className="adresIcon mt-2 me-2"
                style={{ backgroundColor: "#ffdb74", borderRadius: "50%" }}
              />
              <h3>E-MAIL</h3>
            </div>
            <div>
              <p style={{marginRight:'20px'}}>muhammadamir4406@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1CYaMf9qsEtBnZXGoeMhyMPbMcE4&hl=en_US&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
