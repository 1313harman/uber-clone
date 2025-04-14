import React, { useEffect, useState } from 'react'
import images from './Images'
import { IoTime } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import {setPickupLocation,setDropoffLocation} from './locationslice'
import debounce from 'lodash.debounce';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HeaderLeft() {
  const [pickUp,setPickUp] = useState('')
  const [dropoff,setDropOff] = useState('')
  const [Picklatlng,setPickLatLng] = useState({})
  const [Droplatlng,setDropLatLng] = useState({})
  const [locationData,setlocationData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [search,setSearch] = useState(false)
  const[searResult,setSearchResult] = useState('')
  const dispatch = useDispatch()

  const handlePickupLocation = (e) =>{
    const locationName = e.target.value
    setPickUp(locationName)
    setSearchTerm(locationName)
    setSearch(true)
    setSearchResult('pickup')
  }  

  const handleSetPickupLocation = (result) =>{
    console.log(result)
    const formatted_address = result?.formatted_address
    const geometryLocation = result?.geometry?.location
    setPickUp(formatted_address)
    setPickLatLng(geometryLocation)
    console.log(pickUp)
    console.log(Picklatlng)
    setTimeout(() => {
      dispatch(setPickupLocation({ pickUp: formatted_address, Picklatlng: geometryLocation }));
    }, 2);
    // setLatLng(result.)
    setSearch(false)
  }

  const handleDropoffLocation =(e) =>{
    const locationName = e.target.value;
    setDropOff(locationName)
    setSearchTerm(locationName)
    setSearch(true)
    setSearchResult('dropoff')
  }

  const handleSetDropoffLocation = (result) =>{
    console.log(result)
    const formatted_address = result?.formatted_address
    const geometryLocation = result?.geometry?.location
    setDropOff(formatted_address)
    setDropLatLng(geometryLocation)
    console.log(pickUp)
    console.log(Picklatlng)
    setTimeout(() => {
      dispatch(setDropoffLocation({ dropoff: formatted_address, Droplatlng: geometryLocation }));
    }, 2);
    // setLatLng(result.)
    setSearch(false)
  }
  const fetchData = debounce(() =>{
    if (!searchTerm) return;
    fetch(`https://maps.gomaps.pro/maps/api/place/textsearch/json?location=<string>&query=<string>&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`)
    .then((res)=>res.json())
    .then((result) => {
      const filteredResults = result.results.filter(location =>
        location.formatted_address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setlocationData(filteredResults);
    })
  },100)
  
  useEffect(() => {
    if (search && searchTerm) {
      fetchData();
      console.log(locationData)
    }
  
    return () => {
      fetchData.cancel()
    }
  }, [search,searchTerm])
  
  
  return (
    <>
      <div className='flex justify-center items-start bg-white h-auto inset-0 fixed w-auto mt-16'>
        <div className='flex flex-col  text-left bg-white h-[370px] w-[329px] -ml-[1100px] mt-8 rounded-2xl py-4 px-4 gap-3 border'>
          <h1 className='text-black text-xl font-semibold font-PlexSans'>Get a ride</h1>
          {/* Location input start */}


          <input value={pickUp} className=' bg-zinc-100 w-72 px-4 py-3 rounded-lg' type="text" placeholder='Pickup Location' onChange={handlePickupLocation}/>
          {search && searResult === 'pickup' && locationData.length > 0 && (
            <div className='absolute z-50 flex flex-col bg-white border border-gray-200 h-[400px] w-[290px] mt-24 rounded-md shadow-lg overflow-scroll'>
              {locationData.slice(0,6).map((location, index) => (
                // input send as a new location
                <div key={index} className='flex px-4 py-2 hover:bg-gray-100' role='button' onClick={()=>handleSetPickupLocation(location)}>
                  <p className='text-black text-wrap max-w-md' >{location.formatted_address}</p>
                </div>
              ))}
            </div>
          )}


          <input value={dropoff} className=' bg-zinc-100 w-72 px-4 py-3 rounded-lg' type="text" placeholder='Droppoff location' onChange={handleDropoffLocation} />
          {search && searResult === 'dropoff' && locationData.length > 0 && (
            <div className='absolute z-50 flex flex-col bg-white border border-gray-200 h-[400px] w-[290px] mt-[150px] rounded-md shadow-lg overflow-scroll'>
              {locationData.map((location, index) => (
                <div key={index} className='flex px-4 py-2 hover:bg-gray-100' role='button' onClick={()=>handleSetDropoffLocation(location)}>
                  <p  className='text-black'>{location.formatted_address}</p>
                </div>
              ))}
            </div>
          )}
          {/* Location input end */}
          <div className='flex justify-between items-center'>
            <IoTime className='absolute h-5 w-5 ml-1'/>
            <button className=' bg-zinc-100 w-80 px-8 py-3 rounded-lg text-left'>Pickup Now</button>
            <FaAngleDown className='absolute h-5 w-5 ml-64 mt-1'/>
          </div>
          <div className='flex justify-between items-center'>
            <FaUser className='absolute h-4 w-4 ml-1'/>
            <button className=' bg-zinc-100 w-32 px-8 py-3 rounded-lg text-left'>For me</button>
            <FaAngleDown className='absolute h-5 w-5 ml-24 mt-1'/>
          </div>
          <button type='submit' className=' bg-black w-72 px-8 py-3 rounded-lg text-white' >Search</button>
        </div>
      </div>
      <ToastContainer className="
      mt-[550px]" />
    </>
  )
}

export default HeaderLeft