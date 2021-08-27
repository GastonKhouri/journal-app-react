import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../routers/AppRouter';
import { act } from '@testing-library/react';

import { firebase } from '../../firebase/firebaseConfig';
import { login } from '../../actions/auth'; 

jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}))

const middlewares = [ thunk ] 
const mockStore = configureStore(middlewares);

const initState = {
    auth: { },
    ui: {
        loading: false,
        msg: null
    },
    notes: {
        active: {
            id: 'JPP2ZFdnhDHmD558DgZq',
            title: 'Hola',
            body: 'Mundo'
        },
        notes: []
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en <AppRouter />', () => {    
    
    test('debe de llamar al login si esta autenticado', async() => {

        let user;
        
        await act( async() => {
    
            const userCred = await firebase.auth().signInWithEmailAndPassword('test@test.com', '123456');
            user = userCred.user;
    
            const wrapper = mount(
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );
        })

        expect(login).toHaveBeenCalledWith('j79H5dZAqpRn1J5rrGiHUIC6ufv2', null);
        
    })
    
    
})
