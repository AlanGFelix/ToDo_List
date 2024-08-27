import React from "react";
import { createPortal } from "react-dom";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoModal({ children }){
  const { todoItems: items, setTodoItems } = React.useContext(TodoContext);

  return createPortal(
    <div>
      { children }
    </div>,
    document.getElementById('modal')
  );
  // (
  //   <div className="CreateTodoBack invisible">
  //     <section className="CreateTodoMain">
  //       <header>
  //         <span onClick={()=>{
  //             let modal = document.querySelector('.CreateTodoBack');
  //             let nombreTodo = document.querySelector('#nombreTodo');

  //             modal.classList.add('invisible');
  //             nombreTodo.value = '';
  //           }
  //         }
  //         >X</span>
  //       </header>
  //       <main>
  //         <span>Nombre del ToDo</span>
  //         <input id="nombreTodo" placeholder="Limpiar el cuarto"/>
  //       </main>
  //       <footer>
  //         <button
  //           type="button"
  //           onClick={()=>{
  //             let nombreTodo = document.querySelector('#nombreTodo');
  //             let modal = document.querySelector('.CreateTodoBack');

  //             if(nombreTodo !== ''){
  //               let nuevosItems = [...items];

  //               nuevosItems.push({text:nombreTodo.value,completed:false});
  //               modal.classList.add('invisible');
  //               nombreTodo.value = '';
  //               setTodoItems(nuevosItems);
  //             }
  //           }}
  //         >Crear ToDo</button>
  //       </footer>
  //     </section>
  //   </div>
  // );
}

export {TodoModal};