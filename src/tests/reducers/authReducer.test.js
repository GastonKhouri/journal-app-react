import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"

describe('Pruebas en authReducer', () => {

    test('debe retornar el estado de login', () => {

        const action = {
            type: types.login,
            payload: {
                uid: '123',
                displayName: 'Gaston'
            }
        }

        const state = authReducer({}, action);

        expect(state).toEqual({
            uid: '123',
            name: 'Gaston'
        });
        
    });

    test('debe retornar el estado de logout', () => {

        const action = {
            type: types.logout
        }

        const initialState = {
            uid: '123',
            name: 'Gaston'
        }

        const state = authReducer(initialState, action);

        expect(state).toEqual({});
        
    });

    test('debe retornar el estado por defecto', () => {

        const action = {
            type: 'hola'
        }

        const initialState = {
            uid: '123',
            name: 'Gaston'
        }

        const state = authReducer(initialState, action);

        expect(state).toEqual(initialState);
        
    });
    
    
})
