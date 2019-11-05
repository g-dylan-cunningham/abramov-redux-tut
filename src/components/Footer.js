import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';


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

const mapStateToPropsFilterLink = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    }
}

const mapDispatchToPropsFilterLink = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(
            setVisibilityFilter(ownProps.filter)
        ) 
    };
}

const FilterLinkContainer = connect(mapStateToPropsFilterLink, mapDispatchToPropsFilterLink)(Link);

export default () => (
    <p>
        {" "}<FilterLinkContainer filter="SHOW_ALL" >Show all</FilterLinkContainer>
        {" "}<FilterLinkContainer filter="SHOW_ACTIVE" >Show active</FilterLinkContainer>
        {" "}<FilterLinkContainer filter="SHOW_COMPLETED" >Show completed</FilterLinkContainer>
    </p>
)