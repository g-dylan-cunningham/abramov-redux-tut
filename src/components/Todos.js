import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';

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

const mapStateToProps = (state, ownProps) => {
    const {match: {params: {filter}}} = ownProps
    return {
        visibleTodos: getVisibleTodos(
            state.todos, 
            filter || 'all')
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onTodoClick: (id) => {
//             dispatch(
//                 toggleTodo(id)
//             )
//         }
//     }
// }
// when this common pattern exists, we can simply pass an object in place of mapDispatchToProps var in connect function




export default withRouter(connect(mapStateToProps, {onTodoClick: toggleTodo})(TodoList));
