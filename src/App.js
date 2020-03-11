import React from 'react';
import Main from './layout/Main';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ForgotPassword } from './components/ForgotPassword';
import { Route, Switch } from "react-router-dom";

const App = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/forgotPassword" exact component={ForgotPassword} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute>
            <Main />
        </PrivateRoute>
    </Switch>

);

export default App;
