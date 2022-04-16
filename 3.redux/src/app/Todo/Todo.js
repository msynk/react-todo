import { TodoFilter } from "./TodoFIlter";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList/TodoList";

export function Todo() {
  return (
    <div className="todo">
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}