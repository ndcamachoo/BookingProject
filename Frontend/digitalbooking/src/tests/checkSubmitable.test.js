import React from "react";
import { shallow } from "enzyme";
import checkSubmitable from "../components/SignUp/checkSubmitable";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Pruebas de la funcion checkSubmitable", () => {
  const values = {
   nombre: "Cosme",
   apellido: "Fulanito",
   email: "cosme@dh.com",
   password: "123456",
   repassword: "123456",
  };

  const almostEmptyValues = {
   nombre: "",
   apellido: "CosmeFulanito",
   email: "cosme@dh.com",
   password: "123456",
   repassword: "123456",
  };

  const emptyvalues = {
   nombre: "",
   apellido: "",
   email: "",
   password: "",
   repassword: "",
  };

  test("Comprobar que funciona correctamente  al ingresar los valores esperados", () => {
    expect(checkSubmitable(values)).toEqual(true);
  });
  
  test("Comprobar que al entregarle valores vacios devuelve los mensajes de error", () => {
    expect(checkSubmitable(emptyvalues)).toEqual(false);
  });

  test("Comprobar que al entregarle  algun valor vacio devuelve los mensajes de error", () => {
    expect(checkSubmitable(almostEmptyValues)).toEqual(false);
  });
});
