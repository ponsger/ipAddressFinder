import React from 'react';
import { api_key } from '../key/key';

import {HPlatform, HMap, HMapCircle } from "react-here-map";

const Map = () => {
    const apikey = api_key;
    // Return a div element to hold the map
    return (
        <HPlatform
            options={{
                apiKey: apikey,
                includePlaces: false,
                includeUI: true,
                interactive: true,
                version: 'v3/3.1'
            }}
        >
            <HMap
                options={{
                    center: {
                        lat: 52.5309825,
                        lng: 13.3845921
                    }
                }}
                style={{
                    height: '480px',
                    width: '100%'
                }}
                useEvents
            >
                <HMapCircle
                    coords={{
                        lat: 52.5309825,
                        lng: 13.3845921
                    }}
                    events={{
                        pointerdown: function noRefCheck() { },
                        pointerenter: function noRefCheck() { },
                        pointerleave: function noRefCheck() { },
                        pointermove: function noRefCheck() { }
                    }}
                    options={{
                        style: {
                            fillColor: 'rgba(0, 128, 0, 0.7)',
                            lineWidth: 4,
                            strokeColor: 'rgba(55, 85, 170, 0.6)'
                        }
                    }}
                    radius={10000}
                    setVisibility
                    zoom={8}
                />
            </HMap>
        </HPlatform>
        );
}

export default Map;