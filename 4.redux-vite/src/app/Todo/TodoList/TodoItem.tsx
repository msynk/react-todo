import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDeleteTodoAction, createEditTodoAction, createToggleTodoAction, Todo } from '../../../state';
import './TodoList.css';

export interface TodoItemProps {
    todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useDispatch()

    const inputRef = useRef<HTMLInputElement>(null);

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.setAttribute('value', todo.title);
            inputRef?.current?.focus();
        }
    }, [isEditing]);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsEditing(false);

        if (!inputRef.current?.value) return

        dispatch(createEditTodoAction(todo.id, inputRef.current.value))
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
                        id={todo.id.toString()}
                        type="checkbox"
                        defaultChecked={todo.done}
                        onChange={e => dispatch(createToggleTodoAction(todo.id))} />
                    <label htmlFor={todo.id.toString()} className="todo-label">{todo.title}</label>
                    <button onClick={handleEdit}>E</button>
                    <button onClick={e => dispatch(createDeleteTodoAction(todo.id))}>D</button>
                </>
            )
            }
        </li>
    );
}