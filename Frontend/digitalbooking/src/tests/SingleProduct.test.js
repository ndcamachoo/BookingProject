import React from 'react';
import { shallow } from 'enzyme';
import { SingleProduct } from '../components/SingleProduct/SingleProduct'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';


jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ nifUuid: 'nif123' }),
  useHistory: jest.fn(),
  useLocation:jest.fn().mockReturnValue({
    pathname: "/register",
    search: "",
    hash: "",
    state: null,
    key: "5nvxpbdafa",
  }),
}));

describe('Pruebas en componente <SingleProduct />', () => {
    const wrapper= shallow(<SingleProduct/>);
   
    test('Comprobar que <SingleProduct /> renderiza correctamente.', () => {
      
    expect( wrapper ).toMatchSnapshot();
        
     
    })

    
})
