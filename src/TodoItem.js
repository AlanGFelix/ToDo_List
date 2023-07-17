import {AiOutlineCheck, AiOutlineDelete} from 'react-icons/ai';

function TodoItem({items, setTodoItems,text, completed}){
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
          let todoElegido = event.target.parentNode.parentNode.children[1].innerText;

          let todos = items.map((todo)=>{
            if(todo.text === todoElegido){
              if(completed){
                todo.completed = false;
              }else{
                todo.completed = true;
              }
              return todo;
            }else{
              return todo;
            }
          });

          setTodoItems(todos);
        }
      }
      >{icon}</span>
      <p>{text}</p>
      <span
        className="delete-button"
        onClick={(event)=>{
          let todoElegido = event.target.parentNode.parentNode.children[1].innerText;

          let todos = items.filter((todo)=>{
            if(todo.text === todoElegido){
              return false;
            }else{
              return todo;
            }
          });
          setTodoItems(todos);
          }
        }
      ><AiOutlineDelete/></span>
    </li>
  );
}

export {TodoItem};