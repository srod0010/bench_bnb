import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds, updateFilter} from '../../actions/filter_actions';
import Search from './search';


const msp = state => {
    return ({
        benches: Object.values(state.entities.benches)
    })
}

const mdp = dispatch => {
    return ({
        fetchBenches: (filter) => dispatch(fetchBenches(filter)),
        updateBounds: bounds => dispatch(updateBounds(bounds)),
        updateFilter: bounds => dispatch(updateFilter(bounds))
    })
}

export default connect(msp, mdp)(Search);


