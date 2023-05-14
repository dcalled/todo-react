import React from 'react';
import { TodoIcon } from './';

export function CompleteIcon({ isCompleted, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={isCompleted ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}