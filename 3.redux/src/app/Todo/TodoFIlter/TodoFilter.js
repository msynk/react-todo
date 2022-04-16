import { connect } from 'react-redux';
import { FILTERS_NAMES, filterTodosAction } from '../../../state';
import './TodoFilter.css';

function TodoFilterFn({ dispatch, filter }) {
    return (
        <div className="todo-filter">
            {FILTERS_NAMES.map(f =>
                <button
                    key={f}
                    className={f === filter ? 'selected-filter' : ''}
                    onClick={e => dispatch(filterTodosAction(f))}>
                    {f}
                </button>)}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    filter: state.filter
})

export const TodoFilter = connect(mapStateToProps)(TodoFilterFn)