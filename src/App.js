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

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted ;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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
