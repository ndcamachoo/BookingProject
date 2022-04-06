import React, { useContext } from "react";
import { LocationContext } from "../SearchBar/LocationContext";
import styles from "./PlacePicker.module.css";
import useFetch from "use-http";
import { PlaceElement } from "../PlaceElement/PlaceElement";
import { useState } from "react";

export const Placepicker = () => {
  const { setPlace } = useContext(LocationContext);
  const [setOpen] = useState(false);
  const options = {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState([]);
  const url =
    "https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/products/locations";
  const { data = [] } = useFetch(url, options, []);
  const { input, containerLocations, locaciones, container } = styles;
  let matches = [];

  const onSuggestHandler = (text) => {
    setSearch(text);
    setPlace(text);
    setLocations([]);
  };

  const onChangeHandler = (text) => {
    setSearch(text);
    if ((text === "")) {
      setLocations([]);
    } else {
      matches = data.sort().filter((city) => {
        let cityName = city.split(',')[0];
        const regex = new RegExp(`${text}`, "gi");
        return cityName.match(regex);
      });

      if(matches.length === 0){
        matches[0]=`Sin Coincidencias, No se encontraron resulados con ${text}`
      } 
      setLocations(matches);
    }
  };

  return (
    <div className={container}>
      <input
        className={input}
        type="text"
        placeholder="¿A dónde vamos?"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={search}
        onBlur={() => {
          setTimeout(() => {
            setLocations([]);
          }, 200);
        }}
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <div className={containerLocations}>
        <ul className={locaciones}>
          {locations &&
            locations.slice(0, 4).map((city, index) => (
              <div onClick={() => onSuggestHandler(city)}>
                <PlaceElement key={index} city={city} search={search} />
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};
