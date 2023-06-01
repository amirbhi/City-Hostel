import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="/images/slide1.webp
          "
          alt="First slide"
        />
        <Carousel.Caption style={{height:'40%'}} className='p-0 m-0'>
          <h2  className='float-left   '>Book Your Stay</h2>
          <br></br> <br></br>
          <h5 className='float-left '>From 10$ Per Night.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide2.webp"
          alt="Second slide"
        />

        <Carousel.Caption style={{height:'40%'}} className='p-0 m-0'>
          <h2 className='float-left'  >Plain Trips ahead</h2>
          <br></br>
          <br></br>
          <h5 className='float-left'>from $20 a day</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide3.webp"
          alt="Third slide"
        />

        <Carousel.Caption style={{height:'40%'}} className='p-0 m-0'>
          <h2 className='firstSlideText float-left fly-in'>Save cash for fun</h2>
          <br></br>
          <br></br>
          
          <h5 className='float-left'> 
          from $30 a day.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;