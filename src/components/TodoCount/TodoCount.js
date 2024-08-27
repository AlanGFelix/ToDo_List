import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCount(){
  const { todoItems } = React.useContext(TodoContext);

  const completed = todoItems.filter((todo)=>todo.completed).length;
  const total = todoItems.length;

  return(
    React.createElement(
      'h1',
      null,
      `
      Completaste ${completed} de ${total} Todo's
      `
    )
  );
}

export {TodoCount};