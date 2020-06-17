import { connect } from 'react-redux'
import Link from '../components/Link'
import { acFilter } from '../actions'


const mapStateToProps = (state, ownProps) => {
    
    return {
        active: state.filter === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callbackOnClick: () => dispatch(acFilter(ownProps.filter))
    }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
