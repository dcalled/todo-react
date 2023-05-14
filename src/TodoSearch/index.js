import React from 'react';
import './TodoSearch.css';

export function TodoSearch({searchValue, setSearchValue}) {

    return (
        <input 
            className='TodoSearch' 
            placeholder="Search task..."
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
        />
    );
}