import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './containers/NavBarContainer';
import HistoryContainer from './containers/HistoryContainer';
import EnterSecretContainer from './containers/EnterSecretContainer';

export default () => (
    <div>
        <NavBar />
        <div style={{
            marginTop: '50px',
            padding: '40px',
        }}>
            {!window.localStorage.secret && <EnterSecretContainer />}
            {window.localStorage.secret && (
                <Router>
                    <Route path="/" component={HistoryContainer} exact />
                    <Route path="/secret" component={EnterSecretContainer} />
                </Router>
            )}
        </div>
    </div>
);
