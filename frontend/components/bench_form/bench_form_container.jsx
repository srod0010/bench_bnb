import {connect} from 'react-redux';
import BenchForm from './bench_form';
import React from 'react';


const msp = (state, {location}) => {
    // debugger;
    return({
        lat: new URLSearchParams(location.search).get("lat"),
        lng: new URLSearchParams(location.search).get("lng"),
    })
}

const mdp = dispatch => ({
    dispatch: 'dispatch'
})
export default connect(msp,mdp)(BenchForm);