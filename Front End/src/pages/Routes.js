import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './LoginPage';
import User from './Sidebar';

class Routes extends React.Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/user' component={User} />     
                    <Route render = { function() {
                        return <h1>Not Found</h1>
                    }} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;
