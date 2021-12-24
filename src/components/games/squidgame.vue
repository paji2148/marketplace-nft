<template>
    <div class="squid_main">
      <div class="squid_gameover" v-if="!status">
          <button v-on:click="startNewGame">start game</button>        
      </div>
            <div v-else>
              <Timer/>
              <div style="margin-top: 8%" class="squid_container">
                
                <div class="squid_initial_row"> 
                  <div :class="position===0 ? 'start_spot_img' : 'start_spot'">
                </div>
                </div>
                <div>
                  <div class="squid_row" v-for="j in row" :key="j">
                    <div class="glass" v-for="k in col" :key="k" v-on:click="takeJump" :id="j.toString()+k.toString()"
                    :class="[ (position===j.toString()+k.toString() ? 'cur_glass' : ''),
                    ((position%10) + 1===k ? 'glass_enabled' : 'glass_disabled')]"></div>
                  </div>
                </div>
              </div>
            </div>
    </div>
</template>
<script>

import Web3 from 'web3';
// const abi = require('ethereumjs-abi')
import { mapGetters, mapActions, mapMutations } from 'vuex';

import { RESET_TIMER } from '../../store/timer';

import { GET_GAME_STATUS, GET_PLAYER_ELIMINATED, GET_PLAYER_POSITION, 
GET_SQUID_COMPLETED, SET_GAME_STATUS, START_GAME, MAKE_JUMP
 } from '../../store/game';

// import {
//   GET_IS_SIGNED, LOGIN_WALLET
// } from '../../store/login';

import {
  GET_ACCOUNT_ADDRESS,
} from '../../store/wallet';

import Timer from "@/components/games/timer";

import cont from './cont.json';

export default {
  name: 'Squid',
  components: {
    Timer
  },
  data: () => ({
    row: 2,
    col:6,
    url: 'http://localhost:8080/sgame.jpg',
  }),
  mounted() {
  },
  watch: {
    playerEliminated() {
      if (this.playerEliminated === true) {
        this.updateGameStatus(false);
      }
    },
    gameWon() {
      if (this.gameWon === true) {
        this.updateGameStatus(false);
      }
    }
  },
  computed: {
    ...mapGetters({
      status: GET_GAME_STATUS,
      playerEliminated: GET_PLAYER_ELIMINATED,
      gameWon: GET_SQUID_COMPLETED,
      position: GET_PLAYER_POSITION,
      walletAddress: GET_ACCOUNT_ADDRESS,
      // iswalletSigned: GET_IS_SIGNED
    })
  },
  methods: {
    ...mapActions({
      startGameApi: START_GAME,
      // loginWallet: LOGIN,
      jump: MAKE_JUMP,
      // login: LOGIN_WALLET
    }),
    ...mapMutations({
      resetTimer: RESET_TIMER,
      updateGameStatus: SET_GAME_STATUS,
    }),
    async takeJump(event) {
      this.resetTimer();
      await this.jump(event.currentTarget.id);
    },

    async loadContract(web3) {
    const contractAddress = '0x48340C8bF67667CE49F291908977573e1203d445';
    return await new web3.eth.Contract(cont.abi, contractAddress);
    },
    async startNewGame(){
    // const contractAddress = '0x48340C8bF67667CE49F291908977573e1203d445';
     const web3 = new Web3(Web3.givenProvider);
    //  const contract = await this.loadContract(web3);
    //  console.log(contract);
    //  console.log(await web3.eth.personal.sign(hash, this.walletAddress));
    console.log(this.walletAddress);
    console.log(
      await web3.eth.personal.sign(web3.utils.toHex("Sign to Login. Nonce: 2dda52a88115"), '0x340f2d79a6f9df826c1df4a84934a221a2b8ec05')
      );
    // const nonce = '4RPDRY3G';
    // const value = '2';
    // const address = '0xb696E127f8e147AadDBFf5172BC4CdF25859be90';
    // console.log(
    //   await web3.eth.personal.sign(web3.utils.toHex("Amount:".concat(value, " AVXT\n") + "Address: ".concat(address, "\n") + "Nonce: ".concat(nonce)), '0xb696E127f8e147AadDBFf5172BC4CdF25859be90')
    //   )
      }
  }
}
</script>

<style>
.squid_gameover{
  text-align: center;
  font-size: 50px;
  margin-top: 20%;
  color: red;
}
.squid_row {
  display: flex;
  justify-content: center;
}
.squid_container {
  display: flex;
  justify-content: center;
}
.glass{
  background-clip: content-box;
  background-color: #f6feff;
  padding:4px;
  cursor:default;
  width: 100px;
  height: 100px;
}
.start_spot_img{
  background-clip: content-box;
  margin-top: 25px;
  cursor:default;
  width: 150px;
  height: 150px;
  background: url("http://localhost:8080/sgame.jpg") no-repeat;
  background-size: 100% 100%;
}

.start_spot{
  background-clip: content-box;
  margin-top: 25px;
  cursor:default;
  width: 150px;
  height: 150px;
}

.glass_disabled {
 pointer-events: none;
 }

.glass_enabled {
  cursor: pointer;
}

.cur_glass {
  cursor: pointer;
  background: url("http://localhost:8080/sgame.jpg") no-repeat;
  background-size: 100% 100%;
}

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

@media (max-width:768px) {
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
}

.glass:hover {
  background-color: black;
}

</style>
