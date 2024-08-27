import {AiOutlineCheck, AiOutlineDelete} from 'react-icons/ai';


function TodoItem({checkTodo, deleteTodo,text, completed}){

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
          checkTodo(event);
        }
      }
      >{icon}</span>
      <p>{text}</p>
      <span
        className="delete-button"
        onClick={(event)=>{
            deleteTodo(event);
          }
        }
      ><AiOutlineDelete/></span>
    </li>
  );
  
}


export {TodoItem};