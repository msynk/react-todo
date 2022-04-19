import { ActionType } from '../models';
import { FilterTodosAction } from '../actions';

export const createFilterTodosAction = (filter: string): FilterTodosAction => ({
    type: ActionType.FilterTodos,
    filter
});