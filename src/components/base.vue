<template>
  <div>
    <Header/>
    <Home />
    <router-view :key="$route.path"/>
   <Footer/>
  </div>
</template>
<script>

import {
  GET_IS_WALLET_CONNECTED,
  GET_ACCOUNT_ADDRESS,
  SET_IS_WALLET_CONNECTED,
  SET_ACCOUNT_ADDRESS
} from '../store/wallet';

import Header from './header';
import Footer from './footer1';
import { mapGetters, mapMutations } from 'vuex';
import Home from './home.vue';

export default {
  name: 'Base',
  data: () => ({
  }),
  components: {
    Header,
    Footer,
    Home
  },
  mounted() {
    this.connectWallet();
  },
  methods: {
    ...mapGetters({
      walletConnected: GET_IS_WALLET_CONNECTED,
      walletAddress: GET_ACCOUNT_ADDRESS
    }),
    ...mapMutations({
      updateWalletConnected: SET_IS_WALLET_CONNECTED,
      setWalletAddress: SET_ACCOUNT_ADDRESS,
    }),
    async connectWallet() {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.updateWalletConnected(true);
        console.log('cbfjkbfkjbfjk')
        this.setWalletAddress(accounts[0]);
      }
    }
  },
}
</script>

<style>
</style>