import React from 'react';
import AddTodo from './components/AddTodo';
import VisibleToDoList from './components/Todos';
import Footer from './components/Footer';

export default () => {
    return (
        <div>
            <AddTodo />
            <VisibleToDoList />
            <Footer />
        </div>
    )
}