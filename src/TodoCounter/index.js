import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

export function TodoCounter() {
    const {completedTodos: completed, totalTodos: total} = React.useContext(TodoContext);
    
    return (
        <h1 className='TodoCounter'>
            {total === 0 ? <>Create your first task. </> 
            : completed === total ? 
            <>Congratulations! You have completed all your tasks. </> 
            : <>You have completed <span>{completed}</span> out of <span>{total}</span> tasks.</>}
        </h1>
    );
}