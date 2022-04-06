import React from 'react';
import { shallow } from 'enzyme';
import { Button2 } from '../components/Button2/Button2'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente <Button2 />', ()=> {
    const text = "Ver mas";
    const wrapper= shallow(<Button2 text={text}/>);

    test('Comprobar que <Button2 /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que <Button2 /> muestra el texto enviado por props', () => {
    
        const button = wrapper.find('Link').text();
        expect( button ).toContain( text );
    }) 

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const button = wrapper.find('button');
        expect(button.hasClass('button2')).toBe(true);
    })
    

})
