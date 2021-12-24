import api from './api';

const loginApi = async () => {
    try {
        const login = await api.post('/login');
        return login.data;
    } catch (err) {
        throw new Error();
    }
};

export default {
    loginApi
};
