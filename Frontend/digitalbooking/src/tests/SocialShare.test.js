import React from "react";
import { shallow } from "enzyme";
import { SocialShare } from "../components/SocialShare/SocialShare";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";
import {SocialShareVisibilty} from "../components/GridBanner/SocialShareVisibility"

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

describe("Pruebas en componente <SocialShare />", () => {
  const wrapper = shallow(<SocialShare />);

  test("Comprobar que <SocialShare /> renderiza correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
