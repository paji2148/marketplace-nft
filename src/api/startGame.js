import api from './api';

const startGameApi = async () => {
    try {
        const game = await api.post('/play');
        
        return game.data;
    } catch (err) {
        throw new Error();
    }
};

export default {
    startGameApi
};
