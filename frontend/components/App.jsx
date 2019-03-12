import React from 'react';
import { Provider } from 'react-redux';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import BenchIndexContainer from './bench_index_container';
import SearchContainer from './search/search_container';
import BenchFormContainer from './bench_form/bench_form_container';

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SearchContainer} />
        <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
    </div>
)

export default App;