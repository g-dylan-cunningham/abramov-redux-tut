import { createStore } from 'redux';
import todoApp from './reducers';
import { saveState, loadLocalStorage } from './LocalStorage';
import throttle from 'lodash/throttle';

// const persistedState = {
//     todos: [{
//         id: 'xxx',
//         text: 'persist state',
//         completed: false
//         }],
//     visibilityFilter: 'SHOW_ACTIVE'
// }
const configureStore = () => {
    const persistedState = loadLocalStorage();
    const store = createStore(todoApp, persistedState);
    store.subscribe(() => {
        // console.log("ss")
        // throttle(() => {
            // console.log("SS throttle")
            saveState({
                todos: store.getState().todos
            })
        // }, 1000);
    })
    // console.log(store.getState())

    return store;
}

export default configureStore;
