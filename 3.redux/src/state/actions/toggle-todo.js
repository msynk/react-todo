import { ACTIONS } from './ACTIONS';

export const toggleTodoAction = id => ({
    type: ACTIONS.ToggleTodo,
    id
});