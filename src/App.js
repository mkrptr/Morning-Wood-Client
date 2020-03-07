import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { APP_LOAD, REDIRECT } from './action_types';
import Header from './components/header';
import Home from './components/home';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
}};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
    onRedirect: () =>
        dispatch({ type: REDIRECT })
});

class App extends React.Component {
    render() {
        return (
            <div>
                <Header appName={this.props.appName} />
                <Switch>
                </Switch>
            </div>
        );
    }  
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

