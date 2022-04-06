import React from "react";
import { shallow } from "enzyme";
import { Products } from "../components/Products/Products";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ nifUuid: "nif123" }),
  useHistory: jest.fn(),
  useLocation: jest.fn().mockReturnValue({
    pathname: "/register",
    search: "",
    hash: "",
    state: null,
    key: "5nvxpbdafa",
  }),
}));
const date =
  "Sun Nov 28 2021 00:00:00 GMT-0300 (hora estándar de Argentina),Tue Nov 30 2021 00:00:00 GMT-0300 (hora estándar de Argentina";
const place = "Buenos Aires, Capital Federal, Argentina";

const localStorageMock = (function () {
  
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {},
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Pruebas en componente  Products />", () => {
  const jsonId = "date";
  const jsonId2 = "place"
  const newJson = { date: date };
  const newJson2 = { place : place };
  window.localStorage.setItem(jsonId, JSON.stringify(newJson));
  window.localStorage.setItem(jsonId2, JSON.stringify(newJson2));

  const wrapper = shallow(<Products />);

  test("Comprobar que  Products /> renderiza correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Verificar que el componente carga la clase de CSS correctamente", () => {
    const section = wrapper.find("section").at(0);
    expect(section.hasClass("title")).toBe(true);
  });

  test("Verificar que el titulo carga correctamente", () => {
    const section = wrapper.find(".placeInfo");
    expect(section).toBeDefined();
  });

  test("Verificar que el subtitulo carga correctamente", () => {
    const section = wrapper.find(".recommendationtitle");
    expect(section).toBeDefined();
  });
});
