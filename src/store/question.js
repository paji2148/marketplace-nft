import data from '../api/getQuestions';

export const GET_LOADING = 'GET_LOADING';
export const GET_QUESTION = 'GET_QUESTION';
export const GET_ANSWER = 'GET_ANSWER';
export const GET_OPTIONS = 'GET_OPTIONS';
export const GET_QUESTION_NUMBER = 'GET_QUESTION_NUMBER';
export const GET_ERROR = 'GET_ERROR';

export const SET_LOADING = 'SET_LOADING';
export const SET_QUESTION = 'SET_QUESTION';
export const SET_ANSWER = 'SET_ANSWER';
export const SET_OPTIONS = 'SET_OPTIONS';
export const SET_QUESTION_NUMBER = 'SET_QUESTION_NUMBER';
export const SET_ERROR = 'SET_ERROR';

export const FETCH_NEW_QUESTION= 'FETCH_NEW_QUESTION';

const getters = {
    [GET_LOADING]: (state) => state.loading,
    [GET_QUESTION]: (state) => state.question,
    [GET_ANSWER]: (state) => state.answer,
    [GET_OPTIONS]: (state) => state.options,
    [GET_QUESTION_NUMBER]: (state) => state.questionNumber,
    [GET_ERROR]: (state) => state.error
};

const mutations = {
    [SET_LOADING]: (state, payload) => {
        state.loading = payload
    },
    [SET_QUESTION]: (state, payload) => {
        state.question = payload
    },
    [SET_ANSWER]: (state, payload) => {
        state.answer = payload
    },
    [SET_OPTIONS]: (state, payload) => {
        state.options = payload
    },
    [SET_QUESTION_NUMBER]: (state) => {
        state.questionNumber -= 1
    },
    [SET_ERROR]: (state, payload) => {
        state.error = payload
    }
};

const actions = {
    async [FETCH_NEW_QUESTION] ({ commit }){
        try {
            const res = await data.getQuestionApi();
            commit(SET_QUESTION, res.question);
            commit(SET_ANSWER, res.answer);
            commit(SET_OPTIONS, res.options);
            commit(SET_LOADING, false);
            commit(SET_QUESTION_NUMBER);
            commit(SET_ERROR, false);
        } catch (err) {
            commit(SET_ERROR, true);
        }
    }
};

const initialState = {
    loading: true,
    question: [],
    answer: null,
    options: [],
    questionNumber: 10,
    error: false
}
export default {
    state: initialState,
    getters,
    mutations,
    actions
}