import React from 'react';
import { mount, shallow } from 'enzyme';
import { SignedUpNav } from '../components/SignedUpNav/SignedUpNav'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';
import { UserContext } from '../components/UserContext/UserContext';


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
const bearer = JSON.stringify({jwt:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkaEpXVCIsInN1YiI6ImFndXNAZGguY29tIiwiaWQiOjQsIm5hbWUiOiJBZ3VzdGluYSBQYXNxdWFsaXMiLCJhdXRob3JpdGllcyI6WyJVU0VSIl0sImlhdCI6MTYzNzYxNTQ4MywiZXhwIjoxNjM3NzAxODgzfQ.71eZCOY3cJHr0wlHCmzEt6sbNRoXulY5ki0y8eP2T3Q"});

const localStorageMock = (function() {
  let store = {};
  
  return {
    getItem(key) {
      return store[key];
    },
 
    setItem(key, value) {
      store[key] = value;
    },
  
    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },
     
    getAll() {
     
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const user = JSON.stringify({jti:"dhJWT", sub:"agus@dh.com", id:4,name:"Agustina Pasqualis", authorities:["USER"]});


describe('Pruebas en componente <SignedUpNav />', () => {
      const jsonId = 'bearer';
      const newJson = {bearer: bearer};
      window.localStorage.setItem(jsonId, JSON.stringify(newJson));
 
    const wrapper= mount(<UserContext.Provider value={{user}}><SignedUpNav/></UserContext.Provider>);
  

    test('Comprobar que <SignedUpNav /> renderiza correctamente.', () => {

        expect( wrapper ).toMatchSnapshot();
    
    })
})




  