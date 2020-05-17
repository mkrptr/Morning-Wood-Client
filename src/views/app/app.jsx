/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import './app.css';
import Header from './components/header/header';
import Home from '../home/home';
import Footer from './components/footer/footer';
import Login from '../login/login';
import Lot from '../lot/lot';
import Catalog from '../catalog/catalog';
import Register from '../signup/signup';

const App = withRouter(observer((props) => {
    const { appName } = props;

    return (
        <div>
            <Header
                appName={appName}
            />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/lots/:id" component={Lot} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/register" component={Register} />
            </Switch>
            <Footer />
        </div>
    );
}));

App.propTypes = {
    appName: PropTypes.string.isRequired,
};

export default App;
