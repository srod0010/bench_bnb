import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds, updateFilter} from '../../actions/filter_actions';
import Search from './search';


const msp = state => {
    let min = state.ui.filters.minSeating;
    return ({
        benches: Object.values(state.entities.benches),
        minSeating: state.ui.filters.minSeating,
        maxSeating: state.ui.filters.maxSeating
    })
}

const mdp = dispatch => {
    return ({
        fetchBenches: (filter) => dispatch(fetchBenches(filter)),
        updateBounds: bounds => dispatch(updateBounds(bounds)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter,value))
    })
}

export default connect(msp, mdp)(Search);


