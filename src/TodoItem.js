import './TodoItem.css';

export function TodoItem({text, isCompleted, onComplete, onDelete}) {
    return (
        <li className="TodoItem">
          <span className={`Icon Icon-check ${isCompleted ? "Icon-check--active" : ""}`.trim()} onClick={onComplete}>
            V
          </span>
          <p className={`TodoItem-p ${isCompleted ? "TodoItem-p--complete" : ""}`.trim()}>
            {text}
          </p>
          <span className="Icon Icon-delete" onClick={onDelete}>
            X
          </span>
        </li>
      );
}        