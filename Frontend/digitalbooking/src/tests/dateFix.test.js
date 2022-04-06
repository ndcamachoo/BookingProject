import React from "react";
import { shallow } from "enzyme";
import dateFix from "../components/Reservation/dateFix";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Pruebas de la funcion validate", () => {
  
  
  test("Comprobar que funciona correctamente  al ingresar los valores esperados", () => {
    const values = ['29', '12', '2021'];
    expect(dateFix(values)).toEqual('2021-12-29');
  });
  
  test("Comprobar que funciona correctamente  al ingresar los valores", () => {
    const values = ['2021', '12', '19'];
    expect(dateFix(values)).toEqual('19-12-2021');
  });

  
  test("Comprobar que arregla el formato", () => {
    const values = ['2021', '3', '9'];
    expect(dateFix(values)).toEqual("9-3-2021");
  });
 
});
