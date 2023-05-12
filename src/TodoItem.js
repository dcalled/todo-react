import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

export function TodoItem({text, isCompleted, onComplete, onDelete}) {
    return (
        <li className="TodoItem">
          <CompleteIcon onComplete={onComplete} isCompleted={isCompleted} />
          <p className={`TodoItem-p ${isCompleted ? "TodoItem-p--complete" : ""}`.trim()}>
            {text}
          </p>
          <DeleteIcon onDelete={onDelete} />
        </li>
      );
}        