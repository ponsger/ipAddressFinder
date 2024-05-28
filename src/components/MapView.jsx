import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';
const MapView = ({ lat, lon }) => {
    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/2822/2822107.png",
        iconSize: [38, 38]
    })

    // Return a div element to hold the map
    return (
        <div>
            {(lat || lon) ?
                <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={{ lat, lon }} icon={customIcon}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer> : "Loading..."}

        </div>

    );
}

export default MapView;