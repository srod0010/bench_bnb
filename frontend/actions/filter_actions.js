import {fetchBenches} from '../actions/bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const CHANGE_FILTER = "CHANGE_FILTER";

export const updateBounds = bounds => ({
    type: UPDATE_BOUNDS,
    bounds
})

export const changeFilter = (filter, value) => ({
    type: CHANGE_FILTER,
    filter,
    value
});



// export const updateFilter = filter, => (dispatch, getState) => {
//     // debugger
//     dispatch(updateBounds(bounds));
//     return fetchBenches(getState().ui.filters)(dispatch)
// }

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBenches(getState().ui.filters)(dispatch);
};


