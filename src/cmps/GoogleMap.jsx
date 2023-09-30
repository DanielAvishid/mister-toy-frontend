import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

export function GoogleMap() {
    const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })
    const [zoom, setZoom] = useState(9.2)

    const telAvivStore = { lat: 32.0853, lng: 34.7818 }
    const haderaStore = { lat: 32.43634, lng: 34.92179 }
    const batYamStore = { lat: 32.01147, lng: 34.74884 }

    function handleClick(location, zoom = 15) {
        setZoom(zoom)
        setCoordinates(location)
    }

    return (
        <section>
            <div style={{ height: '400px', width: '45vw' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAmZRZ5mTMW_T3C80vuxvULrNhuUftEzoc" }}
                    center={coordinates}
                    zoom={zoom}
                >
                    <AnyReactComponent
                        {...telAvivStore}
                        text="🏪"
                    />
                    <AnyReactComponent
                        {...haderaStore}
                        text="🏪"
                    />
                    <AnyReactComponent
                        {...batYamStore}
                        text="🏪"
                    />
                </GoogleMapReact>
            </div>
            <div className="map-btns-container">
                <button className="map-btn" onClick={() => handleClick(telAvivStore)}>Tel-Aviv store</button>
                <button className="map-btn" onClick={() => handleClick(haderaStore)}>Hadera store</button>
                <button className="map-btn" onClick={() => handleClick(batYamStore)}>Bat-Yam store</button>
            </div>
        </section>
    );
}