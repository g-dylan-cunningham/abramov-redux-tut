import React from 'react';
import AddTodo from './components/AddTodo';
import VisibleToDoList from './components/Todos';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom';

export default () => {
    const { filter }  = useParams();

    return (
        <div>
            <AddTodo />
            <VisibleToDoList filter={filter || 'all'}/>
            <Footer />
        </div>
    )
}