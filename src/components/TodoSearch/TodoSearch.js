import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {
  const { setSearchValue } = React.useContext(TodoContext);

  return (
    <div>
      <input
            placeholder='My Todo Item'
            onChange={
              (event) =>{
                let itemBuscado = event.target.value.toLocaleLowerCase();
                setSearchValue(itemBuscado);
              }
            }
          />
    </div>
  )
}

export {TodoSearch};