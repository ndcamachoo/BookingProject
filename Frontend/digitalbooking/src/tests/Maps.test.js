import React from 'react';
import { shallow } from 'enzyme';
import { Maps } from '../components/Maps/Maps'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <Maps />', ()=> {

    
    const wrapper= shallow(<Maps lat="53.02" long="-45.02" width= "94%" height="80vh"margin= "3%" />);

    test('Comprobar que Maps renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    
})
