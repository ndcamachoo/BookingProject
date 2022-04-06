import React from 'react';
import { shallow } from 'enzyme';
import { LoginAnimation } from '../components/LoginAnimation/LoginAnimation'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

jest.mock('lottie-web')
describe('Pruebas en componente <LoginAnimation />', ()=> {
    const message="Prueba Animacion"
    const wrapper= shallow(<LoginAnimation message={message}/>);

    test('Comprobar que <Button2 /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que <LoginAnimation /> muestra el texto enviado por props', () => {
    
        const LoginAnimationH6 = wrapper.find('h6').text();
        expect( LoginAnimationH6 ).toContain( message );
    }) 

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('animation')).toBe(true);
    })
    

})
