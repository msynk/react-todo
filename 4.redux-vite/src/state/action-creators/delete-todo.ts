import { ActionType } from "../models";
import { TodosAction } from "../actions";

export const createDeleteTodoAction = (id: number): TodosAction => ({
    type: ActionType.DeleteTodo,
    id
});