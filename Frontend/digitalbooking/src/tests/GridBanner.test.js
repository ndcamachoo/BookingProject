import React from 'react';
import { shallow } from 'enzyme';
import { GridBanner } from '../components/GridBanner/GridBanner'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <GridBanner />', ()=> {
    const ph1="https://images.unsplash.com/photo-1440778303588-435521a205bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9saWRheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    const ph2="https://images.unsplash.com/photo-1527179528411-4219e0714bcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9saWRheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    const ph3="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9saWRheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    const ph4="https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9saWRheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    const ph5="https://images.unsplash.com/photo-1447501614729-24781f73c2f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbGlkYXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    const wrapper= shallow(<GridBanner ph1={ph1}  ph2={ph2}  ph3={ph3}  ph4={ph4}  ph5={ph5} />);

    test('Comprobar que <GridBanner /> renderiza correctamente.', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Verificar que <GridBanner /> muestra las imagenes enviadas por props', () => {
    
        expect (wrapper.find("img").at(0).prop("src")).toEqual(ph1);
        expect (wrapper.find("img").at(1).prop("src")).toEqual(ph2);
        expect (wrapper.find("img").at(2).prop("src")).toEqual(ph3);
        expect (wrapper.find("img").at(3).prop("src")).toEqual(ph4);
        expect (wrapper.find("img").at(4).prop("src")).toEqual(ph5);
    }) 

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const gridBanner = wrapper.find('div').at(0);
        expect(gridBanner.hasClass('grid')).toBe(true);
    })

    test('Verificar que el componente carga el titulo h5 correctamente', () => {

        const gridBanner = wrapper.find('h5');
        expect(gridBanner.contains('Ver más')).toBe(true);
    })
    

})
