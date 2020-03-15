/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import './App.css';
import Header from './common_components/header/header';
import Home from './views/home/home';
import Footer from './common_components/footer/footer';
import Login from './views/login/login';
import Lot from './common_components/lot/lot';
import Catalog from './views/catalog/catalog';


@inject('authStore')
@withRouter
@observer
class App extends React.Component {
    render() {
        const { appName, authStore } = this.props;
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
                    <Route path="/catalog" component={Catalog} />
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
