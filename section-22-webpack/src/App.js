import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import Sushi from './containers/Sushi';
import asyncComponent from './hoc/asyncComponent';

const asyncSushi = asyncComponent(() => {
    return import('./containers/Sushi');
})

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> |
                    <Link to="/sushi">Sushi</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users}/>
                    <Route path="/sushi" component={asyncSushi}/>
                </div>
            </div>
        );
    }
}

export default App;