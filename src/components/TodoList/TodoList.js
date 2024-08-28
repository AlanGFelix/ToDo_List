import React from 'react';

function TodoList({ children, completed, amount }) {

  let className = completed ? 'completed' : '',
  text = completed ? 'Completed' : 'ToDo Tasks';

  if(amount > 0){
    return (
    <div>
      <span>{text}</span>
      <ul className={className}>
        {children}
      </ul>
    </div>
    );
  }
}

export {TodoList}