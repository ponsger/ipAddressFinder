import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import MapView from './components/MapView';

function App() {

  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(0.0);
  const [lon, setLon] = useState(0.0);

  const fetchApi = async () => {
    const requestDataFromUser = await axios.get("https://ipapi.co/json/");
    const requestData = requestDataFromUser.data;
    setIpDetails(requestData);
    setLat(requestData.latitude);
    setLon(requestData.longitude);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>Ip Address Finder</h1>
      <main className="App">
        <div>
          <h3>What is my IP Address?</h3>
          <h1 id='ip'>{ipDetails.ip}</h1>
          <h4>Approximate location: </h4>
          <p>
            {ipDetails.city} , {ipDetails.region} , {ipDetails.country_name}.
          </p>

          <h4>Internet Service Provider (ISP):</h4>
          <p>{ipDetails.org}</p>
        </div>
        <div style={{width:'100%'}}>
          <MapView lat={lat} lon={lon} api={fetchApi}/>
        </div>
      </main>
    </>

  );
}

export default App;
