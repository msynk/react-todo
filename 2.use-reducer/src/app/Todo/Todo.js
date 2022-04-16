import { useReducer } from "react";
import { TodoFilter } from "./TodoFilter";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { reducer, initialState, FILTERS_MAP, FILTERS_NAMES } from "./reducer";

export function Todo() {
  const [{ filter, todos }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="todo">
      <TodoForm dispatch={dispatch} />
      <TodoFilter filters={FILTERS_NAMES} filter={filter} dispatch={dispatch} />
      <ul className="todo-list">
        {todos.filter(FILTERS_MAP[filter]).map(todo => <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />)}
      </ul>
    </div>
  );
}