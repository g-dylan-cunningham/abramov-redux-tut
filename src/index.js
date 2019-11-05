import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { todoApp } from './reducers/reducer';

const Link = ({
    active,
    children,
    onClick
}) => {
    if(active) {
        return <span>{children}</span>
    }
    return (
    <a 
        href="#"
        onClick={e => {
            e.preventDefault();
            onClick();
        }}
    >
        {children}
    </a>
    
    )
}

const mapStateToPropsFilterLink = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    }
}

const mapDispatchToPropsFilterLink = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: ownProps.filter
        }) 
    };
}

const FilterLinkContainer = connect(mapStateToPropsFilterLink, mapDispatchToPropsFilterLink)(Link);

const Footer = () => (
    <p>
        {" "}<FilterLinkContainer filter="SHOW_ALL" >Show all</FilterLinkContainer>
        {" "}<FilterLinkContainer filter="SHOW_ACTIVE" >Show active</FilterLinkContainer>
        {" "}<FilterLinkContainer filter="SHOW_COMPLETED" >Show completed</FilterLinkContainer>
    </p>
)

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
            dispatch({
                type:"TOGGLE_TODO",
                id
            })
        }
    }
}

const VisibleToDoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);






let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input  
                ref={node =>{
                    input = node;
                }}
            />
            <button 
                onClick={ () => {
                    dispatch({
                        type:"ADD_TODO",
                        id:nextId++,
                        text: input.value
                    })
                        input.value = '';
                    }
                }
            >add</button>
        </div>
)}
AddTodo = connect()(AddTodo);

// no reason to subscribe to state. if all we want is dispatch, just connect and it's default
// AddTodo = connect(
//     state => {
//         return {};
//     },
//     dispatch => {
//         return { dispatch };
//     }
// )(AddTodo);

let nextId = 0;
const TodoApp = () => {
    return (
        <div>
            <AddTodo />
            <VisibleToDoList />
            <Footer />
        </div>
    )
}




// const render = () => {
    ReactDOM.render(
        <Provider store={createStore(todoApp)}>
            {/* <StoreContext.Provider> */}
                <TodoApp />
            {/* </StoreContext.Provider> */}
        </Provider>, document.getElementById('root'));
// }
// render();
// store.subscribe(render);








// counter ReactDOM arg
{/* <Counter
    value={store.getState().counter}
    increment={
        () => store.dispatch({
            type:"INCREMENT"
        })
    }
    decrement={
        () => store.dispatch({
            type:"DECREMENT"
        })
    }
/> */}


// counter component
// const Counter = ({
//     value,
//     increment,
//     decrement
// }) => (
//     <React.Fragment>
//         {value}
//         <button onClick={increment}>+</button>
//         <button onClick={decrement}>-</button>
//     </React.Fragment>
// )

