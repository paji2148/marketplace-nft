export const GET_TIMER = 'GET_TIMER';

export const SET_TIMER = 'SET_TIMER';

export const RESET_TIMER = 'RESET_TIMER';

const getters = {
    [GET_TIMER]: (state) => state.timer,
};

const mutations = {
    [SET_TIMER]: (state) => {
        state.timer -= 1
    },
    [RESET_TIMER]: (state) => {
        state.timer = 10
    },      
};

const actions = {     
};

const initialState = {
    timer: 10,
};

export default {
    state: initialState,
    getters,
    mutations,
    actions
}