import React from "react";
import { createPortal } from "react-dom";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoModal(){
  const { setOpenModal, createTodo } = React.useContext(TodoContext);

  return createPortal(
    <div className="CreateTodoBack">
       <section className="CreateTodoMain">
        <header>
          <span onClick={()=>{
              setOpenModal(state => !state);
            }
          }
          >X</span>
        </header>
        <main>
          <span>Nombre del ToDo</span>
          <input id="nombreTodo" placeholder="Limpiar el cuarto"/>
        </main>
        <footer>
          <button
            type="button"
            onClick={()=>{
              createTodo();
            }}
          >Crear ToDo</button>
        </footer>
      </section>
    </div>,
    document.getElementById('modal')
  );
}

export {TodoModal};