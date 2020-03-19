import React, { useEffect } from 'react';
import Views from '../views';
import MainWrapper from '../components/MainWrapper';

import { fetchPlayerData } from '../functions/coc'

function Main(){

    useEffect(() => {
        fetchPlayerData('922J28JJ2')
        .then(response => {
            console.log(response);
        })
        .catch(error => error);
    }, []);

    return (
    <>
        <MainWrapper>
            <Views />
        </MainWrapper>

    </>
    );
}

export default Main;