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

