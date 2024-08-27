import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);
  return (
    <button 
      type="button"
      onClick={()=>{
          setOpenModal(true);
        }
      }
      >
      <span><AiOutlinePlus/></span>
    </button>
  )
}

export {CreateTodoButton}