import React from 'react';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { setVisibilityFilter } from '../actions';


// const Link = ({
//     active,
//     children,
//     onClick
// }) => {
//     if(active) {
//         return <span>{children}</span>
//     }
//     return (
//     <a 
//         href="#"
//         onClick={e => {
//             e.preventDefault();
//             onClick();
//         }}
//     >
//         {children}
//     </a>
    
//     )
// }

// const mapStateToPropsFilterLink = (state, ownProps) => {
//     return {
//         active: state.visibilityFilter === ownProps.filter
//     }
// }

// const mapDispatchToPropsFilterLink = (dispatch, ownProps) => {
//     return {
//         onClick: () => dispatch(
//             setVisibilityFilter(ownProps.filter)
//         ) 
//     };
// }

// const FilterLinkContainer = connect(mapStateToPropsFilterLink, mapDispatchToPropsFilterLink)(Link);

const FilterLinkContainer = ({ filter, children }) => {
    return (
        <NavLink
            to={filter === 'all' ? '' : filter}
            activeStyle={{
                textDecoration: 'none',
                color: 'black'
            }}
        >
            {children}
        </NavLink>
    )
}

export default () => (
    <p>
        {" "}<FilterLinkContainer filter='all' >Show all</FilterLinkContainer>
        {" "}<FilterLinkContainer filter='active' >Show active</FilterLinkContainer>
        {" "}<FilterLinkContainer filter='completed' >Show completed</FilterLinkContainer>
    </p>
)