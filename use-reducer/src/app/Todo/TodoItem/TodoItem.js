import { useRef, useEffect, useState } from 'react';
import { ACTIONS } from '../reducer';
import './TodoItem.css';

export function TodoItem({ todo, dispatch }) {
    const inputRef = useRef();

    const [isEditing, setIsEditing] = useState(false);

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
        dispatch({ type: ACTIONS.EditTodo, id: todo.id, title: inputRef.current?.value });
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
                        onChange={e => dispatch({ type: ACTIONS.CompleteTodo, id: todo.id })} />
                    <label htmlFor={todo.id} className="todo-label">{todo.title}</label>
                    <button onClick={handleEdit}>E</button>
                    <button onClick={e => dispatch({ type: ACTIONS.DeleteTodo, id: todo.id })}>D</button>
                </>
            )
            }
        </li >
    );
}