import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoApp } from './reducers/reducer';
import AddTodo from './components/AddTodo';
import VisibleToDoList from './components/Todos';
import Footer from './components/Footer';


const TodoApp = () => {
    return (
        <div>
            <AddTodo />
            <VisibleToDoList />
            <Footer />
        </div>
    )
}

const persistedState = {
    todos: [{
        id: 'xxx',
        text: 'persist state',
        completed: false
        }],
    visibilityFilter: 'SHOW_ACTIVE'
}

const store = createStore(todoApp, persistedState);
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>, document.getElementById('root'));









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

