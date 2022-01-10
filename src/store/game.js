'use strict';

import data from '../api/startGame';

export const GET_GAME_STATUS = 'GET_GGAME_STATUS';
export const GET_PLAYER_ELIMINATED = 'GET_PLAYER_ELIMINATED';
export const GET_SQUID_COMPLETED = 'GET_SQUID_COMPLETED';
export const GET_PLAYER_POSITION = 'GET_PLAYER_POSITION';
export const GET_GAME_ERROR = 'GET_GAME_ERROR';

export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const SET_PLAYER_ELIMINATED = 'SET_PLAYER_ELIMINATED';
export const SET_SQUID_COMPLETED = 'SET_SQUID_COMPLETED';
export const SET_PLAYER_POSITION = 'SET_PLAYER_POSITION';
export const SET_GAME_ERROR = 'SET_GAME_ERROR';

export const START_GAME = 'START_GAME';
export const MAKE_JUMP = 'MAKE_JUMP';

const getters = {
    [GET_GAME_STATUS]: (state) => state.gameStatus,
    [GET_PLAYER_ELIMINATED]: (state) => state.gameEliminated,
    [GET_SQUID_COMPLETED]: (state) => state.completed,
    [GET_PLAYER_POSITION]: (state) => state.position,
    [GET_GAME_ERROR]: (state) => state.gameError,
};

const mutations = {
    [SET_GAME_STATUS]: (state, payload) => {
        state.gameStatus = payload
    },
    [SET_PLAYER_ELIMINATED]: (state, payload) => {
        state.gameEliminated = payload
    },
    [SET_SQUID_COMPLETED]: (state, payload) => {
        state.completed = payload
    },
    [SET_PLAYER_POSITION]: (state, payload) => {
        state.position = payload
    },
    [SET_GAME_ERROR]: (state, payload) => {
        state.gameError = payload
    },
};

const getDefaultState = () => {
    return {
        gameStatus: false,
        gameEliminated: false,
        completed: null,
        position: null,
        gameError: false,
    }
  };
  

const actions = {
    async [START_GAME] ({ commit }, signature, address){
        try {
            const res = await data.startGameApi(signature, address);
            commit(SET_GAME_STATUS, res.gameStatus);
            commit(SET_PLAYER_ELIMINATED, false);
            commit(SET_SQUID_COMPLETED, false);
            commit(SET_PLAYER_POSITION, 0);
            commit(SET_GAME_ERROR, false);
        } catch (err) {
            commit(SET_GAME_ERROR, true);
        }
    },
};

const initialState = getDefaultState();

export default {
    state: initialState,
    getters,
    mutations,
    actions
}