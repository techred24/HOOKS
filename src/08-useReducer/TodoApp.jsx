import React, { useEffect, useReducer } from 'react'
import { useTodo } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();
    
  return (
    <>
        <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount } </small></h1>
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
