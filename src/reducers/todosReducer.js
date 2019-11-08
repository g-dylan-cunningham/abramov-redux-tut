import todo from './todoReducer';
import { combineReducers } from 'redux';

export const byId = (state = {}, action) => {

    switch(action.type) {
        case "ADD_TODO":
        case "TOGGLE_TODO":
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            };
        
            return state.map(t => todo(t, action));
        default: 
            return state;
    }
}

const allIds = (state = [], action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, action.id];
        default:
            return state;
    }
}

const todos = combineReducers({byId, allIds})

export default todos;


const getAllTodos = (state) =>
    state.allIds.map(id => {
        return state.byId[id]
    })

export const getVisibleTodos = (
    state,
    filter
) => {
    const allTodos = getAllTodos(state);
    switch(filter) {
        case "all":
            return allTodos;
        case "completed":
            return allTodos.filter(
                todo => todo.completed
            );
        case "active":
            return allTodos.filter(
                todo => !todo.completed
            )
        default:
            return [];
    }
}

// original implementation before normalization
// export const todos = (state = [], action) => {

//     switch(action.type) {
//         case "ADD_TODO":
//             return [
//                 ...state,
//                 todo(undefined, action)
//             ];
//         case "TOGGLE_TODO":
//             return state.map(t => todo(t, action));
//         default: 
//             return state;
//     }
// }



// export const visibilityFilter = (state = "SHOW_ALL", action) => {
//     switch(action.type) {
//         case "SET_VISIBILITY_FILTER":
//             return action.filter;
//         default:
//             return state;
//     }
// }