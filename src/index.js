import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { todoApp } from './reducers/reducer';
const StoreContext = React.createContext(createStore(todoApp));

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

class FilterLink extends Component {
    
    componentDidMount() {
        const store = this.context;
        this.unsubscribe = store.subscribe(() => 
            this.forceUpdate()
        ); 
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    
    render() {
        const props = this.props;
        console.log("this", this)
        const store = this.context;
        const state = store.getState();
        return (
            <Link
                active={props.filter === state.visibilityFilter}
                onClick={() =>
                    store.dispatch({
                        type: "SET_VISIBILITY_FILTER",
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
        )
    }
}
FilterLink.contextType = StoreContext;
// FilterLink.contextTypes = {
//     store: PropTypes.object
// }

const Footer = () => (
    <p>
        {" "}<FilterLink filter="SHOW_ALL" >Show all</FilterLink>
        {" "}<FilterLink filter="SHOW_ACTIVE" >Show active</FilterLink>
        {" "}<FilterLink filter="SHOW_COMPLETED" >Show completed</FilterLink>
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

class VisibleToDoList extends Component {
    
    componentDidMount() {
        const store = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        )
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const props = this.props;
        const store = this.context;
        const state = store.getState();
        return (
            <TodoList 
                visibleTodos={getVisibleTodos(state.todos, state.visibilityFilter)} 
                onTodoClick={id => {
                    store.dispatch({
                        type:"TOGGLE_TODO",
                        id
                    })
            }}/>
        )
    }
}
VisibleToDoList.contextType = StoreContext;
// VisibleToDoList.contextTypes = {
//     store: PropTypes.object
// }


const TodoList = ({
    visibleTodos,
    onTodoClick
}) => (
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

const AddTodo = (props, { store }) => {
    
    // const { store } = context;

    let input;
    return (
    <StoreContext.Consumer>
        {({dispatch}) => (
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
    </StoreContext.Consumer>
)}
// AddTodo.contextTypes = {
//     store: PropTypes.object
// }

let nextId = 0;

// class Provider extends React.Component {
//     getChildContext() {
//         return { 
//             store: this.props.store 
//         };
//     }
//     render() {
//         return this.props.children;
//     }
// }
// Provider.childContextTypes = {
//     store: PropTypes.object
// }

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
        <StoreContext.Provider value={createStore(todoApp)}>
            <TodoApp />
        </StoreContext.Provider>, document.getElementById('root'));
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

