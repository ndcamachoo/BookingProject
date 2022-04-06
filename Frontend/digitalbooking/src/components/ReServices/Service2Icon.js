import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Service2Icon.module.css'
import {
  faBan,
  faWifi,
  faSwimmer,
  faTv,
  faUtensils,
  faPaw,
  faCar,
  faTemperatureLow,
  faSmoking,
  faHotTub,
  faCoffee, 
  faSnowflake,
  faMugHot,
  faDumbbell,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";

const dict = {
  wifi: faWifi,
  pool: faSwimmer,
  cabletv: faTv,
  kitchen: faUtensils,
  petsallowed: faPaw,
  parking: faCar,
  airconditioning: faTemperatureLow,
  smokingallowed: faSmoking,
  jacuzzi: faHotTub,
  breakfast: faCoffee,
  refrigerator: faSnowflake,
  microwave: faMugHot,
  gym: faDumbbell,
  accesible : faWheelchair
};

const Service2Icon = ({ icon, color }) => {
  let service;

  if (icon === undefined && !dict.hasOwnProperty(icon)) {
    service = faBan;
  } else {
    service = dict[icon.toLowerCase().replace(/ /g, "")];
  }

  return (
    <>
      <FontAwesomeIcon className= {icon} icon={service} style={color} />
    </>
  );
};

export default Service2Icon;
