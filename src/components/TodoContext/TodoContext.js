import { useLocalStorage } from './UseLocalStorage';
import React from 'react';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
    items: todoItems,
    saveItem: setTodoItems,
    loading,
    error
    } = useLocalStorage('todos', []);
    const [searchValue,setSearchValue] = React.useState('');
    const [ openModal, setOpenModal ] = React.useState(false);

    const searchedTodo = todoItems.filter((todo)=>{
    let nombreItem = todo.text.toLowerCase();
    return nombreItem.includes(searchValue);
    });

    const checkTodo = (event) => {
        let todoElegido;
        if(event.target.tagName === 'svg') {
            todoElegido = event.target.parentNode.parentNode.children[1].innerText;
        } else if(event.target.tagName === 'path') {
            todoElegido = event.target.parentNode.parentNode.parentNode.children[1].innerText;
        } else {
            todoElegido = event.target.parentNode.children[1].innerText;
        }

        let todos = todoItems.map((todo)=>{
            if(todo.text === todoElegido){
            todo.completed = !todo.completed;
            }
            return todo;
        });

        setTodoItems(todos);
    }

    const deleteTodo = (event) => {
        let todoElegido = event.target.parentNode.parentNode.children[1].innerText;

        let todos = todoItems.filter(todo => todo.text !== todoElegido);
        setTodoItems(todos);
    }

    return (
        <TodoContext.Provider value={{
            loading, error, todoItems, setTodoItems, setSearchValue, searchedTodo, checkTodo, deleteTodo, openModal, setOpenModal
        }}>
            { children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };