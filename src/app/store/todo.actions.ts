import { Action } from '@ngrx/store'
import { Todo } from '../models/todo.model'

export const ADD_TODO = '[TODO] Add'

export class AddTodo implements Action {
    readonly type = ADD_TODO

    constructor(public payload: Todo) {}
}

export type Actions = AddTodo