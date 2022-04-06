import React from 'react';
import { shallow } from 'enzyme';
import { ReTitle } from '../components/ReTitle/ReTitle'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <ReTitle />', ()=> {

    const type = "Hotel";
    const title = "Hotel Hermitage";
    const wrapper= shallow(<ReTitle type={type} title={title}/>);

    test('Comprobar que ReTitle renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Comprobar que se renderiza el tipo de propiedad enviado por props', () => {
        const p = wrapper.find('p').text();
        expect( p ).toContain( type );
    }) 

    
    test('Comprobar que se renderiza el titulo de la propiedad enviado por props', () => {
        const h5 = wrapper.find('h5').text();
        expect( h5 ).toContain( title );
    }) 

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('titles')).toBe(true);
    })
})
