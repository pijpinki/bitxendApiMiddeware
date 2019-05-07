import React from 'react';
import {
    Tabs,
    Tab,
    AppBar,
} from '@material-ui/core';

class NavBarContainer extends React.Component {
    // static getValue() {
    //     const { location: { pathname } } = window;
    //
    //     if (!pathname || pathname === '/') return 2;
    //     if (pathname === '')
    // }

    render() {
        return (
            <AppBar>
                <Tabs value={1}>
                    <Tab label="Статистика" value={1} />
                    <Tab label="Спиоск" value={2} />
                    <Tab label="Управление" value={3} />
                </Tabs>
            </AppBar>
        );
    }
}


export default NavBarContainer;
