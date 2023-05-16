import React from 'react';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import './TodosError.css';

export function TodosError() {
  const { error, setError, setOpenModal } = React.useContext(TodoContext);
  return (
    <Modal>
      <div className='TodoError-container'>
        <p>{error}</p>
        <button className='TodoError-button' onClick={() => {
          setError('');
          setOpenModal(false);
        }}>Ok</button>
      </div>
    </Modal>
  );
}