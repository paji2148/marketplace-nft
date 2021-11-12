<template>
  <div v-if="walletConnected">
    <button v-on:click="redirectToGame('squid')">
      <b>Skid Game</b>
    </button>
    <button v-on:click="redirectToGame('math')">
      <b>Math Game</b>
    </button>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';

import {
  GET_IS_WALLET_CONNECTED,
  GET_ACCOUNT_ADDRESS,
} from '../store/wallet';


export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      walletConnected: GET_IS_WALLET_CONNECTED,
      walletAddress: GET_ACCOUNT_ADDRESS
    }),
  },
  methods: {
    redirectToGame(value){
      this.$router.push('/game/' + value);
    }
  },
}
</script>

<style>
</style>