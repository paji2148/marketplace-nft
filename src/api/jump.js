import api from './api';

const jumpAPi = async (curPosition) => {
    try {
        const game = await api.post('/jump', curPosition);
        console.log(game.data)
        return game.data;
    } catch (err) {
        throw new Error();
    }
};

export default {
    jumpAPi
};
