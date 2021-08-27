import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Pruebas en acciones del UI', () => {

    test('todas las acciones deben de funcionar', () => {

        const setErrorAction = setError('AYUDA!!');
        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(setErrorAction).toEqual({
            type: types.uiSetError,
            payload: 'AYUDA!!'
        });

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        })

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        })

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        })
        
    })
    
    
})
