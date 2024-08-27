import { TodoCount } from '../TodoCount/TodoCount';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoModal } from '../TodoModal/TodoModal';
import { TodoContext } from '../TodoContext/TodoContext';
import React from 'react';

function AppComponent() {
  const { loading, error, searchedTodo, openModal } = React.useContext(TodoContext);

  return (
    <>
      <TodoCount/>
      <TodoSearch/>

      {loading ? <p>Cargando todos...</p> : null}
      {error ? <p>Ha habido un error!!</p> : null}

      <TodoList
        completed = { true }
      >
        {
          searchedTodo.filter(
            todo => {
              return todo.completed;
            }
          )
        }
      </TodoList>
      
      <TodoList
        completed = { false }
      >
        {
          searchedTodo.filter(
            todo => {
              return !todo.completed;
            }
          )
        }
      </TodoList>
      
      <CreateTodoButton/>
      { openModal ? <TodoModal><p>Hola pibes</p></TodoModal> : null }
    </>
  )
}

export {AppComponent};