import React from 'react';
import { shallow } from 'enzyme';
import { UserContext } from '../components/UserContext/UserContext';
import { SignedUpMenuMobile } from '../components/MenuMobile/SignedUpMenuMobile'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';




jest.mock("react-router-dom", () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: "/",
      search: "",
      hash: "",
      state: null,
      key: "5nvxpbdafa",
    }),
  }));
  

describe('Pruebas en componente <SignedUpMenuMobile/>', ()=> {

    let value = {'user': 'Agustina Pasqualis'}
    const wrapper= shallow(
    <UserContext.Provider value={value}>
    <SignedUpMenuMobile />
    </UserContext.Provider>);

    test('Comprobar que <SignedUpMenuMobile/> renderiza correctamente.', () => {
    
        expect( wrapper ).toMatchSnapshot();
      
    })
  
})
