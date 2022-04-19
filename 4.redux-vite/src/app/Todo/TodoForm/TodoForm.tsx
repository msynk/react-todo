import { connect, useDispatch } from 'react-redux';
import { createAddTodoAction } from '../../../state';
import './TodoForm.css';

export function TodoForm() {
    const dispatch = useDispatch()

    let input: HTMLInputElement | null = null

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!input?.value) return;

        dispatch(createAddTodoAction(input.value));
        (event.target as any).reset();
        input.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={node => input = node} autoFocus />
            <button>Add</button>
        </form>
    );
}