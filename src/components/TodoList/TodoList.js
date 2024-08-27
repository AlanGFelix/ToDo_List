import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoList({ children, completed }) {
  const { todoItems: items, checkTodo, deleteTodo } = React.useContext(TodoContext);

  let className = '',
  text,
  itemsLength;

  if(completed){
    className = 'completed';
    text = "Completed";
    itemsLength = items.filter((todo)=> todo.completed).length;
  }else{
    text = "ToDo Tasks";
    itemsLength = items.filter((todo)=> !todo.completed).length;
  }

  if((itemsLength>0)){
    return (
    <div>
      <span>{text}</span>
      <ul className={className}>
        {children.map(todo => {
          return <TodoItem
          key = {todo.text}
          text = {todo.text}
          completed = {todo.completed}
          checkTodo = {checkTodo}
          deleteTodo = {deleteTodo}
        />;
        })}
      </ul>
    </div>
    )
  }
  return false
}

export {TodoList}