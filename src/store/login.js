import data from '../api/login';

export const GET_IS_SIGNED = 'GET_IS_SIGNED';
export const GET_ERROR = 'GET_ERROR';

export const SET_IS_SIGNED = 'SET_IS_SIGNED';
export const SET_ERROR = 'SET_ERROR';

export const LOGIN_WALLET = 'LOGIN_WALLET';

const getters = {
    [GET_IS_SIGNED]: (state) => state.isSignned,
    [GET_ERROR]: (state) => state.error,
};

const mutations = {
    [SET_IS_SIGNED]: (state, payload) => {
        state.isSigned = payload
    },
    [SET_ERROR]: (state, payload) => {
        state.error = payload
    },
};

const actions = {
    async [LOGIN_WALLET] ({ commit }){
        try {
            const res = await data.login();
            commit(SET_IS_SIGNED, res.login);
        } catch (err) {
            commit(SET_ERROR, true);
        }
    }
};

const initialState = {
    isSigned: false,
    error: null
};

export default {
    state: initialState,
    getters,
    mutations,
    actions
}
