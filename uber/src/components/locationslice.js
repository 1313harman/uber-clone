import { createSlice } from '@reduxjs/toolkit';

const isValidLatLng = (location) =>
  location && typeof location.lat === 'number' && typeof location.lng === 'number';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    pickupLocation: {
      address:'',
      coordinates:{lat:null,lng:null}
    },
    dropoffLocation: {
      address:'',
      coordinates:{lat:null,lng:null}
    },
  },
  reducers: {
    setPickupLocation: (state, action) => {
      const { pickUp, Picklatlng } = action.payload;
      if (pickUp && isValidLatLng(Picklatlng)) {
        state.pickupLocation = {
          address: pickUp,
          coordinates: Picklatlng,
        };
      } else {
        console.warn('Invalid pickup location coordinates:', action.payload);
      }
    },
    setDropoffLocation: (state, action) => {
      const { dropoff, Droplatlng } = action.payload;
      if (dropoff&&isValidLatLng(Droplatlng)) {
        state.dropoffLocation = {
          address: dropoff,
          coordinates: Droplatlng,
        };
      } else {
        console.warn('Invalid dropoff location coordinates:', action.payload);
      }
    },
  },
});

export const { setPickupLocation, setDropoffLocation } = locationSlice.actions;
export default locationSlice.reducer;
