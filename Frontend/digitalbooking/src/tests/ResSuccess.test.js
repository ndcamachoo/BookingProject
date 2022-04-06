import React from 'react';
import { shallow } from 'enzyme';
import { ResSuccess } from '../components/ResSuccess/ResSuccess'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <ResSuccess />', ()=> {

    const wrapper= shallow(<ResSuccess />);

    test('Comprobar que <ResSuccess /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })


    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('confirmation')).toBe(true);
    })

})
