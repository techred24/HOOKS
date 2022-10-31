import { todoReducer } from "../../src/08-useReducer/todoReducer";


describe('Tests on todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('It must return the initial state', () => {
        const newState = todoReducer(initialState, {});
        expect( newState ).toBe( initialState );    
    });

    test('It must add a todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('It must delete a TODO', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect( newState.length ).toBe( 0 );
    });

    test('It must do a toggle in done property', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect( newState[0].done ).toBe( true );
        const newState2 = todoReducer(newState, action);
        expect( newState2[0].done ).toBe( false );
    });
})