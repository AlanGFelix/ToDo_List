import React from 'react';

function TodoCount({ todoItems }){
  const completed = todoItems.filter((todo)=>todo.completed).length;
  const total = todoItems.length;

  return(
    <h1>Completaste {completed} de {total} Todo's</h1>
  );
}

export {TodoCount};