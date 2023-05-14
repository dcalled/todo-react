import './TodoCounter.css';

export function TodoCounter({completed, total}) {
    return (
        <h1 className='TodoCounter'>
            {completed === total ? 
            <>Congratulations! You have completed all your tasks. </> 
            : <>You have completed <span>{completed}</span> out of <span>{total}</span> tasks.</>}
        </h1>
    );
}