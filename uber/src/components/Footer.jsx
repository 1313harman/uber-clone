import React from 'react'
import images from './Images'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <div className='flex inset-0 bg-black h-[800px] w-auto'>
      <div className='flex flex-col gap-16 mt-24 ml-48'>
          <div className='flex flex-col  text-left gap-7'>
            <Link><h1 className='text-white text-2xl mr-2 font-PlexSans'>Uber</h1></Link>
            <Link><h1 className='text-white text-md mr-2 font-PlexSans'>Visit Help Center</h1></Link>
          </div>

          <div className='flex gap-52'>
            <div className='flex flex-col text-left gap-3'>
                <h1 className='text-xl text-white font-PlexSans'>Company</h1>
                  <Link><h1 className='text-white text-sm font-PlexSans'>About Us</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans'>Our offerings</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans' >Newsroom</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans'>Investors</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans'>Blogs</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans' >Careers</h1></Link>
            </div>
            <div className='flex flex-col text-left gap-3'>
                <h1 className='text-xl text-white font-PlexSans'>Products</h1>
                <Link><h1 className='text-white text-sm font-PlexSans'>Ride</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans'>Drive</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans' >Deliver</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans'>Eat</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans'>Uber for Buisness</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans' >Uber Freight</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans' >Gift Cards</h1></Link>
            </div>
            <div className='flex flex-col text-left gap-3'>
                <h1 className='text-xl text-white font-PlexSans'>Global citizenship</h1>
                  <Link><h1 className='text-white text-sm font-PlexSans'>Safety</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans' >Diversity and Inclusion</h1></Link>
                  <Link><h1 className='text-white text-sm font-PlexSans'>Sustainability</h1></Link>
            </div>
            <div className='flex flex-col text-left gap-3 -ml-8'>
                <h1 className='text-xl text-white font-PlexSans'>Travel</h1>
                <Link><h1 className='text-white text-sm font-PlexSans' >Reserve</h1></Link>
                <Link><h1 className='text-white text-sm font-PlexSans'>Cities</h1></Link>
            </div>
          </div>

          <div className='flex gap-[450px]'>
              <div className='flex gap-24'>
                  <a href='#'><img className='h-4 w-4' src={images.facebook} alt="" /></a>
                  <a href='#'><img className='h-4 w-4' src={images.twitter} alt="" /></a>
                  <a href='#'><img className='h-4 w-4' src={images.youtube} alt="" /></a>
                  <a href='#'><img className='h-4 w-4' src={images.linkedin} alt="" /></a>
                  <a href='#'><img className='h-4 w-4' src={images.insta} alt="" /></a>
              </div>

              <div className='flex gap-5'>
                <button><img className='h-4 w-4' src={images.LanguageIcon} alt="" /></button><button><span className='text-white -ml-2 font-semibold font-PlexSans'>English</span></button>
                <button><img className='h-5 w-5' src={images.location} alt="" /></button><button><span className='text-white -ml-2 font-semibold font-PlexSans'>Chandhigarh</span></button>
              </div>
          </div>
          <div className='flex gap-2'>
            <a href="https://play.google.com/store/games?hl=en_IN"><img className='h-12 w-36'  src={images.googlepay} alt="" /></a>
            <a href="https://www.apple.com/in/app-store/"><img className='h-12 w-36'  src={images.microsoft} alt="" /></a>
          </div>
          <div className='flex gap-[786px] -mt-4'>
            <div>
              <span className='text-gray-300 text-xs'>© 2024 Uber Technologies Inc.</span>
            </div>
            <div className='flex gap-7'>
              <Link><h1 className='text-gray-300 text-xs font-PlexSans' >Privacy</h1></Link>
              <Link><h1 className='text-gray-300 text-xs font-PlexSans'>Accessibility</h1></Link>
              <Link><h1 className='text-gray-300 text-xs font-PlexSans'>Terms</h1></Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer