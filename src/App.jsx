import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import { APP_LOAD, REDIRECT } from './action_types';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Lot from './components/lot/lot';

const mapStateToProps = (state) => ({
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    isAuthenticated: state.common.isAuthenticated,
    redirectTo: state.common.redirectTo,
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: (payload, token) => dispatch({
        type: APP_LOAD, payload, token, skipTracking: true,
    }),
    onRedirect: () => dispatch({ type: REDIRECT }),
});

const App = (props) => {
    const { appName, isAuthenticated } = props;
    return (
        <div>
            <Header
                appName={appName}
                isAuthenticated={isAuthenticated}
            />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/lots/:id" component={Lot} />
            </Switch>
            <Footer />
        </div>
    );
};
App.propTypes = {
    appName: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
