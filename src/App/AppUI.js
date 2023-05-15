import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';


export function AppUI({ todos, searchValue, setSearchValue, completeTodo, deleteTodo, loading, error }) {
    if(error)
        return (
            <>
                <p>Error</p>
            </>
        );

    if(todos.length === 0)
        return (
            <>
                <p>Create your first TODO!</p>
            </>
        );

    return (
        <>
            <TodoCounter total={todos.length} completed={todos.filter(({ isCompleted }) => isCompleted).length} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList> {
                error ?
                <TodosError />
                : loading ?
                <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                </>
                : todos.filter(({ text }) => text.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(({ text, isCompleted }, index) =>
                        <TodoItem
                            key={text}
                            isCompleted={isCompleted}
                            text={text}
                            onComplete={() => completeTodo(text)}
                            onDelete={() => deleteTodo(text)} />)}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}