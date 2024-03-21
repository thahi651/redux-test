

import React from 'react';
import { Provider } from 'react-redux';
import todoStore from './todoStore';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;