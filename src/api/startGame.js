import api from './api';

const startGameApi = async (signature, address) => {
    try {
        const game = await api.post('/play', {sign: signature, publicAddress: address});
        return game.data;
    } catch (err) {
        throw new Error();
    }
};

export default {
    startGameApi
};
