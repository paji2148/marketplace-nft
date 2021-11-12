export const GET_QUESTION_STATUS = 'GET_QUESTION_STATUS';
export const GET_QUESTION_STATUS = 'GET_QUESTION_STATUS';

export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const SET_GAME_STATUS = 'SET_GAME_STATUS';

const getters = {
    [GET_GAME_STATUS]: (state) => state.gameStatus,
    // [GET_REFRESH_TIMER]: (state) => state.gameStatus,
};

const mutations = {
    [SET_GAME_STATUS]: (state, payload) => {
        state.gameStatus = payload
    },
};

const actions = {           
};

const initialState = {
    gameStatus: null
};

export default {
    state: initialState,
    getters,
    mutations,
    actions
}