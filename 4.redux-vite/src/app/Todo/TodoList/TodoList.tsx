import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Todo, TodoState, Filter } from '../../../state';
import { TodoItem } from './TodoItem';
import './TodoList.css';

const FILTERS_MAP: { [key: string]: (todo: Todo) => boolean } = {}
FILTERS_MAP[Filter.All] = (todo: Todo) => true
FILTERS_MAP[Filter.Active] = (todo: Todo) => !todo.done
FILTERS_MAP[Filter.Completed] = (todo: Todo) => !!todo.done

export function TodoList() {
    const { todos, filter } = useSelector<TodoState, TodoState>(state => state)

    const filteredTodos = useMemo(() => todos.filter(FILTERS_MAP[filter]), [todos, filter])
    return (
        <ul className="todo-list">
            {filteredTodos.length > 0 ? filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />) : <div>no todos</div>}
        </ul>
    );
}