import React from 'react';
import parseJWT from '../components/UserLogin/parseJwt'
import { expect } from '@jest/globals';
import '@testing-library/jest-dom'

describe('Comprobar funcion parseJWT', ()=> {


    test('Verificar que la funcion se ejecuta correctamente', () => {
        const services = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkaEpXVCIsInN1YiI6ImFndXNAZGguY29tIiwibmFtZSI6IkFndXN0aW5hIFBhc3F1YWxpcyIsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwiaWF0IjoxNjM2NTU0Mjc2LCJleHAiOjE2MzY2NDA2NzZ9.xBvsAURnQm4QyaGalW81JcOx5MpDwu23xO_4lqJ_Cr8';
        expect(parseJWT(services)).toMatchSnapshot();;

})
})