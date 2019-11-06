import todo from './todoReducer';

export const todos = (state = [], action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined, action)
            ];
        case "TOGGLE_TODO":
            return state.map(t => todo(t, action));
        default: 
            return state;
    }
}

export default todos;

// export const visibilityFilter = (state = "SHOW_ALL", action) => {
//     switch(action.type) {
//         case "SET_VISIBILITY_FILTER":
//             return action.filter;
//         default:
//             return state;
//     }
// }



export const getVisibleTodos = (
    state,
    filter
) => {
    switch(filter) {
        case "all":
            return state;
        case "completed":
            return state.filter(
                todo => todo.completed
            );
        case "active":
            return state.filter(
                todo => !todo.completed
            )
        default:
            return [];
    }
}