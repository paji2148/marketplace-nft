<template>
  <div v-if="walletConnected">
    <a href="/squid">
      <b>Skid game</b>
    </a>
    <a href="/mathGame">
      <b>  math Game</b>
    </a>
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
  },
}
</script>

<style>

</style>