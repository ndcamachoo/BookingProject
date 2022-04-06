import React from 'react';
import { shallow } from 'enzyme';
import { Suggestion } from '../components/Suggestion/Suggestion'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <Suggestion />', () => {
    const wrapper= shallow(<Suggestion/>);
   
    test('Comprobar que <Suggestion /> renderiza correctamente.', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('suggestion')).toBe(true);
    })
    
    
})
