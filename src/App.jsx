import {APIProvider, Map,Marker} from '@vis.gl/react-google-maps';
import './App.css'
import { useState,useEffect,useRef } from 'react';
import {useMapsLibrary} from '@vis.gl/react-google-maps';
import Autocomplete from "react-google-autocomplete";
import axios from 'axios';
function App() {
  // const map = useMap();
  const [coordinates, setCoordinates] = useState([])
  const [sourcePlace, setSourcePlace] = useState(null)
  const [destinationPlace, setDestinationPlace] = useState(null)
  const routesLibrary = useMapsLibrary('routes');
 

  useEffect(() => {
   axios.get('http://localhost:8000/get-coordinates').then((coo)=> setCoordinates(coo.data));

  }, [coordinates])
  
  
  



  return (
    <>
     <Autocomplete    
  apiKey={'AIzaSyAsc1va7mcCU4V8d1iV-1EFpjDRaEslV2s'}
  onPlaceSelected={(sourcePlace) => {
    setSourcePlace(sourcePlace)
  }}
/>
<Autocomplete
  apiKey={'AIzaSyAsc1va7mcCU4V8d1iV-1EFpjDRaEslV2s'}
  onPlaceSelected={(destinationPlace) => {
    setDestinationPlace(destinationPlace)
  }}
/>
    <APIProvider apiKey={'AIzaSyAsc1va7mcCU4V8d1iV-1EFpjDRaEslV2s'}>
    <Map
      style={{width: '50vw', height: '50vh'}}
      center={{lat: 53.54992, lng: 10.00678}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
      {
        coordinates.map((ele,index) => 
        <Marker key={index} position={{lat: ele.coordinates.latitude, lng: ele.coordinates.longitude}} />)
      }
    
      
      {/* <Marker position={{lat: 53.54992, lng: 10.00678}} /> */}
      </Map>
  </APIProvider>
 
  </>
  )
}

export default App
