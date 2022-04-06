import React from 'react';
import { shallow } from 'enzyme';
import { Policies } from '../components/Policies/Policies'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <Policies/>', ()=> {

    const wrapper= shallow(<Policies hrules="house rules" health="health" cancel="cancel"/>);

    test('Comprobar que <Policies/> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const main = wrapper.find('section');
        expect(main.hasClass('rules')).toBe(true);
    })
    
    test('Verificar que las props renderinzan correctamente', () => {

        const rules = wrapper.find('li').at(0);
        expect(rules.text()).toContain('house rules');
        
        const h = wrapper.find('li').at(1);
        expect(h.text()).toContain('health');
        
        const c = wrapper.find('li').at(2);
        expect(c.text()).toContain('cancel');
    })
    

})
