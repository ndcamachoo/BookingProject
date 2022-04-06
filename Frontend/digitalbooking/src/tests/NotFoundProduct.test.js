import React from 'react';
import {shallow} from 'enzyme';
import { NotFound } from '../components/Products/NotFound/NotFound'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

jest.mock('lottie-web')


describe('Pruebas en componente <NotFound />', ()=> {
    
    test('Comprobar que <NotFound /> renderiza correctamente.', () => {
    
        const wrapper= shallow(<NotFound />)
        expect( wrapper ).toMatchSnapshot();
    })


});