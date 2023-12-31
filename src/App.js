import { TodoCount } from './TodoCount';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { CreateTodoModal } from './CreateTodoModal';
import React from 'react';





function App() {
  const [searchValue,setSearchValue] = React.useState('');
  const [todoItems, setTodoItems] = React.useState([
      {text: 'Completar Curso de React.js', completed: false},
      {text: 'Terminar Escuela de JavaScript', completed: false},
      {text: 'Cortar Cebolla', completed: false},
      {text: 'Hacer Tarea', completed: false},
    ]
    );

    const searchedTodo = todoItems.filter((todo)=>{
      let nombreItem = todo.text.toLowerCase();
      if(nombreItem.includes(searchValue)){
        return todo;
      }else{
        return false;
      }
    });

  return (
    <>
      <TodoCount completed={
        todoItems.filter((todo)=>{
          if(todo.completed) return todo
          else return false
        }).length
        } total={todoItems.length}/>
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
                />;
              }else{
                return false;
              }
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
                  />
              }else{
                return false;
              }
            }
            )
        }
        </TodoList>
      <CreateTodoButton/>
      {
        <CreateTodoModal
        items = {todoItems}
        setTodoItems = {setTodoItems}
      />
      }
    </>
  );
}

export default App;
