import React from 'react';
import { shallow } from 'enzyme';
import { ProductService } from '../components/ProductService/ProductService'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';


describe('Pruebas en componente <ProductService />', ()=> {
 
    const wrapper= shallow(<ProductService services={[
        "Wifi",
        "kitchen",
        " parking",
        "airconditioning"
    ]}/>);

    test('Comprobar que <ProductService /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })


    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div').at(0);
        expect(div.hasClass('container')).toBe(true);
    })
    

})
