import { useRef, useState } from 'react';
import './TodoForm.css';

export function TodoForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const inputRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        onAdd?.(title);
        setTitle('');
        inputRef?.current?.focus();
    };

    const handleChange = e => {
        setTitle(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                ref={inputRef} 
                autoFocus 
                value={title} 
                onChange={handleChange} />
            <button>Add</button>
        </form>
    );
}