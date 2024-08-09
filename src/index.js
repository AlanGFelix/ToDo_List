import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/TodoCount/assets/TodoCount.css';
import './components/TodoSearch/assets/TodoSearch.css';
import './components/TodoItem/assets/TodoItem.css';
import './components/CreateTodoButton/assets/CreateTodoButton.css';
import './components/TodoModal/assets/TodoModal.css';
import './components/TodoList/assets/TodoList.css';
import './components/App/assets/App.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
