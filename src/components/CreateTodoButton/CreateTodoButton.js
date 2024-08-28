import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button 
      type="button"
      onClick={()=>{
          setOpenModal(state => !state);
        }
      }
      >
      <span><AiOutlinePlus/></span>
    </button>
  )
}

export {CreateTodoButton}