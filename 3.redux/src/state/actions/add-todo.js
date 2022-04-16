import { ACTIONS } from './ACTIONS';

let lastTodoId = 0;
export const addTodoAction = title => ({
    type: ACTIONS.AddTodo,
    id: lastTodoId++,
    title
});