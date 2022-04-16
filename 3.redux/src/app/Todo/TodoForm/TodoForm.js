import { connect } from 'react-redux';
import { addTodoAction } from '../../../state';
import './TodoForm.css';

function TodoFormFn({ dispatch }) {
    let input

    const handleSubmit = e => {
        e.preventDefault();
        if (!input.value) return;
        dispatch(addTodoAction(input.value));
        e.target.reset();
        input.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={node => input = node} autoFocus />
            <button>Add</button>
        </form>
    );
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
})

export const TodoForm = connect(mapStateToProps, mapDispatchToProps)(TodoFormFn)