import { TodoFilter } from './TodoFilter';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList/TodoList';

export function TodoComponent() {
  return (
    <div className="todo">
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}