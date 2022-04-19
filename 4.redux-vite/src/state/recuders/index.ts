import { combineReducers } from 'redux';
import { Todo } from '../models';
import { filterReducer } from './filter-reducer';
import { todosReducer } from './todos-reducer';

export const reducer = combineReducers<TodoState>({ filter: filterReducer, todos: todosReducer });

export interface TodoState {
    filter: string,
    todos: Todo[]
}