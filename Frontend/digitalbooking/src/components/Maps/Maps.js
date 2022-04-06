import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export const Maps = (props) => {
  const { lat, long, city, name, width, height, margin } = props;
  const [defaultCenter, setCenter] = useState({
    lat: 58.5558,
    lng: 60.5487,
  });
  const [visible, setVisible] = useState(false); 
 

  useEffect(() => {
    setCenter({ lat: parseFloat(lat), lng: parseFloat(long) });
  }, [lat, long]);

  const mapStyles = {
    height: height,
    width: width ,
    position: "relative",
    margin: margin,
  };

  const handleClick = (e) =>{
    setVisible(true);
  }
   
  return (
    <LoadScript googleMapsApiKey="AIzaSyCCK3XtE2nkcDKC5P8jaUV6Q-A8-nfXjFI">
      <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter} onClick={() => setVisible(false)}>
        <Marker
          key="marker_1"
          position={{
            lat: parseFloat(lat),

            lng: parseFloat(long),
          }}
          onClick= {handleClick}
        />
           {visible && <InfoWindow position={{
            lat: parseFloat(lat + 1),

            lng: parseFloat(long + 1),
          }}   onCloseClick={() => setVisible(false)}
          options={{
            pixelOffset: new window.google.maps.Size(
              0, -30
            )
          }}>
            <div>
              <h4>{name}</h4>
              <p>{city}</p>
            </div>
        </InfoWindow>}

      </GoogleMap>
    </LoadScript>
  );
};
