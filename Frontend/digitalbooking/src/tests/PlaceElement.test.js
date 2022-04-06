
import React from 'react';
import { shallow } from 'enzyme';
import { PlaceElement } from '../components/PlaceElement/PlaceElement'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <PlaceElement />', ()=> {
  
    const city= "Buenos Aires, Buenos Aires, Argentina"
    const wrapper= shallow(<PlaceElement city={city}/>);

    test('Comprobar que <PlaceElement /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })


    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const li = wrapper.find('li');
        expect(li.hasClass('elemento')).toBe(true);
    })



})
