import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

const defaultTodos = [
  {text: 'TD1', isCompleted: false},
  {text: 'TD2', isCompleted: true},
  {text: 'TD3', isCompleted: false},
  {text: 'TD4', isCompleted: true},
];

function App() {

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted ;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      todos={todos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
