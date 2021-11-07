export const GET_IS_WALLET_CONNECTED = 'GET_IS_WALLET_CONNECTED';
export const GET_ACCOUNT_ADDRESS = 'GET_ACCOUNT_ADDRESS';
export const GET_CHAIN = 'GET_CHAIN';

export const SET_IS_WALLET_CONNECTED = 'SET_IS_WALLET_CONNECTED';
export const SET_ACCOUNT_ADDRESS = 'SET_ACCOUNT_ADDRESS';
export const SET_CHAIN = 'SET_CHAIN';

const getters = {
    [GET_IS_WALLET_CONNECTED]: (state) => state.isWalletConnected,
    [GET_ACCOUNT_ADDRESS]: (state) => state.walletAddress,
    [GET_CHAIN]: (state) => state.chainId,
};

const mutations = {
    [SET_IS_WALLET_CONNECTED]: (state, payload) => {
        state.isWalletConnected = payload
    },
    [SET_ACCOUNT_ADDRESS]: (state, payload) => {
        state.walletAddress = payload
    },
    [SET_CHAIN]: (state, payload) => {
        state.chainId = payload
    }
};

const actions = {

};

const initialState = {
    isWalletConnected: false,
    walletAddress: null,
    chainId: null
};

export default {
    state: initialState,
    getters,
    mutations,
    actions
}
