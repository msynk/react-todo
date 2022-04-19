import { ActionType, Todo } from "../models";
import { TodosAction } from "../actions";

export const todosReducer = (state: Todo[] = [], { type, id, title }: TodosAction): Todo[] => {
    switch (type) {
        case ActionType.AddTodo:
            return [...state, { id, title } as Todo];
        case ActionType.ToggleTodo:
            return state.map(todo => (todo.id === id) ? { ...todo, done: !todo.done } : todo);
        case ActionType.EditTodo:
            return state.map(todo => (todo.id === id) ? { ...todo, title } as Todo : todo);
        case ActionType.DeleteTodo:
            return state.filter(todo => todo.id !== id);
        default:
            return state;
    }
};