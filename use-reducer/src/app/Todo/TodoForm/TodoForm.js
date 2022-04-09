import { useRef } from 'react';
import { ACTIONS } from '../Todo';
import './TodoForm.css';

export function TodoForm({ dispatch }) {
    const inputRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: ACTIONS.AddTodo, title: inputRef.current?.value });
        e.target.reset();
        inputRef.current?.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} autoFocus />
            <button>Add</button>
        </form>
    );
}