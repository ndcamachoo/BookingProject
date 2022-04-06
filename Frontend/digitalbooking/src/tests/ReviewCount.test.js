
import React from 'react';
import { shallow } from 'enzyme';
import { ReviewCount } from '../components/ReviewCount/ReviewCount'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <ReviewCounts />', ()=> {
  
    const wrapper= shallow(<ReviewCount rate={10}/>);

    test('Comprobar que <ReviewCounts /> renderiza correctamente.', () => {
        const wrapper= shallow(<ReviewCount rate={10}/>);
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const wrapper= shallow(<ReviewCount rate={10}/>);
        const div = wrapper.find('div');
        expect(div.hasClass('review')).toBe(true);
    })

    test('Verificar que el componente realiza correctamente el cálculo del score "Excelente"', () => {
        const wrapper= shallow(<ReviewCount rate={10}/>);
        const h6= wrapper.find('h6').text();
        expect( h6 ).toContain("Excelente");

    })

    test('Verificar que el componente realiza correctamente el cálculo del score "Muy bueno"', () => {
        const wrapper= shallow(<ReviewCount rate={9}/>);
        const h6= wrapper.find('h6').text();
        expect( h6 ).toContain("Muy bueno");
    })

    test('Verificar que el componente realiza correctamente el cálculo del score "Bueno"', () => {
        const wrapper= shallow(<ReviewCount rate={7}/>);
        const h6= wrapper.find('h6').text();
        expect( h6 ).toContain("Bueno");
    })

    test('Verificar que el componente realiza correctamente el cálculo del score "Regular"', () => {
        const wrapper= shallow(<ReviewCount rate={5}/>);
        const h6= wrapper.find('h6').text();
        expect( h6 ).toContain("Regular");
    })

    test('Verificar que el componente realiza correctamente el cálculo del score "Malo"', () => {
        const wrapper= shallow(<ReviewCount rate={3}/>);
        const h6= wrapper.find('h6').text();
        expect( h6 ).toContain("Malo");
    })

    test('Verificar que el componente realiza correctamente el cálculo del score "Nuevo"', () => {
        const wrapper= shallow(<ReviewCount rate={null}/>);
        const h6= wrapper.find('h6').text();
        expect( h6 ).toContain("Nuevo");
    })

})
