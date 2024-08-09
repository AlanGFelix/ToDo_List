import { TodoCount } from './TodoCount';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { CreateTodoModal } from './CreateTodoModal';
import React from 'react';

// [
//   {text: 'Completar Curso de React.js', completed: false},
//   {text: 'Terminar Escuela de JavaScript', completed: false},
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Hacer Tarea', completed: false},
// ]

// localStorage.setItem('todos', JSON.stringify(
//   [
//   {text: 'Completar Curso de React.js', completed: false},
//   {text: 'Terminar Escuela de JavaScript', completed: false},
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Hacer Tarea', completed: false},
// ]
// ));

function actualizaLocalStorage(nuevosItems) {
  localStorage.setItem('todos', JSON.stringify(nuevosItems));
}


function App() {
  const [searchValue,setSearchValue] = React.useState('');
  const [todoItems, setTodoItems] = React.useState(() => localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

  const searchedTodo = todoItems.filter((todo)=>{
    let nombreItem = todo.text.toLowerCase();
    return nombreItem.includes(searchValue);
  });

  return (
    <>
      <TodoCount
        completed={todoItems.filter((todo)=>todo.completed).length}
        total={todoItems.length}
      />
      <TodoSearch 
        items={todoItems}
        setSearchValue={setSearchValue}
      />

      <TodoList
      completed={true}
      items = {todoItems}>
        {
          searchedTodo.map(
            todo => {
              if(todo.completed){
                return <TodoItem
                  key = {todo.text}
                  text = {todo.text}
                  completed = {todo.completed}
                  items = {todoItems}
                  setTodoItems = {setTodoItems}
                  actualizaLocalStorage = {actualizaLocalStorage}
                />;
              }
              return false;
            }
          )
        }
      </TodoList>
      
      <TodoList completed={false}
      items = {todoItems}>
        {
          searchedTodo.map(
            todo => {
              if(!todo.completed){
                return <TodoItem
                  key = {todo.text}
                  text = {todo.text}
                  completed = {todo.completed}
                  items = {todoItems}
                  setTodoItems = {setTodoItems}
                  actualizaLocalStorage = {actualizaLocalStorage}
                  />
              }
              return false;
            }
            )
        }
        </TodoList>
      <CreateTodoButton/>
      {
        <CreateTodoModal
        items = {todoItems}
        setTodoItems = {setTodoItems}
        actualizaLocalStorage = {actualizaLocalStorage}
      />
      }
    </>
  );
}

export default App;
