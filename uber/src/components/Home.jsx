import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import images from './Images'
import { FaAngleDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import AOS from 'aos'
import 'aos/dist/aos.css';
import {useMediaQuery} from 'react-responsive'


function Home() {

  
  useEffect(() => {
    AOS.init({ duration: 1500 });
}, []);
  const [showMore,setShowMore] = useState({})
  const [MouseHover,setMouseHover] = useState(false)
  const isMobile = useMediaQuery({maxWidth:599})
  const isDesktop = useMediaQuery({minWidth:599})
  const FQs=[
    {
      id:1,
      question:'Can I have a lost item delivered to me?',
      answer:'The Uber app helps provide a delivery solution that can save you a trip across town, whether it’s for a last-minute birthday gift or your forgotten keys. Just choose Package in the Uber app.'
    },
    {
      id:2,
      question:'Can I rent a car using Uber?',
      answer:'Yes. Find out more about how car rentals work.',
    },
    {
      id:3,
      question:'Can I request a ride that picks up friends in different locations?',
      answer:'Yes. Set up a group ride in the Uber app, invite your friends, and arrive at your destination together.'
    },
    {
      id:4,
      question:'Can I request a taxi on Uber?',
      answer:'Uber makes it easy to get a taxi nearby in the cities where Uber Taxi is available. There’s no need to find a cab stand, hail a cab on the street, or even call the local cab company. Instead, you can use the Uber app or website to request a taxi in just a few taps or clicks.'
    },
    {
      id:5,
      question:'Is there an Uber ride option for 5 people?',
      answer:'Request UberXL for a van or SUV that fits up to 6 people at an affordable price. It’s perfect for a family trip or a ride to the airport.'
    },
  ]

  const handleMouseHoverIn = () =>{
    setMouseHover(true)
    console.log(MouseHover)
  }

  const handleMouseHoverOut = () =>{
    setMouseHover(false)
    
  }
  const handleShowMore = (id) =>{
    setShowMore(prevShowMore =>({
      ...prevShowMore,
      [id]:!prevShowMore[id]
    }))
    console.log('clicked',showMore)
  }
  return (
    <>
      {/* Ride */}
      <div className='flex justify-center items-center gap-[820px] py-4 z-40'>
          <span className='text-2xl font-PlexSans font-bold'>Ride</span>
          <div className='flex gap-6'>
            <Link><span className='text-gray-600 font-PlexSans text-sm hover:text-black'>Request a ride</span></Link>
            <Link><span className='text-gray-600 font-PlexSans text-sm hover:text-black'>Reserve a ride</span></Link>
            <Link><span className='text-gray-600 font-PlexSans text-sm hover:text-black'>See prices</span></Link>
            <Link><span className='text-gray-600 font-PlexSans text-sm hover:text-black'>Explore ride options</span></Link>
          </div>
      </div>


      {/* Request a ride for now or later */}
      <div className='flex justify-center items-center py-20 gap-36'>
        <div className='flex flex-col gap-10'>
          <h1 className='text-6xl font-PlexSans font-semibold max-w-lg leading-tight'>Request a ride for now or later</h1>
          <span className='font-PlexSans'>Add your trip details, hop in, and go.</span>
          <div className='flex flex-col gap-3 -mt-6'>
            <img className='absolute h-16 w-2  ml-2 mt-4 mr-2' src={images.line} alt="" />
            <div className='flex justify-between items-center'>            
              <input className=' bg-zinc-100 w-96 px-8 py-2 rounded-lg ' type="text " placeholder='Enter Location' />
              <img className='absolute h-6 w-6 ml-[350px]' src={images.nearme} role='button' alt="" />
            </div>
            <input className=' bg-zinc-100 w-96 px-8 py-2 rounded-lg' type="text" placeholder='Enter Destination'/>
          </div>
          <div className='flex gap-6'>
            <div className='bg-black px-6 py-3 rounded-lg hover:opacity-75 transition-opacity duration-300' role='button'>
              <Link><span className='text-white font-bold '>See prices</span></Link>
            </div>
            <div className='bg-zinc-100 px-6 py-3 rounded-lg cursor-pointer hover:bg-zinc-300 transition-colors duration-300'>
              <Link><span className='text-black font-semibold font-PlexSans'>Schedule for later</span></Link>
            </div>
          </div>
        </div>
        <img className='h-[550px] w-[550px]' src={images.images1} alt="" />
      </div>

      
      {/* Sugestions */}
      <div className='flex flex-col py-16 px-[190px] gap-4'>
        <h1 className='text-4xl font-PlexSans font-semibold'>Suggestions</h1>
        <div className='flex justify-center items-center gap-5'>
          {/* first card */}
          <div className='flex justify-center items-center bg-zinc-100 px-4 py-5 rounded-lg gap-7'>
              <div className='flex flex-col gap-1'>
                  <p className='font-semibold font-PlexSans'>Ride</p>
                  <p className='max-w-[250px] text-black text-xs'>Go anywhere with Uber. Request a ride, hop in, and go.</p>
                  <div className='inline-flex max-w-max bg-white rounded-full px-3 py-2 cursor-pointer   justify-center items-center hover:bg-zinc-300 transition-colors duration-500'>
                    <Link><span className='font-semibold font-PlexSans text-sm '>Details</span></Link>
                  </div>
              </div>
              <img className='h-32 w-32' src={images.carImg} alt="" />
          </div>
          {/* Second Card */}
          <div className='flex justify-center items-center bg-zinc-100 px-4 py-5 rounded-lg gap-4'>
              <div className='flex flex-col gap-1'>
                  <p className='font-semibold font-PlexSans'>Package</p>
                  <p className='max-w-[250px] text-black text-xs'>Uber Connect makes same-day delivery easier than ever.</p>
                  <div className='inline-flex max-w-max bg-white rounded-full px-3 py-2 cursor-pointer   justify-center items-center hover:bg-zinc-300 transition-colors duration-500'>
                    <Link><span className='font-semibold font-PlexSans text-sm '>Details</span></Link>
                  </div>
              </div>
              <img className='h-32 w-32 ' src={images.boxImg} alt="" />
          </div>
          {/* Third Card */}
          <div className='flex justify-center items-center bg-zinc-100 px-4 py-5 rounded-lg gap-4'>
              <div className='flex flex-col gap-1'>
                  <p className='font-semibold font-PlexSans'>Reserve</p>
                  <p className='max-w-[260px] text-black text-xs'>Reserve your ride in advance so you can relax on the day of your trip.</p>
                  <div className='inline-flex max-w-max bg-white rounded-full px-3 py-2 cursor-pointer   justify-center items-center hover:bg-zinc-300 transition-colors duration-500'>
                    <Link><span className='font-semibold font-PlexSans text-sm '>Details</span></Link>
                  </div>
              </div>
              <img className='h-32 w-32 ' src={images.calImg} alt="" />
          </div>
        </div>
      </div>

      {/* Ride with friends seamlessly */}
      <div className='flex justify-center item-center gap-32 py-24'>
        <img src={images.images6} alt="" />
        <div className='flex flex-col text-left gap-7'>
          <h1 className='text-4xl font-PlexSans font-extrabold max-w-md'>Ride with friends seamlessly</h1>
          <p className='font-PlexSans max-w-md'>Riding with friends just got easier: set up a group ride in the Uber app, invite your friends, and arrive at your destination. Friends who ride together save together.</p>
          <Link to='' ><button className='border-b-2 '><span className='font-PlexSans text-black'>Learn More</span></button></Link>
        </div>
      </div>

      {/* Use the Uber app to help you travel your way */}
      <div className='flex flex-col py-6 px-[190px] '>
        <h1 className='text-4xl font-PlexSans font-semibold'>Use the Uber app to help you travel your way</h1>
        <div className='flex justify-center items-center gap-10'>
          {/* 1st Card */}
          <div className='flex flex-col py-11 gap-4'>
            <img className='h-[370px] w-[450px]' src={images.images2} alt="" />
            <h3 className='text-xl  text-black font-semibold'>Ride Options</h3>
            <p className='max-w-sm text-left text-lg text-gray-600 text-wrap leading-6 -mt-1'>There’s more than one way to move with Uber, no matter where you are or where you’re headed next.</p>
            <div className='bg-black px-7 py-4 rounded-lg leading-none w-52 mt-4 hover:bg-gray-800 cursor-pointer'>
              <Link><span className='text-white font-bold'>Search Ride Options</span></Link>
            </div>
          </div>
          {/* 2nd Card */}
          <div className='flex flex-col py-11 gap-4'>
            <img className='h-[370px] w-[450px]' src={images.images3} alt="" />
            <h3 className='text-xl  text-black font-semibold'>700+ airports</h3>
            <p className='max-w-sm text-left text-lg text-gray-600 text-wrap leading-6 -mt-1'>You can request a ride to and from most major airports. Schedule a ride to the airport for one less thing to worry about.</p>
            <div className='bg-black px-7 py-4 rounded-lg leading-none w-[170px] mt-4 hover:bg-gray-800 cursor-pointer'>
              <Link><span className='text-white font-bold '>Search airports</span></Link>
            </div>
          </div>
          {/* 3rd Card */}
          <div className='flex flex-col py-11 gap-4'>
            <img className='h-[370px] w-[450px]' src={images.images4} alt="" />
            <h3 className='text-xl  text-black font-semibold'>10,000+ cities</h3>
            <p className='max-w-sm text-left text-lg text-gray-600 text-wrap leading-6 -mt-1'>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
            <div className='bg-black px-7 py-4 rounded-lg leading-none w-[150px] mt-4 hover:bg-gray-800 cursor-pointer'>
              <Link><span className='text-white font-bold'>Search cities</span></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Looking for business solutions? */}
      <div className='flex  bg-black h-[500px] w-auto justify-center items-center'>
          <div className='flex justify-center items-center gap-44'>
            <div className='flex flex-col text-left gap-6 '>
              <h1 className='text-white text-4xl font-PlexSans font-semibold max-w-sm'>Looking for business solutions?</h1>
              <span className='text-white max-w-sm'>Get information about how companies leverage <Link className='underline underline-offset-auto'>Uber for Business</Link>: </span>
              <ul style={{listStyle:'inside', whiteSpace:'break-spaces'}} className='px-6 -mt-6'>
                <Link><li className='text-white underline'>Business travel</li></Link>
                <Link><li className='text-white underline'>Courtesy rides</li></Link>
                <Link><li className='text-white underline'>Meal programs</li></Link>
                <Link><li className='text-white underline'>Item delivery</li></Link>
              </ul>
              <div className='flex gap-6'>
                <div className='bg-white px-6 py-5  rounded-lg leading-none w-[129px] hover:bg-gray-300 cursor-pointer'>
                  <Link><span className='text-black '>Get Started</span></Link>
                </div>
                <div className='flex justify-center items-end'>
                  <Link to='' ><button className='border-b-2 mt-7'><span className='font-PlexSans text-white'>Check out our solutions</span></button></Link>
                </div>
              </div>
            </div>
            <img src={images.images5} alt="" />
          </div>
      </div>
      {/* Frequently asked questions */}
      <div className='flex flex-col py-16 px-[190px] gap-12'>
        <h1 className='text-4xl font-PlexSans font-semibold opacity-80'>Frequently asked questions</h1>
        <ul className='flex flex-col px-5 gap-7 text-lg'>
          {FQs.map((fqs,index)=>(
              <li key={index} className='flex justify-between items-start border-b-2 pb-2 cursor-pointer' role='button' onClick={()=>handleShowMore(fqs.id)}>
                <div  className={`${showMore[fqs.id]? 'flex flex-col gap-7 transition-transform duration-500 ease-in-out' : ''}`}>
                  <span className='text-lg'>{fqs.question}</span>
                  {showMore[fqs.id]&&(
                    <>
                          <div className='flex flex-col gap-7 transition-transform duration-100'>
                            <span className='text-gray-600 font-PlexSans text-lg'>{fqs.answer}</span>
                            <Link to='' ><button className='border-b-2 hover:border-black hover:transition-colors hover:duration-500'><span className='font-PlexSans text-gray-600 text-lg'>Get Details</span></button></Link>
                          </div>
                    </>
                  )}
                </div>
                {showMore[fqs.id]? <FaAngleUp className="absolute ml-[1085px]"/> : <FaAngleDown className={`absolute ml-[1085px] ${showMore[fqs.id] ? 'rotate-180' : 'rotate-0'}`}/> }
              </li>
          ))}
        </ul>
      </div>

      {/* Do more in the app */}
      <div className='flex flex-col  bg-pink-50 h-[350px] w-auto py-14 px-[190px] gap-5'>
          <h1 className='text-4xl font-PlexSans font-semibold'>Do more in the app</h1>
          <div className='flex bg-white text-left w-[590px] gap-12 px-8 py-6' role='button' onMouseOver={handleMouseHoverIn} onMouseOut={handleMouseHoverOut}>
              <img className='h-36 w-36' src={images.qrUber} role='button' alt="" />
              <div className='flex flex-col justify-center -ml-5' role='button'>
                <h1 className='text-2xl font-bold'>Downlod the Uber app</h1>
                <p>Scan to downlod</p>
              </div>
              <div className={`flex flex-col justify-center items-center ${MouseHover? 'ml-3 transition-all duration-200' : 'transition-all duration-200'} `} role='button'>
                <FaArrowRight className='h-6 w-6'/>
              </div>
          </div>
      </div>
      {/* Sign up to ride */}
      <div className='py-16 px-[190px] '>
        <div className='flex justify-between items-center'>
          <button className='border-b-2 border-b-black w-[550px] text-left py-9 border-opacity-60 hover:opacity-65'><h1 className='text-4xl font-PlexSans font-semibold hover:opacity-65'>Sign up to ride</h1></button>
          <FaArrowRight className='absolute ml-[520px] h-8 w-8'/>
        </div>
      </div>

      <p className='py-16 px-[190px]  text-gray-600'>Certain requirements and features vary by country, region, and city.</p>
    </>
  )
}

export default Home