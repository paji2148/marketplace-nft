import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/home';
// import Wallet from './components/wallet/wallet';
import Puzzle from './components/games/puzzleGame';
import store from './store/store';
// import Wallet from "@/components/wallet/wallet";

Vue.use(VueRouter)

const routes = [
  {path: '/wallet', name:"wallet", component: Home},
  {path: '/game', name:"game", component: Puzzle},
  // {path: '/', component: Home}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
