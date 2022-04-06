import React from 'react';
import { shallow } from 'enzyme';
import { MenuMobile } from '../components/MenuMobile/MenuMobile'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

jest.mock("react-router-dom", () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: "/register",
      search: "",
      hash: "",
      state: null,
      key: "5nvxpbdafa",
    }),
  }));

describe('Pruebas en componente <MenuMobile/>', ()=> {

    const wrapper= shallow(<MenuMobile />);

    test('Comprobar que <MenuMobile/> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const MenuMobile = wrapper.find('div').at(1);
        expect(MenuMobile.hasClass('social')).toBe(true);
    })   

})
