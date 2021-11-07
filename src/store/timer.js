export const GET_RESET_TIMER = 'GET_RESET_TIMER';

export const SET_RESET_TIMER = 'SET_RESET_TIMER';

export const RESET_TIMER_ON_STEP = 'RESET_TIMER_ON_STEP';

const getters = {
    [GET_RESET_TIMER]: (state) => state.resetTimer,
};

const mutations = {
    [SET_RESET_TIMER]: (state) => {
        state.resetTimer += 1
    },
};

const actions = {
    [RESET_TIMER_ON_STEP] ({ commit}){
        commit(SET_RESET_TIMER);
    },            
};

const initialState = {
    resetTimer: true,
};

export default {
    state: initialState,
    getters,
    mutations,
    actions
}