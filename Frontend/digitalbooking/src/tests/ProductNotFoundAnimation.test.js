import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../components/Products/NotFound/NotFoundAnimation'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

jest.mock('lottie-web')


describe('Pruebas en componente <NotFound />', ()=> {
    
    const wrapper= shallow(<NotFound />)

    test('Comprobar que <NotFound /> renderiza correctamente.', () => {
    
       
        expect( wrapper ).toMatchSnapshot();
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div').at(0);
        expect(div.hasClass('animContainer')).toBe(true);
    })

});