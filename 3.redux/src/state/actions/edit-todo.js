import { ACTIONS } from './ACTIONS';

export const editTodoAction = (id, title) => ({
    type: ACTIONS.EditTodo,
    id,
    title
});