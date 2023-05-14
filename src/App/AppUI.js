import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';


export function AppUI({ todos, searchValue, setSearchValue, completeTodo, deleteTodo }) {
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