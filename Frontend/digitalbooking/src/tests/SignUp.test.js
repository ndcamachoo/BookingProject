import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../components/SignUp/SignUp'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <SignUp />', () => {

    const handleSubmit = jest.fn();
    const wrapper= shallow(<SignUp onSubmit= {handleSubmit}/>);
   
    test('Comprobar que <SignUp /> renderiza correctamente.', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div').at(0);
        expect(div.hasClass('signup')).toBe(true);
    })
    
    test('Verificar que no se postea informacion con submit', ()=>{

        wrapper.find('form').simulate('submit', { preventDefault(){}})
    })

    test('Debe renderizar el input nombre', () => {
      
        expect(wrapper.find('input[name="nombre"]').exists()).toBe(true);

    });

    test('Debe renderizar el input apellido', () => {
      
        expect(wrapper.find('input[name="apellido"]').exists()).toBe(true);

    });

    test('Debe renderizar el input email', () => {
      
        expect(wrapper.find('input[name="email"]').exists()).toBe(true);

    });

    
    test('Debe renderizar el input password', () => {
      
        expect(wrapper.find('input[name="password"]').exists()).toBe(true);

    });

    test('Debe renderizar el input repassword', () => {
      
        expect(wrapper.find('input[name="repassword"]').exists()).toBe(true);

    });

    test('Debe renderizar el boton de submit', () => {
      
        expect(wrapper.find('button[name="submit"]').exists()).toBe(true);

    });

    test('Verificar que los inputs se renderizan vacios', () => {
    
        expect(wrapper.find('input[name="nombre"]').prop('value')).toBe('');
        expect(wrapper.find('input[name="apellido"]').prop('value')).toBe('');
        expect(wrapper.find('input[name="email"]').prop('value')).toBe('');
        expect(wrapper.find('input[name="password"]').prop('value')).toBe('');
        expect(wrapper.find('input[name="repassword"]').prop('value')).toBe('');
    });
    
});
    
