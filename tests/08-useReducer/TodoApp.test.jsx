import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");


describe('Tests on <TodoApp />', () => { 
    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: false }
        ],
        todoCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    });

    test('It must display the component correctly', () => {
        render( <TodoApp /> );
        // screen.debug()
        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();

        // console.log( screen.getByRole('textbox').className );
        // console.log( screen.getByRole('textbox').name );
    })
 });