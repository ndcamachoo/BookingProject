import React from "react";
import { mount } from "enzyme";
import { Recommendations } from "../components/Recommendations/Recommendations";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

global.fetch = jest.fn(()=> Promise.resolve({
  json: ()=>Promise.resolve({
      "id": 1,
      "productName": "Amazing Luxurious Apt-Palermo Soho",
      "productDescription": "Luxury building in the heart of the trendy Palermo Soho. 24-hour security",
      "publicationDate": "2009-04-13",
      "photoGallery": [
          "https://a0.muscache.com/im/pictures/c5cd9326-df4d-4b63-960b-4d64a95d04a1.jpg",
          "https://a0.muscache.com/im/pictures/dcea15c9-1165-4012-ae05-291744953799.jpg",
          "https://a0.muscache.com/im/pictures/ad19a0b4-ab77-4e5b-ac5a-eb64d03c7118.jpg",
          "https://a0.muscache.com/im/pictures/3df8765e-5013-45f4-9eb8-2d2d2eb20e82.jpg",
          "https://a0.muscache.com/im/pictures/09f10f8f-5215-455a-bb6f-3df43be49e6d.jpg"
      ],
      "user": {
          "id": 1,
          "nombre": "admin",
          "apellido": "admin",
          "email": "admin@dh.com"
      },
      "city": {
          "id": 1,
          "name": "Buenos Aires, Capital Federal",
          "country": "Argentina"
      },
      "coordinates": [
          "-34.58184",
          "-58.42415"
      ],
      "productCategory": {
          "id": 4,
          "name": "Islas",
          "photoUrl": "https://media.istockphoto.com/photos/young-woman-walks-towards-beautiful-beach-picture-id1311063862?b=1&k=20&m=1311063862&s=170667a&w=0&h=ai-8qth6hlECiFoQR4g9Wt1cZHdrvsCsSAnyzGP2d3E=",
          "description": "Islas",
          "countProducts": "http://g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/category/count/Islas"
      },
      "maxGuess": 2,
      "rooms": 2,
      "services": [
          "Wifi",
          "Cable TV",
          "kitchen",
          "parking",
          "jacuzzi"
      ],
      "minNights": 3,
      "maxNights": 30,
      "score": 4.7,
      "review": 4,
      "pricePerNight": 6408,
      "productAvailable": true
  })
}))

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

describe("Pruebas en componente  Recommendations />", () => {
  const wrapper = mount(<Recommendations />);

  test("Comprobar que  Recommendations /> renderiza correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Verificar que el componente carga la clase de CSS correctamente", () => {
    const section = wrapper.find("section");
    expect(section.hasClass("recommendation")).toBe(true);
  });

  
  test("Verificar que muestra el mensaje de cargando recomendaciones", () => {
    const section = wrapper.find("p").text();
    expect(section).toContain("Cargando Recomendaciones...");
  });

});
