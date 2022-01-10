import Vue from 'vue';
import Vuex from 'vuex';
import Game from './game';
import Wallet from './wallet';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    modules: {
        Game,
        Wallet,
    }
})

export default store;