import { ACTIONS } from './ACTIONS';

export const deleteTodoAction = (id) => ({
    type: ACTIONS.DeleteTodo,
    id
});