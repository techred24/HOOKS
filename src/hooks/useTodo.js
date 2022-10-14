import { useReducer, useEffect } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}
export const useTodo = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init );

    useEffect(() => {
        if (JSON.stringify(todos) === localStorage.getItem('todos')) return
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
        // console.log({ todo });
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }
  return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
  };
}
