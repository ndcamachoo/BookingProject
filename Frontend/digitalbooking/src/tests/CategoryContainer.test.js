import React from 'react';
import { shallow } from 'enzyme';
import { CategoryContainer } from '../components/CategoryContainer/CategoryContainer'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';


jest.mock("react-router-dom", () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: "/",
      search: "",
      hash: "",
      state: null,
      key: "5nvxpbdafa",
    }),
  }));
  
describe('Pruebas en componente <CategoryContainer />', () => {
    const wrapper= shallow(<CategoryContainer/>);
   
    test('Comprobar que <CategoryContainer /> renderiza correctamente.', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div').at(0);
        expect(div.hasClass('searchCategory')).toBe(true);
    })
    
})
