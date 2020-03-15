/* eslint-disable react/prop-types */
import React from 'react';
import { inject, observer } from 'mobx-react';

import styles from './header.module.css';
import LoggedOutView from './logged_out_view/logged_out_view';
import LoggedInView from './logged_in_view/logged_in_view';

@inject('authStore')
@observer
class Header extends React.Component {
    render() {
        const { isAuthenticated } = this.props;
        return (
            <nav className={styles.navbar}>
                <LoggedOutView isAuthenticated={isAuthenticated} />
                <LoggedInView isAuthenticated={isAuthenticated} />
            </nav>
        );
    }
}


export default Header;
