import React from 'react'
import images from './Images'
import { IoSearchSharp } from "react-icons/io5";
import { IoQrCode } from "react-icons/io5";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc,setDoc } from "firebase/firestore";
import {auth,db} from './Firebase';
import { useNavigate } from 'react-router-dom';

import Home from './Home'

function Signin() {
    const gotooHome = useNavigate()
    const handleGoogleLogin = () =>{
        const provider =new  GoogleAuthProvider()
        signInWithPopup(auth,provider).then(async(result)=>{
            let user = result.user
            console.log(user)
            if(user)
            {
                await setDoc(doc(db,'users',user.uid),{
                    fullName:user.displayName
                })
                gotooHome('/')
                document.body.style.overflowY = 'scroll'
            }
        })
    }

  return (
    <>
        <div className='flex justify-center items-center ml-5'>
            <div className='flex flex-col justify-center items-start mt-7 gap-2 mb-56'>
                <h1 className='text-2xl font-PlexSans max-w-96'>What's your phone number or email?</h1>
                <input className=' bg-zinc-200 w-80 px-4 py-3 rounded-lg' type="text" placeholder='Enter Phone Number or email' />
                <button className='bg-black w-80 px-4 py-3 rounded-lg text-white mt-1'>Continue</button>
                <div className='flex gap-2 justify-between items-center mt-1'>
                    <hr className='h-[3px] w-36 bg-gray-400 bg-opacity-75' />
                    <span className='text-gray-400 text-sm'>or</span>
                    <hr className='h-[3px] w-36 bg-gray-400 bg-opacity-75' />
                </div>
                <div className='flex justify-between items-center'>
                    <img className='absolute h-6 w-6 ml-12' src={images.googleLogo} alt="" />
                    <button className=' bg-zinc-200 w-80 px-4 py-3 rounded-lg' onClick={handleGoogleLogin}>Continue With Google</button>
                </div>
                <div className='flex justify-between items-center'>
                    <img className='absolute h-5 w-5 ml-14' src={images.appleLogo} alt="" />
                    <button className=' bg-zinc-200 w-80 px-4 py-3 rounded-lg'>Continue With Apple</button>
                </div>
                <div className='flex gap-2 justify-between items-center mt-1'>
                    <hr className='h-[3px] w-36 bg-gray-400 bg-opacity-75' />
                    <span className='text-gray-400 text-sm'>or</span>
                    <hr className='h-[3px] w-36 bg-gray-400 bg-opacity-75' />
                </div>
                <div className='flex justify-between items-center'>
                    <IoSearchSharp className='absolute h-6 w-6 ml-[70px]'/>
                    <button className='bg-zinc-100 hover:bg-zinc-200 w-80 px-4 py-3 rounded-lg'>Find My Account</button>
                </div>
                <div className='flex justify-between items-center'>
                    <IoQrCode className='absolute h-3 w-3 ml-[70px]'/>
                    <button className='bg-zinc-200 hover:bg-zinc-100 w-80 px-4 py-3 rounded-lg'>Log in with QR code</button>
                </div>
                <p className='text-xs max-w-72 leading-5 font-PlexSans text-gray-500 mt-6'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
            </div>
        </div>
    </>
  )
}

export default Signin