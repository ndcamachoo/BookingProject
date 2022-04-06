import React from "react";
import { shallow } from "enzyme";
import { Category } from "../components/Category/Category";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ nifUuid: 'nif123' }),
  useHistory: jest.fn(),
  useLocation:jest.fn().mockReturnValue({
    pathname: "/register",
    search: "",
    hash: "",
    state: null,
    key: "5nvxpbdafa",
  }),
}));

describe("Pruebas en componente <Category />", () => {
  const wrapper = shallow(<Category />);

  test("Comprobar que <Category /> renderiza correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Verificar que el componente carga la clase de CSS correctamente", () => {
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("cat")).toBe(true);
  });
});
