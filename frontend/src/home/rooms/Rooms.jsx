import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Rooms.css'
import MenuItem from '../menubar/MenuItem';
import Services from '../services/Services';
import ContactForm from '../Contact/Contact';
import CardSlider from '../CardSlider';
const Rooms = () => {

  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Fetch the cards data from an API or some data source
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/room/');
      const data = await response.json();
      setCards(data);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   // Move the card slider every second
  //   const intervalId = setInterval(() => {
  //     setIndex(index => (index + 1) % (cards.length - 2));
  //   }, 6000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [cards.length]);

  return (
    <>
    {/* <MenuItem/> */}
    <MenuItem/>

    <div className="aboutBack">
        <h1 style={{ color:'white' }} className="Abouth1 text-center">Room Page</h1>
      </div>
      <div  className=" aboutPara mb-4" >
        <h1
          className="Abouth1 text-center"
        >
          Welcome !
        </h1>
        <h6 style={{ color: "gray" ,textAlign: "center"}}>Rooms </h6>
        <p className="pb-4 aboutPara1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida
          ipsum nec ullamcorper condimentum. In lacinia fringilla ante, et
          efficitur tortor commodo pulvinar. Nam id eros convallis, malesuada
          lectus eu, euismod quam. Suspendisse potenti. Pellentesque vel
          condimentum velit, vel suscipit lorem. Etiam vitae neque rutrum,
          feugiat ex non, mattis purus. In pellentesque dictum nulla, non
          ullamcorper diam.</p> 
        </div>
        
    <Container>
      <Row>
        {cards.map(card => (
          <div key={card.id} className='col-md-4'>
            <Card>
              <Card.Img variant="top" src={ "/images/slide3.webp"}  style={{ height: '200px', width: 'auto' }}/>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                <p style={{fontSize:'13px',fontWeight:"800",color:'#928f88',display:'inline-block',marginRight:'5px',marginBottom:'0px'}}>Per Night from:</p>
                  {card.price}$
                </Card.Text>
                <Card.Text>
                  <p style={{fontSize:'13px',fontWeight:"800",display:'inline-block',marginRight:'5px',marginBottom:'0px'}}>Remaining Seats in this room:</p>
                  {card.roomCapacity}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
    
      </Row>

    </Container>
    {/* <CardSlider/> */}
    <br /><br />

    <Services />
    <ContactForm/>
    </>
  );
};

export default Rooms;
