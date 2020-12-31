import * as TutorialActions from '../store/todo.actions'
import { Todo } from '../models/todo.model';

const initialState: Todo = {
    name: 'Initial Todo',
    timestamp: 31232312,
    user: 'me'
}

export function reducer(state = [initialState], action: TutorialActions.Actions) {
    switch(action.type) {
        case TutorialActions.ADD_TODO:
            return [...state, action.payload];
        default:
            return state;
    }
}