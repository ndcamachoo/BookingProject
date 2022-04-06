import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../components/Button/Button'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <Button />', ()=> {

    const text = "Ver mas";
    const link = "/register";
    const visibility = false;
    const wrapper= shallow(<Button text={text} link= {link} visibility={visibility}/>);

    test('Comprobar que Button renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que <Button /> muestra el texto enviado por props', () => {
        const button = wrapper.find('Link').text();
        expect( button ).toContain( text );
    }) 

    test('Verficar link del componente <Button />', () => {
        
        const button = wrapper.find('Link');
        expect( button.prop('to') ).toBe(link)
    })

    test('Verificar que el componente se puede visualizar cuando recibe como prop visibility= false', () => {
        
        const button = wrapper.find('button');
        expect(button.hasClass('button')).toBe(true);
    })
    
    test('Verificar que el componente no se esconda cuando reciba como prop visibility = false', () => {
        
        const button = wrapper.find('button');
        expect(button.hasClass('hide')).toBeFalsy();
    })
    


    
})
