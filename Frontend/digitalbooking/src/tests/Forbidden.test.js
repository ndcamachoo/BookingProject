import React from "react";
import { shallow } from "enzyme";
import { Forbidden } from "../components/Forbidden/Forbidden";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Pruebas en componente <Forbidden />", () => {
  const wrapper = shallow(<Forbidden />);

  test("Comprobar que <Forbidden /> renderiza correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });


});
