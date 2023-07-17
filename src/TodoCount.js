import React from 'react';

function TodoCount({completed, total}){
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