import React from "react";
import { useHistory } from "react-router";


export const CancelReservation = (props) => {
  const { id } = props;
  const bearer = `${JSON.parse(localStorage.getItem("bearer")).jwt}`;
  const url = `https://cors-everywhere-me.herokuapp.com/http://g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/reservations/delete/${id}`;
  const history = useHistory();
  
  const handleClick = (e) => {
    e.preventDefault();
    if (window.confirm("Desea cancelar la reserva?"))
      fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: bearer,
          mode: 'no-cors',
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        }
      })
        .then((response) => {
          if (!response.ok) throw Error(response.status);
          return response;
        })
        .then((response) => {
            history.push("/cancellation");
   
        })
        .catch((error) => {
           console.log(error);
        });
        

  };

  return (
    <div>
        <button onClick={handleClick}>Cancelar Reserva</button>
    </div>
  );
};
