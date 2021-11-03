import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/home';
import Wallet from './components/wallet/wallet';
import Puzzle from './components/games/puzzleGame';
import Squid from "@/components/games/squidgame";
import MathQuiz from './components/games/mathGame';
import store from './store/store';


Vue.use(VueRouter)

const routes = [
  {path: '/', name:"wallet", component: Home},
  {path: '/squid', name:"Squid", component: Squid},
  {path: '/puzzle', name:"game", component: Puzzle},
  {path: '/math', name:"game", component: MathQuiz},
  {path: '/my-wallet', name:"game", component: Wallet},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
