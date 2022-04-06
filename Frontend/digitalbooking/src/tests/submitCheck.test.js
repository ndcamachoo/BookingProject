import React from "react";
import { shallow } from "enzyme";
import submitCheck from "../components/CreateProduct/submitCheck";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Pruebas de la funcion submitCheck", () => {
  const values = {
    productAddress: "P Sherman calle Wallaby 42",
    pricePerNight: 15648,
    productName: "Producto",
    productDescription: "Descripcion",
    services: "wifi",
    city: { name: "Cordoba", country: "Argetina" },
    coordinates: ["5.6465", "45.646"],
    productCategory: {
      name: "Hoteles",
    },
    houseRules: "rules",
    healthSafety: "health",
    cancellationPolicy: "cancel",
  };
  const emptyValues = {
    productAddress: "",
    productName: "",
    productDescription: "",
    services: "",
    city: { name: "" },
    coordinates: ["", ""],
    productCategory: {
      name: "",
    },
    houseRules: "",
    healthSafety: "",
    cancellationPolicy: "",
  };
  test("Comprobar que funciona correctamente  al ingresar los valores esperados", () => {
    expect(submitCheck(values)).toEqual(true);
  });
  
  test("Comprobar que al entregarle valores vacios devuelve los mensajes de error", () => {
    expect(submitCheck(emptyValues)).toEqual(false);
  });
});
