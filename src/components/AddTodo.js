import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

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
                    dispatch(
                        addTodo(input.value)
                    )
                        input.value = '';
                    }
                }
            >add</button>
        </div>
)}

export default connect()(AddTodo);



// no reason to subscribe to state. if all we want is dispatch, just connect and it's default
// AddTodo = connect(
//     state => {
//         return {};
//     },
//     dispatch => {
//         return { dispatch };
//     }
// )(AddTodo);