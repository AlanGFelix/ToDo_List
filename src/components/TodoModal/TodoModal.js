import React from "react";
import { createPortal } from "react-dom";

function TodoModal({ children }){
  return createPortal(
    <div className="CreateTodoBack">
       { children }
    </div>,
    document.getElementById('modal')
  );
}

export {TodoModal};