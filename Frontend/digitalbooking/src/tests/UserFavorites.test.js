import React from "react";
import { shallow, mount } from "enzyme";
import  {UserFavorites} from "../components/UserDesk/UserFavorites";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Pruebas en componente <UserFavorites />", () => {
  const wrapper = mount(<UserFavorites />);

  test("Comprobar que <UserFavorites /> renderiza correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

 
});
