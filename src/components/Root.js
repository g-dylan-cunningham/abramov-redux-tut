import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';


export default ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
)
