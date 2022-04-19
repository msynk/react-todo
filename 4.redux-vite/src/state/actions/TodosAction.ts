import { BaseAction } from "./BaseAction";

export interface TodosAction extends BaseAction {
    id: number,
    title?: string
}