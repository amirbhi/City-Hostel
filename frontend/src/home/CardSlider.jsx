import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function CardSlider() {
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

  useEffect(() => {
    // Move the card slider every second
    const intervalId = setInterval(() => {
      setIndex(index => (index + 1) % (cards.length - 2));
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [cards.length]);
  return (
    <div>
        <hr />
        <Container>
      <Row>
        {cards.slice(index, index + 3).map(card => (
          <Col key={card.id}>
            <Card>
              <Card.Img variant="top" src={card._id}  style={{ height: '200px', width: 'auto' }}/>
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
          </Col>
        ))}
    
      </Row>

    </Container>
    
    <br />
    </div>
  )
}

export default CardSlider