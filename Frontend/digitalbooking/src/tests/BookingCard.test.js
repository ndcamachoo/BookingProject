import React from 'react';
import { shallow } from 'enzyme';
import { BookingCard } from '../components/BookingCard/BookingCard'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <BookingCard />', ()=> {

    
    const wrapper= shallow(<BookingCard />);

    test('Comprobar que BookingCard renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    
})
