let nextId = 0;
const addTodo = (text) => ({
    type: "ADD_TODO",
    id: nextId++,
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