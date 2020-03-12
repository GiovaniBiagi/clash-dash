import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

function PrivateRoute({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
            setIsLoading(false);
        })
    })


    if (isLoading) {
        return (
            <span>Loading...</span>
        )
    }

    if (!isAuthenticated) {
        return (
            <Redirect to='/' />
        )
    }

    return children;
}

export default PrivateRoute;