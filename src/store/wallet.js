import data from '../api/wallet';

export const GET_IS_WALLET_CONNECTED = 'GET_IS_WALLET_CONNECTED';
export const GET_ACCOUNT_ADDRESS = 'GET_ACCOUNT_ADDRESS';
export const GET_INGAME_CLG = 'GET_INGAME_CLG';
export const GET_LIFE_TOKEN = 'GET_LIFE_TOKEN';
export const GET_CHAIN = 'GET_CHAIN';
export const GET_ERROR = 'GET_ERROR';

export const SET_IS_WALLET_CONNECTED = 'SET_IS_WALLET_CONNECTED';
export const SET_ACCOUNT_ADDRESS = 'SET_ACCOUNT_ADDRESS';
export const SET_INGAME_CLG = 'SET_INGAME_CLG';
export const SET_LIFE_TOKEN = 'SET_LIFE_TOKEN';
export const SET_CHAIN = 'SET_CHAIN';
export const SET_ERROR = 'SET_ERROR';

export const FETCH_USER_WALLET = 'FETCH_USER_WALLET';

const getters = {
    [GET_IS_WALLET_CONNECTED]: (state) => state.isWalletConnected,
    [GET_ACCOUNT_ADDRESS]: (state) => state.walletAddress,
    [GET_INGAME_CLG]: (state) => state.clgTokenAmount,
    [GET_LIFE_TOKEN]: (state) => state.lifeTokenAmount,
    [GET_CHAIN]: (state) => state.chainId,
};

const mutations = {
    [SET_IS_WALLET_CONNECTED]: (state, payload) => {
        state.isWalletConnected = payload
    },
    [SET_ACCOUNT_ADDRESS]: (state, payload) => {
        state.walletAddress = payload
    },
    [SET_INGAME_CLG]: (state, payload) => {
        state.clgTokenAmount = payload
    },
    [SET_LIFE_TOKEN]: (state, payload) => {
        state.lifeTokenAmount = payload
    },
    [SET_CHAIN]: (state, payload) => {
        state.chainId = payload
    }
};

const actions = {
    async [FETCH_USER_WALLET] ({ commit }){
        try {
            const res = await data.getWalletApi();
            console.log('dkndjkbdjhbdjbdkjbdkbdk');
            // const res = await data.getWalletApi();
            commit(SET_INGAME_CLG, res.clg);
            commit(SET_LIFE_TOKEN, res.life);
            console.log('dlnkdnkldnkdl')
        } catch (err) {
            commit(SET_ERROR, true);
        }
    }
};

const initialState = {
    isWalletConnected: false,
    walletAddress: null,
    clgTokenAmount: null,
    lifeTokenAmount: null,
    chainId: null
};

export default {
    state: initialState,
    getters,
    mutations,
    actions
}
