import React from 'react';
import Service2Icon from "../components/ReServices/Service2Icon";
import { expect } from '@jest/globals';
import '@testing-library/jest-dom'

describe('Comprobar funcion Service2Icon', ()=> {


    test('Verificar que la funcion se ejecuta correctamente', () => {
        const services = [
            "Wifi"
        ];
        expect(Service2Icon(services)).toMatchSnapshot();;

})
})