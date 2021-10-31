import Vue from 'vue';
import Vuex from 'vuex';
import Question from './question';
import Player from './player';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    modules: {
        Player,
        Question,
    }
})

export default store;