import React from 'react'
import { FaCoffee,  } from 'react-icons/fa';
import { TbAirConditioning,  TbToolsKitchen2 } from 'react-icons/tb';
import { GiLockedFortress, GiShower } from 'react-icons/gi'
import {  MdLocalLaundryService} from 'react-icons/md'
import './Services.css'
function Services() {
  return (
    <div className='container text-center mb-5'>
        <div className='text-center'>
            <h2 className='facilty'>Facilities</h2>
            <p className='para1'>WHAT WE OFFER FOR FREE</p>
            
        </div>
        <div className='row mt-4'>
            <div className='col-sm-2 col-4 serv'>
                <FaCoffee className='iconstyle'/>
                <h4 className='h4style text-center '>Tea and Coffee</h4>
            </div>
            <div className='col-sm-2  col-4 serv'>
            <GiShower  className='iconstyle'/>
                <h4 className='h4style '>Hot Shower</h4>

            </div>
            <div className='col-sm-2  col-4 serv'>
                <MdLocalLaundryService  className='iconstyle'/>
                <h4 className='h4style  '>Laundry</h4>
            </div>
            <div className='col-sm-2  col-4 serv'>
                <TbToolsKitchen2  className='iconstyle'/>
                <h4 className='h4style '>Kitchen</h4>
            </div>
            <div className='col-sm-2  col-4 serv'>
                <TbAirConditioning  className='iconstyle'/>
                <h4 className='h4style '>Air Conditioner</h4>
                
            </div>
            <div className='col-sm-2  col-4 serv'>
                <GiLockedFortress  className='iconstyle'/>
                <h4 className='h4style '>Lockers</h4>

            </div>

        </div>
        <div className='row'>
            <div className='col-sm-2  col-4 serv'>
                <FaCoffee className='iconstyle'/>
                <h4 className='h4style text-center'>Tea and Coffee</h4>
            </div>
            <div className='col-sm-2  col-4 serv'>
            <GiShower  className='iconstyle'/>
                <h4 className='h4style '>Hot Shower</h4>

            </div>
            <div className='col-sm-2  col-4 serv'>
                <MdLocalLaundryService  className='iconstyle'/>
                <h4 className='h4style  '>Laundry</h4>
            </div>
            <div className='col-sm-2  col-4 serv'>
                <TbToolsKitchen2  className='iconstyle'/>
                <h4 className='h4style '>Kitchen</h4>
            </div>
            <div className='col-sm-2  col-4 serv'>
                <TbAirConditioning  className='iconstyle'/>
                <h4 className='h4style '>Air Conditioner</h4>
                
            </div>
            <div className='col-sm-2  col-4 serv'>
                <GiLockedFortress  className='iconstyle'/>
                <h4 className='h4style '>Lockers</h4>

            </div>

        </div>
    </div>
  )
}

export default Services