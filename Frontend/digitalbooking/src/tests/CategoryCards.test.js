import React from 'react';
import { shallow } from 'enzyme';
import { CategoryCard } from '../components/CategoryCard/CategoryCard'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

describe('Comprobar el correcto funcionamiento del componente <CategoryCard/>', () => {

    const image= "https://images.unsplash.com/photo-1584704876450-0eb3fd5a2f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80";
    const title= "Hermoso departamento en la playa."
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
    const alt = "Lorem ipsum";
    const wrapper= shallow(<CategoryCard image={image} title={title} description={desc} alt={alt} />);
    
    test('Verificar que el componente renderiza corectamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Verificar que el componente carga la clase de CSS correctamente', () => {

        const card = wrapper.find('article');
        expect(card.hasClass('categoryCards')).toBe(true);
    })
    
})
