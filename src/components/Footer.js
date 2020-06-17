import React from 'react'
import { FILTERS } from '../actions'
import FilterLink from '../containers/FilterLink'

const Footer = () => {
    return (
        <p>
            <span>Show: </span>
            <FilterLink filter = {FILTERS.SHOW_ALL}>All</FilterLink>  
            
            <FilterLink filter = {FILTERS.SHOW_ACTIVE}>Active</FilterLink>  
            
            <FilterLink filter = {FILTERS.SHOW_COMPLETED}>Completed</FilterLink>  
        </p>
    )
}


export default Footer
