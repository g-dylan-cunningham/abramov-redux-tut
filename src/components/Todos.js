import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li 
        onClick={onClick}
        style={{
            textDecoration:
            completed ?
            "line-through" : "none"
        }}
    >
        {text}
    </li>
)

const TodoList = ({
    visibleTodos,
    onTodoClick
}) => {
    return (
        <ul>
            {visibleTodos.map(todo =>
                <Todo 
                    {...todo}
                    key={todo.id}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </ul>
    )

}

// all of this is boilerplate included in connect(). Use connect to make a container component
// class VisibleToDoList extends Component {
    
//     componentDidMount() {
//         const store = this.context;
//         this.unsubscribe = store.subscribe(() =>
//             this.forceUpdate()
//         )
//     }
//     componentWillUnmount() {
//         this.unsubscribe();
//     }
//     render() {
//         const props = this.props;
//         const store = this.context;
//         const state = store.getState();
//         return (
//             <TodoList 
//                 visibleTodos={} 
//                 onTodoClick={}/>
//         )
//     }
// }
// VisibleToDoList.contextType = StoreContext;

const mapStateToProps = state => {
    return {
        visibleTodos: getVisibleTodos(
            state.todos, 
            state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (id) => {
            dispatch(
                toggleTodo(id)
            )
        }
    }
}


const getVisibleTodos = (
    todos,
    filter
) => {
    switch(filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(
                todo => todo.completed
            );
        case "SHOW_ACTIVE":
            return todos.filter(
                todo => !todo.completed
            )
        default:
            return [];
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
