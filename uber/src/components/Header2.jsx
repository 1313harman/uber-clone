import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import images from './Images'
import { FaCarAlt } from "react-icons/fa";
import { LuPackageSearch } from "react-icons/lu";
import { MdCarRental } from "react-icons/md";
import { FaReceipt } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
function Header2() {
    const [signUpPage,setSignUpPage] = useState(false)

  return (
    <>
        <div className={`flex inset-0 bg-zinc-100 h-[64px] w-auto justify-center items-center mb-10 ${signUpPage? ' absolute z-50' : ''}`}>
          <div className='flex justify-center items-center text-center gap-[750px]'>
            <div className='flex justify-center items-center gap-7'>
                <div className='flex justify-between items-center -ml-20 px-16'>
                    <Link to='/'><h1 className='text-black text-3xl font-semibold text-nowrap'>Uber</h1></Link>
                </div>
                <div className='flex justify-between items-center gap-7 mt-2'>
                    <div className='flex justify-between items-center gap-2' role='button'>
                        <FaCarAlt className='h-5 w-5'/>
                        <Link to='/go'><h1 className='text-black text-md'>Ride</h1></Link>
                    </div>
                    <div className='flex justify-between items-center gap-2' role='button'>
                        <LuPackageSearch className='h-5 w-5'/>
                        <Link to='/go/packages'><h1 className='text-black text-md'>Packages</h1></Link>
                    </div>
                    <div className='flex justify-between items-center gap-2' role='button'>
                        <MdCarRental className='h-5 w-5'/>
                        <Link to='/go/rentals'><h1 className='text-black text-md'>Rentals</h1></Link>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-7 ml-9'>
                <div className='flex justify-between items-center gap-2' role='button'>
                    <FaReceipt className='h-5 w-5'/>
                    <Link to='/go'><h1 className='text-black text-md'>My trips</h1></Link>
                </div>
              <div className='flex justify-between items-center bg-white rounded-full px-3 py-2 -ml-3 gap-2' role='button'>
                <img src={images.useImg} className='h-9 w-9' alt="" />  
                <FaAngleDown className='h-4 w-4' />
              </div>          
            </div>
          </div>
        </div>
    </>
  )
}

export default Header2