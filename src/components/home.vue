<template>
  <div class="home">
    <div class="game_message-top">
      <h2>
        Meant to be Played
      </h2>
      <p>
        The Very Best in Blockchain Gaming with real world use
      </p>
    </div>
              <div class="container">
                <div class="row">
                  <div class="centered">Go to APP</div>
                </div>
                <div class="row">
                  <div class="centered">My Wallet</div>
                </div>
                <div class="row">
                  <div class="centered">Roadmap</div>
                </div>
              </div>
    <!-- <button v-on:click="redirectToGame('squid')">
      <b>Skid Game</b>
    </button>
    <button v-on:click="redirectToGame('math')">
      <b>Math Game</b>
    </button> -->
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
    async redirectToGame(value){
      this.$router.push('/game/' + value);
    }
  },
}
</script>

<style>

.game_message-top {
  color: white;
  text-align: center;
}
.container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 90px;
  justify-content: center;
}
.row{
  background-clip: content-box;
  cursor:default;
  margin:2%;
  width: 200px;
  height: 300px;
  background: url("http://localhost:8080/design.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home {
  background: url("http://localhost:8080/blue-border.jpg") no-repeat;
  background-size: 100% 100%;
}


/* .cur_glass {
  cursor: pointer;
  background: url("http://localhost:8080/sgame.jpg") no-repeat;
} */

/* #button-squid{
    background-color: #bbb;
    display: block;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
}
.img-squid{
    max-width: 100%;
    max-height: 100%;
} */

/* @media (max-width:768px) {
  .glass{
    width: 50px;
    height: 55px;
  }
}

@media (max-width:320px) {
  .glass{
    width: 20px;
    height: 30px;
    padding:2px;
  }
} */

.glass:hover {
  background-color: black;
}
</style>