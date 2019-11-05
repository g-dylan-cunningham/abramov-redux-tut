import { createStore } from 'redux';
import { todoApp } from './reducers/reducer';
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
        throttle(() => {
            saveState({
                todos: store.getState().todos
            })
        }, 1000);
    })
    console.log(store.getState())

    return store;
}

export default configureStore;
