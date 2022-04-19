import { useDispatch, useSelector } from 'react-redux';
import { createFilterTodosAction, Filter, TodoState } from '../../../state';
import './TodoFilter.css';

const FILTERS = Object.keys(Filter)

export function TodoFilter() {
    const filter = useSelector<TodoState, string>(state => state.filter)
    const dispatch = useDispatch()

    return (
        <div className="todo-filter">
            {FILTERS.map(f =>
                <button
                    key={f}
                    className={f === filter ? 'selected-filter' : ''}
                    onClick={e => dispatch(createFilterTodosAction(f))}>
                    {f}
                </button>)}
        </div>
    );
}