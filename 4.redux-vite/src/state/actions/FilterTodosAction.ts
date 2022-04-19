import { BaseAction } from "./BaseAction";

export interface FilterTodosAction extends BaseAction {
    filter: string
}