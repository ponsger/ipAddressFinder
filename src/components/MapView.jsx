import React, { useEffect } from 'react';
import { api_key, apiId } from '../key/key';

import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { FaMapMarker } from "react-icons/fa";
import { Icon } from 'leaflet';
const MapView = ({ lat, lon,api }) => {
    const apikey = api_key;
    const position=[lat,lon]
    const customIcon=new Icon({
        iconUrl:"https://cdn-icons-png.flaticon.com/512/2822/2822107.png",
        iconSize:[38,38]
    })

    useEffect( ()=>{
        if(lat === 0.0 && lon===0.0){
            api();
        }
    },[lat,lon] )

    // Return a div element to hold the map
    return (
        <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>

    );
}

export default MapView;