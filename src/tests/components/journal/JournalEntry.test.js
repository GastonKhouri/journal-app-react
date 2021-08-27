import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import JournalEntry from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '123',
        name: 'Gaston'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: null,
        notes: []
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();

const nota = {
   id: 123,
   title: 'Hola',
   body: 'Mundo',
   date: 0,
   url: 'https://holamundo.com/hola.jpg'
}

const wrapper = mount(
    <Provider store={ store }>
        <JournalEntry { ...nota } />
    </Provider>
);

describe('Pruebas en <JournalEntry />', () => {

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe de activar la nota', () => { 

        wrapper.find('.journal__entry').prop('onClick')();

        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote( nota.id, { ...nota } )
        );
        
    })    
    
})
