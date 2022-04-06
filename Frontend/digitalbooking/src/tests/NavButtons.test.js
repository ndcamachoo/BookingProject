import React from "react";
import { mount, shallow } from "enzyme";
import { NavButtons } from "../components/NavButtons/NavButtons";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "localhost:3000/login",
    search: "",
    hash: "",
    state: null,
    key: "5nvxpbdafa",
  }),
}));


describe("Pruebas en componente <NavButtonss />", () => {
  const wrapper = shallow(<NavButtons />);

  test("Comprobar que <NavButtonss /> renderiza correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Verificar que el componente carga la clase de CSS correctamente", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("registerButtons")).toBe(true);
  });

  test("Verificar que el componente carga el boton de register", () => {
    const div = wrapper.find("Button").at(0);
    expect(div.prop('text')).toBe('Crear cuenta');
  });

  test("Verificar que el componente carga el boton de login", () => {
    const div = wrapper.find("Button").at(1);
    expect(div.prop('text')).toBe('Iniciar sesion');
  });

});
