import React from "react";
import { Link } from "react-router-dom";

function MenuItem() {
  return (
    <div className="container mt-2 p-2">
      <div className="row">
        <div className="col-lg-3 col-5   d-none d-sm-block">
          <img src=" /images/logo2x.webp" alt="" width={150} />
        </div>
        <div className="col-lg-6 col-sm-3 col-6 ps- text-center">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <button
              className="navbar-toggler  btn btn-outline-primary border-none text-center"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ width: 60 }}
            >
              <span class="navbar-toggler-icon "></span>
            </button>

            <div
              className="collapse navbar-collapse text-center"
              id="navbarSupportedContent"
              style={{ width: 0 }} 
            >
              <ul class="navbar-nav w-100 d-flex justify-content-evenly ">
                <li class="nav-item active">
                  <Link to={"/"} className="menulink " style={{textDecoration:'none'}}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/about"} className="menulink"  style={{textDecoration:'none'}}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/rooms"} className="menulink"  style={{textDecoration:'none'}}>
                    Rooms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"} className="menulink"  style={{textDecoration:'none'}}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Gallery"} className="menulink"  style={{textDecoration:'none'}}>
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-lg-3 col-sm-4 col-4 d-flex">
          <div className="me-2">
            {" "}
            {/* Log in */}
            <Link to={"/login"} className="btn btn-outline-primary me-3">
              Login
            </Link>
          </div>
          <div>
            {/*Sign in */}
            <Link to={"/signup"} className="btn btn-outline-primary">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
