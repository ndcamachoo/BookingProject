import React, { useState, useMemo, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { ResDateContext } from "./ResDateContext";
import useFetch from "use-http";
import { ProductBanner } from "../ProductBanner/ProductBanner";
import { Policies } from "../Policies/Policies";
import DatePickerReservation from "../DatePickerReservation/DatePickerReservation";
import validate from "./validate";
import { useForm } from "../../hooks/useForm";
import dateFix from "./dateFix";
import { LoginAnimation } from "../LoginAnimation/LoginAnimation";
import arrivingHours from "./arrivingHours";
import diffDates from "../../functions/diffDates";
import convertDateFormat from "../../functions/convertDateFormat";
import styles from "./Reservation.module.css";

export const Reservation = () => {
  const [rdate, setrdate] = useState(["___ /___ /___", "___ /___ /___"]);
  const [errors, seterrors] = useState({});
  const [dateNaN, setdateNaN] = useState(true);
  const value = useMemo(() => ({ rdate, setrdate }), [rdate, setrdate]);
  const location = useLocation();
  let name = JSON.parse(localStorage.getItem("data")).name;
  let email = JSON.parse(localStorage.getItem("data")).sub;
  let userId = JSON.parse(localStorage.getItem("data")).id;
  let startDate = rdate[0].split("/");
  let endDate= rdate[1].split("/");
  const path = location.pathname.split("/");
  const id = path[2];
  const options = {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  const url = `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/products/${id}`;
  const url2 =
    "https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/reservations/save";
  const [submitable, setsubmitable] = useState(false);
  const [success, setsuccess] = useState(false);
  const [message, setmessage] = useState();
  const [formvalues, handleInputChange] = useForm({
    city: "",
    hour: "",
  });
  const { city, hour } = formvalues;
  const { loading, data = [] } = useFetch(url, options, []);
  const {
    reservation,
    form,
    date,
    time,
    resTitle,
    item,
    hours,
    summaryInfo,
    stars,
    resContainer,
    formContainer,
    summaryContainer,
    locationDetail,
    checkDates,
    confirmationButton,
    timePicker,
    pickerContainer,
    detailsInfo,
    errorm,
    error,
    prices,
    price,
    totalPrice
  } = styles;
  const bearer = `${JSON.parse(localStorage.getItem("bearer")).jwt}`;
  let history = useHistory();
  let fetchInfo = {
    user: {
      id: userId,
      email: email,
    },
    product: {
      id: id,
      productName: data.productName,
    },
    reservationStartTime: hour.split(" ")[0] + ":00",
    reservationStartDate: dateFix(startDate),
    reservationEndDate: dateFix(endDate),
  };

  const handleReservation = (e) => {
    setmessage();
    e.preventDefault();
    seterrors(validate(formvalues, rdate));
    if (submitable) {
      fetch(url2, {
        method: "POST",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(fetchInfo),
      })
        .then((response) => {
          if (!response.ok) throw Error(response.status);
          return response;
        })
        .then((response) => {
          setmessage("Estamos procesando tu solicitud");
          setsuccess("true");
          setTimeout(() => {
            history.push("/confirmation");
          }, 2000);
        })
        .catch((error) => {
          setmessage("Error al realizar el registro.");
          setsuccess(false);
        });
    } else if (!submitable) {
      setmessage("Por favor, complete todos los campos requeridos");
    }
  };

  useEffect(() => {
    if (
      rdate[0] === "___ /___ /___" ||
      rdate[1] === "___ /___ /___" ||
      city === "" ||
      hour === ""
    ) {
      setsubmitable(false);
    } else {
      setsubmitable(true);
    }
    if(
      rdate[0] !== "___ /___ /___" &&
      rdate[1] !== "___ /___ /___" 
    ) {
      setdateNaN(false);
    } else {
      setdateNaN(true);
    }
  }, [rdate, submitable, city, hour]);

  let datesConverted = rdate.map((date) =>{  
    let dateConverted = convertDateFormat(date)
    return dateConverted
  })


  let nightsStay = dateNaN ? 1 : (diffDates(datesConverted[0], datesConverted[1]));

  return !loading ? (
    <div className={reservation}>
      <ResDateContext.Provider value={value}>
      {success && <LoginAnimation message={message}/>}
        <ProductBanner
          title={data.productCategory.name}
          subtitle={data.productName}
        />
        <h4 className={resTitle}>Completá tus datos</h4>
        <div className={resContainer}>
          <div className={formContainer}>
            <form className={form}>
              <div className={item}>
                <p>Nombre</p>
                <input
                  name="name"
                  disabled="disabled"
                  value={name.split(" ").slice(0, -1).join(" ")}
                ></input>
              </div>
              <div className={item}>
                <p>Apellido</p>
                <input
                  name="lastname"
                  disabled="disabled"
                  value={name.split(" ").slice(-1).join(" ")}
                ></input>
              </div>
              <div className={item}>
                <p>Correo electrónico</p>
                <input name="email" disabled="disabled" value={email}></input>
              </div>
              <div className={item}>
                <p>Ciudad</p>
                <input
                  name="city"
                  value={city}
                  onChange={handleInputChange}
                ></input>
                {errors.city && <h6 className={error}>{errors.city}</h6>}
              </div>
            </form>
          </div>
          <div className={date}>
            <h4>Seleccioná tu fecha de reserva</h4>
            <div className={pickerContainer}>
              <DatePickerReservation />
              {errors.dates && <h6 className={error}>{errors.dates}</h6>}
            </div>
          </div>
          <div className={timePicker}>
            <h4>Tu horario de llegada</h4>
            <div className={time}>
              <h5>
                Tu habitación va a estar lista para el check-in entre las 10:00
                AM y las 11:00 PM
              </h5>
              <h6>Indicá tu horario estimado de llegada </h6>
              <select
                name="hour"
                className={ hours }
                value={hour}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled selected>
                  Seleccionar hora de llegada
                </option>
                {arrivingHours.map((hour, index) => (
                  <option key={index}> {hour} </option>
                ))}
              </select>
              {errors.hour && <h6 className={error}>{errors.hour}</h6>}
            </div>
          </div>
          <div className={summaryContainer}>
            <h4>Detalle de la reserva</h4>
            <img src={data.photoGallery[0]} alt="Imagen del producto" />
            <div className={detailsInfo}>
              <div className={summaryInfo}>
                <p>{data.productCategory.name}</p>
                <h5>{data.productName}</h5>
                <div className={stars}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className={locationDetail}>
                <i className="fas fa-map-marker-alt"></i>
                <h5>{data.city.name}</h5>
              </div>
              <hr />
              <div className={prices}>
                <p className={price}>{`$${data.pricePerNight} / noche`}</p>
                <p className={totalPrice}>{`$${data.pricePerNight * nightsStay} / Total por ${nightsStay} noches`}</p>
              </div>
              <hr />
              <div className={checkDates}>
                <p>Check in</p>
                <input
                  name="startDate"
                  type="text"
                  placeholder="___ /___ /___"
                  value={rdate[0]}
                  disabled="disabled"
                ></input>
              </div>
              <hr />
              <div className={checkDates}>
                <p>Check out</p>
                <input
                  name="endDate"
                  type="text"
                  placeholder="___ /___ /___"
                  value={rdate[1]}
                  disabled="disabled"
                ></input>
              </div>
              {success === false && <h6 className={errorm}>{message}</h6>}
              <button
                className={confirmationButton}
                onClick={handleReservation}
              >
                Confirmar reserva
              </button>
            </div>
          </div>
        </div>
        <Policies hrules={data.houseRules} health= {data.healthSafety} cancel ={data.cancellationPolicy} />
      </ResDateContext.Provider>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
