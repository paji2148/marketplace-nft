import api from './api';

const getNonceApi = async () => {
    try {
        const getNonce = await api.post('/getnonce');
        return getNonce.data;
    } catch (err) {
        throw new Error();
    }
};

export default {
    getNonceApi
};
