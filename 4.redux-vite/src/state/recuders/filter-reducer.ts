import { Todo, ActionType, Filter } from "../models";
import { FilterTodosAction } from "../actions";

export const filterReducer = (state: string = Filter.All, { type, filter }: FilterTodosAction) => {
    switch (type) {
        case ActionType.FilterTodos:
            return filter;
        default:
            return state;
    }
};