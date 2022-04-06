import React from 'react';
import { shallow } from 'enzyme';
import { ProductsByCategory } from '../components/ProductsByCategory/ProductsByCategory'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente  ProductsByCategory />', ()=> {
   
    const wrapper= shallow( <ProductsByCategory />);

    test('Comprobar que  ProductsByCategory /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const section = wrapper.find('section');
        expect(section.hasClass('recommendation')).toBe(true);
    })

})
