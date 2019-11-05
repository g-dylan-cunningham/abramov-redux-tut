import { v4 } from 'node-uuid';
const addTodo = (text) => ({
    type: "ADD_TODO",
    id: v4(),
    text: text
})

const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
})

const setVisibilityFilter = (filter) => ({
    type: "SET_VISIBILITY_FILTER",
    filter
})

export { addTodo, toggleTodo, setVisibilityFilter };