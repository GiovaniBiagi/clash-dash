import defConfig from '../service/axios';

export const fetchPlayerData = (supercellId) => {
    const request = defConfig.get(`/players/${supercellId}`,{ 
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'text/html; charset=UTF-8',
            'Accept': 'application/json',
        },
    });

    return request;
}