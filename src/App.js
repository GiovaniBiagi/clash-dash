import React from 'react';
import Main from './layouts/Main';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import { Route, Switch } from "react-router-dom";

const App = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute>
            <Main />
        </PrivateRoute>
    </Switch>

);

export default App;
