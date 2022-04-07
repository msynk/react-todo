import { useState } from "react";
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

export function Todo() {
  const [todos, setTodos] = useState(TODOS);
  const [filter, setFilter] = useState(FILTERS_NAMES[0]);

  const handleAdd = title => {
    const newTodo = { id: todos.length + 1, title };
    setTodos([...todos, newTodo]);
  }

  const handleToggle = id => {
    const updatedTodos = todos.map(todo => {
      if (id === todo.id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  const handleDelete = id => {
    setTodos(todos.filter(todo => id !== todo.id));
  }

  const handleEdit = (id, title) => {
    const editedTodos = todos.map(todo => {
      if (id === todo.id) {
        return { ...todo, title: title };
      }
      return todo;
    });

    setTodos(editedTodos);
  }

  const handleFilter = f => {
    setFilter(f);
  }

  return (
    <div className="todo">
      <TodoForm onAdd={handleAdd} />
      <TodoFilter filters={FILTERS_NAMES} filter={filter} onFilter={handleFilter} />
      <ul className="todo-list">
        {todos.filter(FILTERS_MAP[filter]).map(todo => <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />)}
      </ul>
    </div>
  );
}