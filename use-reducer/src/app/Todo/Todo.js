import { useReducer } from "react";
import { TodoFilter } from "./TodoFIlter";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

const TODOS = [{
  id: 1,
  title: 't1',
  done: false
}, {
  id: 2,
  title: 't2',
  done: true
}, {
  id: 3,
  title: 't3',
  done: false
}];

const FILTERS_MAP = {
  All: () => true,
  Active: todo => !todo.done,
  Completed: todo => todo.done
};

const FILTERS_NAMES = Object.keys(FILTERS_MAP);

export const ACTIONS = {
  AddTodo: 'ADD',
  CompleteTodo: 'COMPLETE',
  EditTodo: 'EDIT',
  DeleteTodo: 'DELETE',
  FilterTodos: 'FILTER'
}

const initialState = {
  todos: TODOS,
  filter: FILTERS_NAMES[0]
};

const reducer = (state, { type, title, id, filter }) => {
  switch (type) {
    case ACTIONS.AddTodo:
      const newTodo = { id: state.todos.length + 1, title };
      return { ...state, todos: [newTodo, ...state.todos] };
    case ACTIONS.CompleteTodo:
      const updatedTodos = state.todos.map(todo => {
        if (id === todo.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };
    case ACTIONS.EditTodo:
      const editedTodos = state.todos.map(todo => {
        if (id === todo.id) {
          return { ...todo, title: title };
        }
        return todo;
      });
      return { ...state, todos: editedTodos };
    case ACTIONS.DeleteTodo:
      return { ...state, todos: state.todos.filter(todo => id !== todo.id) };
    case ACTIONS.FilterTodos:
      return { ...state, filter };
    default:
      return state;
  }
}

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