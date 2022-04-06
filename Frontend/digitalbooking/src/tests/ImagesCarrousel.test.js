import React from 'react';
import { shallow } from 'enzyme';
import ImagesCarrousel from '../components/ImagesCarousel/ImagesCarousel'
import hotels from '../assets/hotels.png'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals'

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


describe('Pruebas en componente <ImagesCarrousel/>', ()=> {

    const wrapper= shallow(<ImagesCarrousel imagesGallery= {["../assets/hotels.png", "../assets/hotels.png", "../assets/hotels.png", "../assets/hotels.png", "../assets/hotels.png"]} />);

    test('Comprobar que <ImagesCarrousel/> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const main = wrapper.find('div').at(0);
        expect(main.hasClass('carouselContainer')).toBe(true);
    })
    
    /*test('Verificar el cierre del carrousel', () => {
      let mockFn = jest.fn();
      wrapper.instance().setGallery = mockFn;
      const x = wrapper.find('h5').props().onClick() ;
      expect(mockFn).toHaveBeenCalledTimes(1);
  })*/

})
