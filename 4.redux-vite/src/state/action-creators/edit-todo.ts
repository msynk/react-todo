import { ActionType } from "../models";
import { TodosAction } from "../actions";

export const createEditTodoAction = (id: number, title: string): TodosAction => ({
    type: ActionType.EditTodo,
    id,
    title
});