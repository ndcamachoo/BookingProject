import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from '../components/SearchBar/SearchBar'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <SearchBar />', ()=> {

    const wrapper= shallow(<SearchBar />);

    test('Comprobar que <SearchBar /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })


    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('search')).toBe(true);
    })

})
