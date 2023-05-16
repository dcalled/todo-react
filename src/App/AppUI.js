import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


export function AppUI() {

    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
                
            <TodoList> {
                error ?
                    <TodosError />
                    : loading ?
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                        : searchedTodos
                            .map(({ text, isCompleted }, index) =>
                                <TodoItem
                                    key={text}
                                    isCompleted={isCompleted}
                                    text={text}
                                    onComplete={() => completeTodo(text)}
                                    onDelete={() => deleteTodo(text)} />)}
            </TodoList>
                
            <CreateTodoButton />
            {openModal && 
            <Modal>
                <TodoForm />
            </Modal>}
        </>
    );
}