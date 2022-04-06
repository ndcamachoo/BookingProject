import React from "react";
import { shallow } from "enzyme";
import validate from "../components/Reservation/validate";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Pruebas de la funcion validate", () => {
  const values = {
    city: "Cordoba",
    hour: "14:00:00 PM",
  }
  const dates = ['12/03/2021', "25/12/2021"];
  const emptyValues = {
    city: "",
    hour: ""
  };
  const emptyDates =["___ /___ /___", "___ /___ /___"];
  test("Comprobar que funciona correctamente  al ingresar los valores esperados", () => {
    expect(validate(values, dates)).toEqual({});
  });
  
  test("Comprobar que al entregarle valores vacios devuelve los mensajes de error", () => {
    expect(validate(emptyValues, emptyDates)).toEqual({city: "Este campo es requerido",
    dates: "Ingrese un rango de fechas correcto.",
    hour: "Este campo es requerido"});
  });
});
