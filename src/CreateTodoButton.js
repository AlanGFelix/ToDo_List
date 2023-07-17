import {AiOutlinePlus} from 'react-icons/ai';

function CreateTodoButton() {
  return (
    <button 
      type="button"
      onClick={()=>{
          let modal = document.querySelector('.CreateTodoBack');
          modal.classList.remove('invisible');
        }
      }
      >
      <span><AiOutlinePlus/></span>
    </button>
  )
}

export {CreateTodoButton}