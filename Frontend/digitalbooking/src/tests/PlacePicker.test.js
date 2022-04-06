import React from 'react';
import { shallow } from 'enzyme';
import { Placepicker } from '../components/PlacePicker/Placepicker'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

global.fetch = jest.fn(()=> Promise.resolve({
    json: ()=>Promise.resolve(
    ["Buenos Aires", "San Francisco"])
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
  
describe('Pruebas en componente <Placepicker />', () => {
    const wrapper= shallow(<Placepicker/>);
   
    test('Comprobar que <Placepicker /> renderiza correctamente.', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div').at(0);
        expect(div.hasClass('container')).toBe(true);
    })

    test('Verificar que el componente carga el input', () => {

        const div = wrapper.find('input').at(0);
        expect(div.hasClass('input')).toBe(true);
    })

    
    test('Verificar que el componente carga el placeholder', () => {

        const div = wrapper.find('input').at(0);
        expect(div.prop('placeholder')).toBe("¿A dónde vamos?");
    })
    
    test('Verificar que el componente carga la lista', () => {

        const div = wrapper.find('ul').at(0);
        expect(div.hasClass('locaciones')).toBe(true);
    })

    test('Verificar que el input recibe sugerencias', () => {

        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'Buenos' } })
       
    })
    
})
