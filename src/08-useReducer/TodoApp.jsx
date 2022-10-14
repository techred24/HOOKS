import React, { useEffect, useReducer } from 'react'
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


export const TodoApp = () => {
    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();
    
  return (
    <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">

                {/* TodoList */}
                    <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
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
