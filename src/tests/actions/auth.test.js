import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types";

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: 'JPP2ZFdnhDHmD558DgZq',
            title: 'Hola',
            body: 'Mundo'
        }
    }
}

let store = mockStore(initState)

describe('Pruebas en las acciones del auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    test('login y logout deben de crear la accion respectiva', () => {

        const uid = 'ABC123';
        const displayName = 'Gaston'

        const loginAction = login(uid, displayName);

        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                displayName: displayName,
                uid: uid
            }
        });

        expect(logoutAction).toEqual({
            type: types.logout
        });

        
    })
    
    test('debe de realizar el startLogout', async() => {

        await store.dispatch(startLogout());

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.logout
        })

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        })
        
    })

    test('debe de iniciar el startLoginEmailPassword ', async() => {

        jest.setTimeout(10000);

        await store.dispatch(startLoginEmailPassword('test@test.com', '123456'));

        const actions = store.getActions();

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'j79H5dZAqpRn1J5rrGiHUIC6ufv2',
                displayName: null
            } 
        })


        
    })
    
    
    
})
