import api from './api';

const getWalletApi = async () => {
    try {
        const userWallet = await api.get('/wallet');
        return userWallet.data;
    } catch (err) {
        throw new Error();
    }
};

export default {
    getWalletApi
};
