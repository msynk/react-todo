import { useRef, useEffect, useState } from 'react';
import './TodoItem.css';

export function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const inputRef = useRef();

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);

    useEffect(() => {
        if (isEditing) {
            inputRef?.current?.focus();
        }
    }, [isEditing]);

    const handleEdit = e => {
        setIsEditing(true);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsEditing(false);
        onEdit(todo.id, title);
    }

    return (
        <li className="todo-item">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input ref={inputRef} value={title} onChange={e => setTitle(e.target.value)} />
                    <button type="submit">Ok</button>
                    <button type="button" onClick={e => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <input
                        id={todo?.id}
                        type="checkbox"
                        defaultChecked={todo?.done}
                        onChange={e => onToggle?.(todo?.id)} />
                    <label htmlFor={todo?.id} className="todo-label">{todo?.title}</label>
                    <button onClick={handleEdit}>E</button>
                    <button onClick={e => onDelete?.(todo.id)}>D</button>
                </>
            )
            }
        </li >
    );
}