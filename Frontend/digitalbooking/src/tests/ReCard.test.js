import React from 'react';
import { shallow } from 'enzyme';
import { ReCard } from '../components/ReCard/ReCard'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Pruebas en componente  ReCard />', ()=> {
    const type = "hotel";
    const title = "Hotel Hermitage";
    const img = "https://images.unsplash.com/photo-1440778303588-435521a205bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9saWRheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    const alt =  "Hotel Hermitage"
    const text=  " Lorem ipsum dolor sit amet consectetur adipiscing elit"
    const rate = 9;  
    const id= 1 
    const wrapper= shallow( <ReCard type= {type} title={title} img={img} alt={alt} text={text} rate= {rate} id={id} />);

    test('Comprobar que  ReCard /> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })

    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const article = wrapper.find('article');
        expect(article.hasClass('recommendationCards')).toBe(true);
    })

    test('Verificar que el componente renderiza la imagen correcta', () => {
        
        expect (wrapper.find("img").at(0).prop("src")).toEqual(img);

    })

    
    test('Verificar que la imagen contiene el texto alternativo enviado por props', () => {
        
        expect (wrapper.find("img").at(0).prop("alt")).toEqual("Hotel Hermitage");

    })

    test('Verificar que se renderiza la card con el titulo enviado', () => {
        
        expect (wrapper.find("ReTitle").prop("title")).toEqual("Hotel Hermitage");

    })

    test('Verificar que se renderiza la card con la calificacion enviada', () => {
        
        expect (wrapper.find("ReviewCount").prop("rate")).toEqual(9);

    })


    
})
