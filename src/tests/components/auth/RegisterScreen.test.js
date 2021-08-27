import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import RegisterScreen from "../../../components/auth/RegisterScreen"
import { types } from '../../../types/types';

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares);

const initState = {
    auth: { },
    ui: {
        loading: false,
        msgError: null
    }
}

let store = mockStore(initState);
// store.dispatch = jest.fn();

describe('Pruebas en <RegisterScreen />', () => {

    const wrapper = mount(
        <Provider store={ store }>
            <MemoryRouter>
                <RegisterScreen />
            </MemoryRouter>
        </Provider>
    );

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe de hacer el dispatch de la accion respectiva', () => {

        // const emailField = wrapper.find('input[name="email"]');

        // emailField.simulate('change', {
        //     target: {
        //         value: '',
        //         name: 'email'
        //     }
        // })

        wrapper.find('form').simulate('submit');

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload: 'Name is required'
        })
        
    })

    test('debe de mostrar la caja de alerta con error', () => {

        const initState = {
            auth: { },
            ui: {
                loading: false,
                msgError: 'Email no es correcto'
            }
        }
        
        const store = mockStore(initState);
        
        const wrapper = mount(
            <Provider store={ store }>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);
        
    })
    
    
    
    
})
