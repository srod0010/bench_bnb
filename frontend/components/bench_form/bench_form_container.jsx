import {connect} from 'react-redux';
import BenchForm from './bench_form';
import React from 'react';


const msp = state => ({
    bench: {lat:'', lng: '', description: '', seating: 2}
})

const mdp = dispatch => ({
    dispatch: 'dispatch'
})
export default connect(msp,mdp)(BenchForm);