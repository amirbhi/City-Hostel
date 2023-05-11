import React from "react";
import { Button, Card } from "react-bootstrap";

import './CheckAvailability.css'
function CheckAvailability() {
   
    
     
  return (
    <div className="container mt-4 overflow-hidden">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 card-left" data-aos="fade-down">
        
          <Card >
            <Card.Img variant="top" src="/images/slide1.webp" />
            <Card.Body className="bg-info p-2 text-white">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          
        </div>
        <div className="col-lg-4 col-md-6 mb-4 card-top" data-aos="fade-left">
        
          <Card >
            <Card.Img variant="top" src="/images/slide2.webp" />
            <Card.Body className="bg-info p-2 text-white">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          
        </div>
        <div className="col-lg-4 col-md-8 mb-4 " data-aos="fade-right" >
          <Card className="card3 p-2 bg-info text-white" >
            <div >
                <h2>Stay Longer,Save More</h2>
            </div>
            <p>Its simple: the longer you stay, the more you save!</p>
            <p>Save upto 30% on daily rate for stays longer than 14 nights</p>
            <p>Save upto 20% off the nightly rate on stays between 7-14 nights</p>
            <button className="btn btn-primary">View More</button>
          </Card>
         
        </div>
      </div>
    </div>
  );
}

export default CheckAvailability;
