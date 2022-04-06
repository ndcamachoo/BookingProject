import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../components/Nav/Nav'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

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

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Pruebas en componente  Nav />', ()=> {
    const text = "Ver mas";
    const wrapper= shallow( <Nav text='Ver mas'/>);

    test('Comprobar que  Nav /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const nav = wrapper.find('nav');
        expect(nav.hasClass('color1')).toBe(true);
    })
    
    test('Verificar que el logo se renderiza correctamente', () => {
        const logo= "logo.png";
        expect (wrapper.find("img").at(0).prop("src")).toEqual(logo);
    })
    
    test('Verificar que aparece el componente de búsqueda al hacer scroll', () => {
      const spyScrollTo = jest.fn();
      Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
      Object.defineProperty(global.window, 'scrollY', { value: 400 });
       
        expect (wrapper.find("input").props().placeholder).toContain("Encontrá tu lugar");
    })

    test('Simular click menu', () => {
        
    const setVisibility = jest.fn();   
    wrapper.find(".hamburguesita").simulate("click", {
        preventDefault: () => {
        }
    });
    expect(setVisibility).not.toHaveBeenCalled()

        
    })
    
    

})
