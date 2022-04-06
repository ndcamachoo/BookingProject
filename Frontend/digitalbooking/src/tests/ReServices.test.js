import React from 'react';
import { shallow } from 'enzyme';
import { ReServices } from '../components/ReServices/ReServices'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';


describe('Pruebas en componente <ReServices />', ()=> {
 
    const wrapper= shallow(<ReServices services={[
        "Wifi",
        "kitchen",
        " parking",
        "airconditioning"
    ]}/>);

    test('Comprobar que <ReServices /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })


    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('services')).toBe(true);
    })
    

})
