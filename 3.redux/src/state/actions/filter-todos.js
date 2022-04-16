import { ACTIONS } from './ACTIONS';

export const filterTodosAction = filter => ({
    type: ACTIONS.FilterTodos,
    filter
});