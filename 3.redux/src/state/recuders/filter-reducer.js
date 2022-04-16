import { ACTIONS } from "../actions";

export const FILTERS_MAP = {
    All: () => true,
    Active: todo => !todo.done,
    Completed: todo => todo.done
};

export const FILTERS_NAMES = Object.keys(FILTERS_MAP);

export const filterReducer = (state = FILTERS_NAMES[0], { type, filter }) => {
    switch (type) {
        case ACTIONS.FilterTodos:
            return filter;
        default:
            return state;
    }
};