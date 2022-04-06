import React from "react";
import { shallow } from "enzyme";
import validate from "../components/SignUp/validate";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Pruebas de la funcion validate", () => {
  const values = {
    nombre: "Cosme",
    apellido: "Fulanito",
    email: "cosme@dh.com",
    password: "duffhomer",
    repassword: "duffhomer"
  }

  const wrongEmail = {
    nombre: "Cosme",
    apellido: "Fulanito",
    email: "cosmefulanitp",
    password: "duffhomer",
    repassword: "duffhomer",
  }

  const emptyValues = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    repassword: "",
  
  }
  

  test("Comprobar que funciona correctamente  al ingresar los valores esperados", () => {
    expect(validate(values)).toEqual({});
  });
  
  test("Comprobar que al entregarle valores vacios devuelve los mensajes de error", () => {
    expect(validate(emptyValues)).toEqual({
    "apellido": "Este campo es requerido",
    "email": "Este campo es requerido",
     "nombre": "Este campo es requerido",
     "password": "Este campo es requerido",
     "repassword": "Este campo es requerido"});
  });

  test("Comprobar que al ingresar email invalido devulve el mensaje", () => {
    expect(validate(wrongEmail)).toEqual({
      "email": "Ingrese un email válido"
    });
  });
});
