import {AiOutlineCheck, AiOutlineDelete} from 'react-icons/ai';

function TodoItem({items, setTodoItems,text, completed, actualizaLocalStorage}){
  let icon;
  if (completed) {
    icon = <AiOutlineCheck
    className='button-check--active'
    />;
  }else{
    icon = <AiOutlineCheck
      onMouseEnter={(event)=>{
          let botonCheck = event.target;

          botonCheck.classList.add('button-check--active');
        }
      }
      onMouseLeave={
        (event)=>{
          let botonCheck = event.target;

          botonCheck.classList.remove('button-check--active');
        }
        }
    />;
  }
  return(
    <li>
      <span
      className="check-button"
      onClick={(event)=>{
          let todoElegido;
          if(event.target.tagName === 'svg') {
            todoElegido = event.target.parentNode.parentNode.children[1].innerText;
          } else if(event.target.tagName === 'path') {
            todoElegido = event.target.parentNode.parentNode.parentNode.children[1].innerText;
          } else {
            todoElegido = event.target.parentNode.children[1].innerText;
          }

          let todos = items.map((todo)=>{
            if(todo.text === todoElegido){
              todo.completed = !todo.completed;
            }
            return todo;
          });

          setTodoItems(todos);
          actualizaLocalStorage(todos);
        }
      }
      >{icon}</span>
      <p>{text}</p>
      <span
        className="delete-button"
        onClick={(event)=>{
            let todoElegido = event.target.parentNode.parentNode.children[1].innerText;

            let todos = items.filter(todo => todo.text !== todoElegido);
            setTodoItems(todos);
            actualizaLocalStorage(todos);
          }
        }
      ><AiOutlineDelete/></span>
    </li>
  );
}

export {TodoItem};