import React from "react";
import { shallow } from "enzyme";
import { UserLogin } from "../components/UserLogin/UserLogin";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ nifUuid: 'nif123' }),
  useHistory: jest.fn(),
  useContext: jest.fn().mockReturnValue({visibility: true}),
  useLocation:jest.fn().mockReturnValue({
    pathname: "/register",
    search: "",
    hash: "",
    state: null,
    key: "5nvxpbdafa",
  }),
}));

describe("Pruebas en componente <UserLogin />", () => {
  const handleSubmit = jest.fn();
  const setuser = jest.fn();
  const wrapper = shallow(<UserLogin onSubmit={handleSubmit} />);

  test("Comprobar que <UserLogin /> renderiza correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Verificar que el componente carga la clase de CSS correctamente", () => {
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("login")).toBe(true);
  });

  test("Debe renderizar el input email", () => {
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
  });

  test("Debe renderizar el input password", () => {
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
  });

  test("Debe renderizar el boton de submit", () => {
    expect(wrapper.find('button[name="submit"]').exists()).toBe(true);
  });

  test("Verificar que los inputs se renderizan vacios", () => {
    expect(wrapper.find('input[name="email"]').prop("value")).toBe("");
    expect(wrapper.find('input[name="password"]').prop("value")).toBe("");
  });

  
});
