import Vue from 'vue';
import Vuex from 'vuex';
import Question from './question';
// import Player from './player';
import Timer from './timer';
import Game from './game';
import Wallet from './wallet';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    modules: {
        // Player,
        Question,
        Timer,
        Game,
        Wallet,
        // Game2,
    }
})

export default store;