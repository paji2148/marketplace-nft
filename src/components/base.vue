<template>
  <div>
    <Header/>
    <router-view :key="$route.path"/>
   <!-- <Footer/> -->
  </div>
</template>
<script>

import {
  GET_IS_WALLET_CONNECTED,
  GET_ACCOUNT_ADDRESS,
  SET_IS_WALLET_CONNECTED,
  SET_ACCOUNT_ADDRESS,
  FETCH_USER_WALLET,
} from '../store/wallet';

import Header from './header';
// import Footer from './footer1';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Base',
  data: () => ({
  }),
  components: {
    Header,
    // Footer,
  },
  watch: {
    walletConnected () {
      console.log('in watch wallet connected')
      this.fetchWallet();
    }
  },
  mounted() {
    console.log("connecitng wallet")
    this.connectWallet();
  },
  computed: {
    ...mapGetters({
      walletConnected: GET_IS_WALLET_CONNECTED,
      walletAddress: GET_ACCOUNT_ADDRESS
    }),
  },
  methods: {
    ...mapMutations({
      updateWalletConnected: SET_IS_WALLET_CONNECTED,
      setWalletAddress: SET_ACCOUNT_ADDRESS,
    }),
    ...mapActions({
      fetchWallet: FETCH_USER_WALLET
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