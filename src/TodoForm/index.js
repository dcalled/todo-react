import './TodoForm.css';
import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export function TodoForm() {

    const {setOpenModal, addTodo} = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = event => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Create a new task</label>
            <textarea
                placeholder="Enter task here..."
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancel</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Add</button>
            </div>
        </form>
    );
}