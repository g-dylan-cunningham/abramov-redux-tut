import { combineReducers } from 'redux';
import todos, * as fromTodos from './todosReducer';

const todoApp = combineReducers({
    todos,
    // visibilityFilter
})
export default todoApp;

// selectors go here:
export const getVisibleTodos = (state, filter) => {
    return fromTodos.getVisibleTodos(state, filter);
}