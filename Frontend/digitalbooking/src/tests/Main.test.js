import React from 'react';
import { shallow } from 'enzyme';
import { Main } from '../components/Main/Main'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <Main/>', ()=> {

    const wrapper= shallow(<Main />);

    test('Comprobar que <Main/> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const main = wrapper.find('main');
        expect(main.hasClass('main')).toBe(true);
    })
    

})
