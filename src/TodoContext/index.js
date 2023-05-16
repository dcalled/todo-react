import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext();

export function TodoProvider({ children }) {

    const { item: todos, saveItem: saveTodos, loading, error, setError } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const totalTodos = todos.length;
    const completedTodos = todos.filter(({ isCompleted }) => isCompleted).length;

    const searchedTodos = todos.filter(({ text }) => text.toLowerCase().includes(searchValue.toLowerCase()));

    const addTodo = newTodo => {
        if(todos.findIndex(({text}) => text === newTodo) !== -1) {
            setError('Todo already exists');
            return;
        }
        const newTodos = [...todos, {text: newTodo, isCompleted: false}];
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
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
        <TodoContext.Provider value={{
            todos, 
            searchValue, 
            setSearchValue, 
            completeTodo, 
            deleteTodo, 
            totalTodos, 
            completedTodos, 
            searchedTodos, 
            loading, 
            error, 
            openModal, 
            setOpenModal, 
            addTodo,
            setError,
        }}>
            {children}
        </TodoContext.Provider>
    );
}