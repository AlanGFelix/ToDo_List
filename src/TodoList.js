function TodoList({children, completed, items}) {
  let className = '',
  text,
  itemsLength;
  if(completed){
    className = 'completed';
    text = "Completed";
    itemsLength = items.filter((todo)=>{
      if(todo.completed){
        return todo;
      }
      return false;
    }
    ).length;
  }else{
    text = "ToDo Tasks";
    itemsLength = items.filter((todo)=>{
      if(!todo.completed){
        return todo;
      }
      return false;
    }
    ).length;
  }
  if((itemsLength>0)){
    return (<div>
      <span>{text}</span>
      <ul className={className}>
        {children}
      </ul>
    </div>
    )
  }
  return false
}

export {TodoList}