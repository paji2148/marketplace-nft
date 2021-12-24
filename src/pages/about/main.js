import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
// import Home from './components/home';
// import Wallet from './components/wallet/wallet';
// import Puzzle from './components/games/puzzleGame';
// import Squid from "./components/games/squidgame";
// import MathQuiz from './components/games/mathGame';
// import store from './store/store';

// Vue.use(VueRouter)

// const routes = [
  // {path: '/', name:"home", component: Home},
  // {path: '/game/squid', name:"Squid", component: Squid},
  // {path: '/game/puzzle', name:"puzzlegame", component: Puzzle},
  // {path: '/game/math', name:"gmathame", component: MathQuiz},
  // {path: '/my-wallet', name:"wallet", component: Wallet},
// ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL + 'experiment/',
  // routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  // store: store,
  render: h => h(App),
}).$mount('#app')
