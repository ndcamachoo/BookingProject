import React from "react";
import { shallow } from "enzyme";
import { UserDesk } from "../components/UserDesk/UserDesk";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Pruebas en componente <UserDesk />", () => {
  const wrapper = shallow(<UserDesk />);

  test("Comprobar que <UserDesk /> renderiza correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Verificar que el componente carga la clase de CSS correctamente", () => {
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("userDesk")).toBe(true);
  });
});
