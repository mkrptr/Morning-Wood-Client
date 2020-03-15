/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Lot from './components/lot/lot';

@inject('authStore')
@withRouter
@observer
class App extends React.Component {
    render() {
        const { appName, authStore } = this.props;
        console.log(this.props);
        return (
            <div>
                <Header
                    appName={appName}
                    isAuthenticated={authStore.isAuthenticated}
                />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/lots/:id" component={Lot} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    appName: PropTypes.string.isRequired,
};

export default App;
