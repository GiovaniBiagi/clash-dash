import defConfig from '../service/axios';

export const fetchPlayerData = (supercellId) => {
    const request = defConfig.get(`/players/${supercellId}`,{ 
        headers: {
            'Accept': 'application/json',
            'authorization' : 'Bearer' + process.env.REACT_APP_COC_API
        },
    });

    return request;
}