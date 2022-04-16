import { ACTIONS } from "../actions";

export const todosReducer = (state = [], { type, id, title }) => {
    switch (type) {
        case ACTIONS.AddTodo:
            return [...state, { id, title }];
        case ACTIONS.ToggleTodo:
            return state.map(todo => (todo.id === id) ? { ...todo, done: !todo.done } : todo);
        case ACTIONS.EditTodo:
            return state.map(todo => (todo.id === id) ? { ...todo, title } : todo);
        case ACTIONS.DeleteTodo:
            return state.filter(todo => todo.id !== id);
        default:
            return state;
    }
};