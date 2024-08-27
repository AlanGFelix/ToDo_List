import { AppComponent } from './AppComponent';
import { TodoProvider } from '../TodoContext/TodoContext';
import React from 'react';

function App() {
  return (
    <TodoProvider>
      <AppComponent/>
    </TodoProvider>
  );
}

export default App;
