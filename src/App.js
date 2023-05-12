import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'TD1', isCompleted: false},
  {text: 'TD2', isCompleted: true},
  {text: 'TD3', isCompleted: false},
  {text: 'TD4', isCompleted: true},
];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', defaultTodos);
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
    <>
      <TodoCounter total={todos.length} completed={todos.filter(({isCompleted}) => isCompleted).length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList> {
        todos.filter(({text}) => text.toLowerCase().includes(searchValue.toLowerCase()))
             .map(({text, isCompleted}, index) => 
            <TodoItem 
              key={text} 
              isCompleted={isCompleted} 
              text={text} 
              onComplete={() => completeTodo(text)}
              onDelete={() => deleteTodo(text)}/>)}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
