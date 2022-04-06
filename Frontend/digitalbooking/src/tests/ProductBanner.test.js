import React from 'react';
import { shallow } from 'enzyme';
import { ProductBanner } from '../components/ProductBanner/ProductBanner'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <ProductBanner />', ()=> {

    const wrapper= shallow(<ProductBanner title="Hotel" subtitle="subtitulo" />);

    test('Comprobar que <ProductBanner /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Comprobar el titulo correctamente.', () => {
    
        const title = wrapper.find('h5').text();
        expect(title).toContain("Hotel");
      
    })

    test('Comprobar el subtitulo correctamente.', () => {
    
        const title = wrapper.find('h3').text();
        expect(title).toContain("subtitulo");
      
    })

    

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div').at(0);
        expect(div.hasClass('headerContainer')).toBe(true);
    })

})
