import {fetchBenches} from '../actions/bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS"

export const updateBounds = bounds => ({
    type: UPDATE_BOUNDS,
    bounds
})


export const updateFilter = bounds => (dispatch, getState) => {
    // debugger
    dispatch(updateBounds(bounds));
    return fetchBenches(getState().ui.filters)(dispatch)
}


