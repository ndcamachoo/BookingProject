import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../components/Footer/Footer'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <Footer />', () => {
    const wrapper= shallow(<Footer/>);
   
    test('Comprobar que <Footer /> renderiza correctamente.', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const footer = wrapper.find('footer');
        expect(footer.hasClass('footer')).toBe(true);
    })
    
    
})
