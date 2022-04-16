import { connect } from 'react-redux';
import { FILTERS_MAP, editTodoAction, deleteTodoAction, toggleTodoAction } from '../../../state';
import { TodoItem } from './TodoItem';
import './TodoList.css';

function TodoListFn({ todos, filter, dispatch }) {
    return (
        <ul className="todo-list">
            {todos.filter(FILTERS_MAP[filter]).map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEdit={(id, title) => dispatch(editTodoAction(id, title))}
                    onToggle={id => dispatch(toggleTodoAction(id))}
                    onDelete={id => dispatch(deleteTodoAction(id))} />
            ))}
        </ul>
    );
}

const mapStateToProps = (state, ownProps) => ({
    filter: state.filter,
    todos: state.todos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
})

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListFn)