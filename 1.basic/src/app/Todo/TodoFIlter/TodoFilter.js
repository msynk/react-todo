import './TodoFilter.css';

export function TodoFilter({ filters, filter, onFilter }) {
    return (
        <div className="todo-filter">
            {filters.map(f =>
                <button
                    key={f}
                    className={f === filter ? 'selected-filter' : ''}
                    onClick={e => onFilter(f)}>
                    {f}
                </button>)}
        </div>
    );
}