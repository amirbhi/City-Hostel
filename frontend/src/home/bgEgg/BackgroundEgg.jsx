import React from 'react'
import './BgEgg.css'
function BackgroundEgg() {
  return (
    <div className='bgegg'>
            <div className='d-flex flex-column'>
            <p className='bgeggp1'>Bed & <br /> breakfast</p>
            <p className='bgeggp2 ms-3 p-3'>Order breakfast just for 2.99$ <br /> with your booking</p>
            {/* <img src="./images/ticket.png" alt="" style={{float:'right'}} /> */}
            <button className='btn btn-primary ms-4 p-3' style={{width:'130px'}}>Book Now</button>
            </div>
    </div>
  )
}

export default BackgroundEgg