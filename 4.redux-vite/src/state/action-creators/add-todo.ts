import { ActionType } from "../models";
import { TodosAction } from "../actions";

let lastTodoId = 0;
export const createAddTodoAction = (title: string): TodosAction => ({
    type: ActionType.AddTodo,
    id: lastTodoId++,
    title
});