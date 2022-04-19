import { ActionType } from "../models";
import { TodosAction } from "../actions";

export const createToggleTodoAction = (id: number): TodosAction => ({
    type: ActionType.ToggleTodo,
    id
});