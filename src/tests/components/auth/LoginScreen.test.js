import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoginScreen from "../../../components/auth/LoginScreen"
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares);

const initState = {
    auth: { },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'JPP2ZFdnhDHmD558DgZq',
            title: 'Hola',
            body: 'Mundo'
        }
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en <LoginScreen />', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })

    const wrapper = mount(
        <Provider store={ store }>
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </Provider>
    );

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe de dispararse la accion de startGoogleLogin', () => {

        wrapper.find('.google-btn').simulate('click');

        expect(startGoogleLogin).toHaveBeenCalled();

    })

    test('debe disparar startLoginEmailPassword con los respectivos argumentos', () => {

        wrapper.find('form').simulate('submit');

        expect(startLoginEmailPassword).toHaveBeenCalledWith('', '');

        
    })
    
    
    
    
})
