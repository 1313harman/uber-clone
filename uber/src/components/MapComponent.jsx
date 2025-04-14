import React from 'react'
import { GoogleMap, MarkerF, InfoWindowF, DirectionsRenderer, useJsApiLoader} from '@react-google-maps/api';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
const defaultCenter = {lat: 22.47565614249384, lng: 80.33677372438169}

const libraries = ['places'];

const containerStyle = {
  width: '99%',
  height: '590px',
  position: 'absolute',
};

const colors = '#000000'

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function MapComponent() {
  const {pickupLocation,dropoffLocation} = useSelector((state)=>state.location)
  const [loading,setLoading] = useState(true)
  const [directions,setDirection] = useState(null)
  const [activeMarker,setActiveMarker] = useState(null)
  const mapRef = useRef(null);
  console.log(pickupLocation.address,'',pickupLocation.coordinates.lat,'',pickupLocation.coordinates.lng,'',dropoffLocation)

  useEffect(() => {
    if(mapRef.current){
    const newCenter = 
    pickupLocation ? {lat:pickupLocation.coordinates.lat, lng:pickupLocation.coordinates.lng} : 
    dropoffLocation ? { lat: dropoffLocation.coordinates.lat, lng: dropoffLocation.coordinates.lng} 
    : defaultCenter
    

    mapRef.current.panTo(newCenter)
    }
  }, [pickupLocation,dropoffLocation])
  
  useEffect(() => {
    if((pickupLocation?.coordinates?.lat && pickupLocation?.coordinates?.lng) && 
    (dropoffLocation?.coordinates?.lat && dropoffLocation?.coordinates?.lng))
    {
      const PickLat = pickupLocation.coordinates.lat 
      const PickLng = pickupLocation.coordinates.lng
      const DropLat = dropoffLocation.coordinates.lat 
      const DropLng = dropoffLocation.coordinates.lng
      const directionService = new google.maps.DirectionsService()
      directionService.route(
        {
            origin: new google.maps.LatLng(PickLat,PickLng),
            destination: new google.maps.LatLng(DropLat,DropLng),
            travelMode: 'DRIVING'
        },
        (result,status)=>{
          const OK = google.maps.DirectionsStatus.OK
          if(status === OK){
            setDirection(result)
            console.log(result)
          }
          else{
            toast.error(`Error while fetching routes ${result},${status}`)
          }
        }
      )
    }
  }, [pickupLocation,dropoffLocation])
  

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
  if(isLoaded){
    setLoading(false)
  }
  }, [isLoaded])
  

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleClick = (marker) =>{
    if(activeMarker === marker){
      setActiveMarker(null)
    }
    else{
      setActiveMarker(marker)
    }
  }
  // console.log(pickupLocation)
  // console.log(dropoffLocation)
  return isLoaded ? (
      <div className='absolute z-50 text-black ml-[820px] mt-[575px]' style={containerStyle}>
        <GoogleMap
            mapContainerStyle={{ width: '70%', height: '100%' }}
            center={defaultCenter}
            zoom={5}
            options={{ fullscreenControl: true }}         
            onLoad={(map)=>(mapRef.current = map)}   
        >

        {pickupLocation && !directions &&
          <>
            <MarkerF position={{lat:pickupLocation.coordinates.lat,lng:pickupLocation.coordinates.lng}} onClick={()=>handleClick('pickup')}>
              {activeMarker === 'pickup' && (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div>
                    <h1 className='text-black'>{pickupLocation.address}</h1>
                  </div>
                </InfoWindowF>
              )}

            </MarkerF>

          </>
        }

        {dropoffLocation && !directions &&
          <MarkerF position={{lat:dropoffLocation.coordinates.lat,lng:dropoffLocation.coordinates.lng}} onClick={()=>handleClick('dropoff')}>
              {activeMarker === 'dropoff' && (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div className='bg-white h-auto w-auto'>
                    <h1 className='text-black'>{dropoffLocation.address}</h1>
                  </div>
                </InfoWindowF>
              )}
          </MarkerF>
        }
        {directions && 
          <div className='absolute z-50'>
            <DirectionsRenderer 
            directions={directions}
            options={
              {
                polylineOptions:{
                  strokeColor:'#000000',
                  strokeWeight:4
                }
              }
            } 
            />
          </div>
 
        }
        </GoogleMap>
      </div>

  ):(
    <>
      <div>
        <ClipLoader 
          color={colors}
          loading={loading}
          cssOverride={override}
          size={150}
        />
      </div>
    </>
  )
}

export default MapComponent