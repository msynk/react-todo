import { combineReducers } from 'redux';
import { filterReducer } from './filter-reducer';
import { todosReducer } from './todos-reducer';

export const reducer = combineReducers({ filter: filterReducer, todos: todosReducer });
export { FILTERS_MAP, FILTERS_NAMES } from './filter-reducer';