import React from 'react';
import { MemoryRouter } from 'react-router';
import {shallow, mount} from 'enzyme';
import {App} from '../App'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';
import { ResSuccess } from '../components/ResSuccess/ResSuccess';
import { Category } from '../components/Category/Category';
import { Forbidden } from '../components/Forbidden/Forbidden';
import { SingleProduct } from '../components/SingleProduct/SingleProduct';
import { Products } from '../components/Products/Products';
import { UserLogin } from '../components/UserLogin/UserLogin';
import { SignUp } from '../components/SignUp/SignUp';

jest.mock('lottie-web')

describe('Pruebas en componente <App />', ()=> {

   
    test('Comprobar que <App /> renderiza correctamente.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), // Deprecated
              removeListener: jest.fn(), // Deprecated
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();
    })

    test('Comprobar que la ruta /register renderiza el componente Sign Up.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(), 
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={[ { pathname: '/register'}] }><SignUp /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h2').at(0).text()).toContain('Crear cuenta')
    })
    
    test('Comprobar que la ruta /login renderiza el componente UserLogin.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(), 
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={[ { pathname:'/login'}]}><UserLogin /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();

    })

    test('Comprobar que la ruta /logout renderiza el componente Main.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), // Deprecated
              removeListener: jest.fn(), // Deprecated
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={['/logout']}><App /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('main').hasClass('main')).toBe(true)
    })
    

    test('Comprobar que la ruta /administration renderiza el componente Forbidden.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(),
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={['/administration']}><Forbidden /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();

        
    })

    test('Comprobar que la ruta /product/1 renderiza el componente SingleProduct.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(),
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={['/product/1']}><SingleProduct /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('Comprobar que la ruta /category/1 renderiza el componente Category.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(),
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={['/category/1']}><Category /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();
        
    })

    
    test('Comprobar que la ruta /reservation/1 renderiza el componente Forbidden.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(),
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={['/reservation/1'] }><Forbidden /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('Comprobar que la ruta confirmation renderiza el componente ResSuccess.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(),
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={['/confirmation'] }><ResSuccess /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('Comprobar que la ruta verification renderiza el componente ResSuccess.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(),
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={['/verification'] }><ResSuccess message= "¡Muchas gracias!" text="Su email ha sido verificado exitosamente." bMessage= "Volver al home"/></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();
        
    })
  
     test('Comprobar que la ruta cancellation renderiza el componente ResSuccess.', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(),
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        const wrapper= mount(<MemoryRouter initialEntries={['/cancellation'] }><ResSuccess /></MemoryRouter>)
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('Comprobar que aparezca la barra de búsqueda al hacer scroll', () => {
      const spyScrollTo = jest.fn();
      Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
      Object.defineProperty(global.window, 'scrollY', { value: 400 });

      const wrapper= mount(<MemoryRouter initialEntries={['/cancellation'] }><ResSuccess /></MemoryRouter>)
      expect( wrapper.find('input').at(0)).toMatchSnapshot();
    })
    

});