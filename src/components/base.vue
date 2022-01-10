<template>
  <div>
    <div v-if="spinner">
      <Roller />
    </div>
    <div v-else>
      <Game />
    </div>
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

import Game from './Game.vue';
import Roller from './Roller.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Base',
  data: () => ({
    spinner: true
  }),
  components: {
    Game,
    Roller
  },
  watch: {
    walletConnected () {
      this.fetchWallet();
    }
  },
  mounted() {
    this.connectWallet();
    setTimeout(() => {
      this.spinner = false;
    }, 1300);
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
        this.setWalletAddress(accounts[0]);
      }
    }
  },
}
</script>

<style>
</style>