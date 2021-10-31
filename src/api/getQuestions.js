import api from './api';

const getQuestionApi = async () => {
    try {
        const newQuestion = await api.get('/question');
        return newQuestion.data;
    } catch (err) {
        throw new Error();
    }
};

export default {
    getQuestionApi
};
