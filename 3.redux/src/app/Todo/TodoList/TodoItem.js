import { useRef, useEffect, useState } from 'react';
import './TodoList.css';

export function TodoItem({ todo, onToggle, onEdit, onDelete }) {
    const inputRef = useRef();

    const [isEditing, setIsEditing] = useState();

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.setAttribute('value', todo.title);
            inputRef?.current?.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEditing]);

    const handleEdit = e => {
        setIsEditing(true);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsEditing(false);
        onEdit(todo.id, inputRef.current?.value);
    }

    return (
        <li className="todo-item">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input ref={inputRef} />
                    <button type="submit">Ok</button>
                    <button type="button" onClick={e => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <input
                        id={todo?.id}
                        type="checkbox"
                        defaultChecked={todo.done}
                        onChange={e => onToggle(todo.id)} />
                    <label htmlFor={todo.id} className="todo-label">{todo.title}</label>
                    <button onClick={handleEdit}>E</button>
                    <button onClick={e => onDelete(todo.id)}>D</button>
                </>
            )
            }
        </li>
    );
}