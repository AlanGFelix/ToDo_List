import { TodoCount } from '../TodoCount/TodoCount';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoModal } from '../TodoModal/TodoModal';
import { TodoContext } from '../TodoContext/TodoContext';
import { ModalForm } from '../ModalForm/ModalForm';
import React from 'react';

function AppComponent() {
  const {
    loading,
    error,
    openModal,
    todoItems,
    setSearchValue,
    amountAvailable,
    amountCompleted,
    availableTodos,
    completedTodos,
    createTodo,
    setOpenModal
  } = React.useContext(TodoContext);



  return (
    <>
      <TodoCount todoItems = { todoItems } />
      <TodoSearch setSearchValue = { setSearchValue } />

      {loading ? <p>Cargando todos...</p> : null}
      {error ? <p>Ha habido un error!!</p> : null}

      <TodoList
        completed = { true }
        amount = { amountCompleted }
      >
        {
          completedTodos
        }
      </TodoList>
      
      <TodoList
        completed = { false }
        amount = { amountAvailable }
      >
        {
          availableTodos
        }
      </TodoList>
      
      <CreateTodoButton/>
      { openModal ?
        <TodoModal>
          <ModalForm 
            createTodo = { createTodo }
            setOpenModal = { setOpenModal }
          />
        </TodoModal>
        : null
      }
    </>
  )
}

export {AppComponent};