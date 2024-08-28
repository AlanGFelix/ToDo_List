import { TodoCount } from '../TodoCount/TodoCount';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoModal } from '../TodoModal/TodoModal';
import { TodoUtils } from './TodoUtils';
import { ModalForm } from '../ModalForm/ModalForm';
import React from 'react';

function App() {
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
  } = TodoUtils();



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
      
      <CreateTodoButton setOpenModal= { setOpenModal } />
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

export default App;
