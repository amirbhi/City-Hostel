import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
    const [inpt,setInp]=useState({
email:"",
password:""
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        
        setInp((previnpt)=>({
            ...previnpt,
            [name]:value

        }))
    

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <Form className="container login-form mt-4" onSubmit={handleSubmit}  >
      <h3 className="text-center mb-3">Log in to your account</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password"  onChange={handleChange}/>
      </Form.Group>

      <div className="d-flex justify-content-between align-items-center">
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check className="mt-3" type="checkbox" label="Remember me" />
        </Form.Group>
        <a href="/">Forgot password?</a>
      </div>

      <Button className="mt-3" variant="primary" type="submit" block>
        Log in
      </Button>

      <p className="text-center mt-3">
        Don't have an account? <a href="/">Sign up now</a>
      </p>
    </Form>
  );
}

export default Login;
