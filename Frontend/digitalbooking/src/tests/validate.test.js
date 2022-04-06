import React from "react";
import { shallow } from "enzyme";
import validate from "../components/CreateProduct/validate";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Pruebas de la funcion validate", () => {
  const values = {
    productAddress: "P Sherman calle Wallaby 42",
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
    expect(validate(values)).toEqual({});
  });
  
  test("Comprobar que al entregarle valores vacios devuelve los mensajes de error", () => {
    expect(validate(emptyValues)).toEqual({"cancellationPolicy": "Campo requerido",
      "city": "Ingrese una ciudad",
      "healthSafety": "Campo requerido",
      "houseRules": "Campo requerido",
      "lat": "Ingrese un valor de latitud",
      "long": "Ingrese un valor de longitud",
      "productAddress": "Ingrese la dirección",
      "productCategory": "Campo requerido",
       "productDescription": "Ingrese una descripción",
      "productName": "Ingrese el nombre del producto",
       "services": "Seleccione al menos un servicio",
     });
  });
});
