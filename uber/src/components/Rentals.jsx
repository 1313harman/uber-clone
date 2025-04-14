import React from 'react'
import images from './Images'
import { useNavigate } from 'react-router-dom'
import { GiSandsOfTime } from "react-icons/gi";
import { IoBagSharp } from "react-icons/io5";
import { IoHandLeft } from "react-icons/io5";

function Rentals() {
    let gotoRide = useNavigate()
    const handleGotoRide = () =>{
        gotoRide('/go')
    }
  return (
    <>
        <div className='flex flex-col fixed inset-0 justify-center items-start w-auto h-auto bg-white mt-16'>
            <div className='flex flex-col justify-center items-center bg-white h-[600px] w-[330px] ml-11 mt-7 border rounded-xl gap-5'>
                <img className='-mt-2 rounded-xl' src={images.rentImage} alt="" />
                <div className='flex flex-col overflow-scroll px-4 py-4 h-60 gap-3'>
                    <h1 className='text-2xl font-bold font-PlexSans'>Hourly</h1>
                    <div className='flex flex-col gap-2 px-6'>
                        <div className='flex flex-row justify-between items-center gap-5'>
                            <GiSandsOfTime className='h-7 w-7'/>
                            <p className='text-gray-600 font-PlexSans'>Keep a car and driver with you for hours</p>
                        </div>
                        <div className='flex flex-row justify-between items-center gap-5'>
                            <IoBagSharp className='h-10 w-10'/>
                            <p className='text-gray-600 font-PlexSans'>Ideal for business meetings, tourist travel and multiple stop trips</p>
                        </div>
                        <div className='flex flex-row justify-between items-center gap-5'>
                            <IoHandLeft className='h-5 w-5'/>
                            <p className='text-gray-600 font-PlexSans'>As many stops as you need</p>
                        </div>
                    </div>
                </div>
                <button type='submit' className=' bg-black w-72 px-8 py-3 rounded-lg text-white font-semibold' onClick={handleGotoRide}>Get Started</button>                
            </div>
        </div>
    </>
  )
}

export default Rentals