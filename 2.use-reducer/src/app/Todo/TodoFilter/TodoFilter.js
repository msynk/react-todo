import { ACTIONS } from '../reducer';
import './TodoFilter.css';

export function TodoFilter({ filters, filter, dispatch }) {
    return (
        <div className="todo-filter">
            {filters.map(f =>
                <button
                    key={f}
                    className={f === filter ? 'selected-filter' : ''}
                    onClick={e => dispatch({ type: ACTIONS.FilterTodos, filter: f })}>
                    {f}
                </button>)}
        </div>
    );
}