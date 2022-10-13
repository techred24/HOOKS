import React, { useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Coding',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Reading',
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer( todoReducer, initialState );
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
        console.log({ todo });
    }
  return (
    <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">

                {/* TodoList */}
                    <TodoList todos={todos}/>
                {/* TodoList */}
            </div>

            <div className="col-5">
                <h4>Agregar TODO </h4>
                <hr />

                {/* TodoAdd onNewTodo { todo } */}
                <TodoAdd onNewTodo={handleNewTodo} />
                {/* Fin TodoAdd */}
            </div>
        </div>
    </>
  )
}
