import React from 'react';
import { shallow } from 'enzyme';
import { MenuMobileDefault } from '../components/MenuMobile/MenuMobileDefault'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';
import { Link } from "react-router-dom";

jest.mock("react-router-dom", () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: "/",
      search: "",
      hash: "",
      state: null,
      key: "5nvxpbdafa",
    }),
  }));

describe('Pruebas en componente <MenuMobile/>', ()=> {

    const wrapper= shallow(<MenuMobileDefault />);

    test('Comprobar que <MenuMobile/> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const MenuMobile = wrapper.find('section').at(0);
        expect(MenuMobile.hasClass('header')).toBe(true);
    })   

    test('Comprobar que se renderiza el boton para cerrar el menu', ()=>{

        const boton = wrapper.find('button').at(0);
        expect(boton.hasClass('logout')).toBe(true);
    })

    test('Comprobar componentes Link', ()=>{

      const link = wrapper.find('.button').at(0);
      expect(link.props().to).toEqual('/register');

      const link2 = wrapper.find('.button').at(1);
      expect(link2.props().to).toEqual('/login');
  })

})
