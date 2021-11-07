<template>
    <div class="squid_main">
      <div class="squid_gameover" v-if="dead || !currentGameStatus">
        <b>YOU ARE ELIMINATED</b>
      </div>
      <div v-else>
      <Timer/>
      <div style="margin-top: 8%" class="squid_container" >
        <div class="squid_row " v-for="j in row" :key="j">
          <div class="glass" v-for="k in col" :key="k" v-on:click="makeJump" :class="position===k ? 'glass_enabled' : 'glass_disabled'">
            <!-- <button class="button-squid" v-on:click="makeJump"></button> -->
           <!-- <img class="img-squid" src="http://localhost:8080/design81.png" alt="logo"> -->
          </div>
        </div>
        </div>
      </div>
      </div>
</template>

<script>

import { io } from 'socket.io-client';
import { mapGetters, mapActions, mapMutations } from 'vuex';

const socket = io('http://localhost:3000');

import {RESET_TIMER_ON_STEP} from '../../store/timer';
import {GET_GAME_STATUS, SET_GAME_STATUS} from '../../store/game';

import Timer from "@/components/games/timer";
export default {
  name: 'Squid',
  components: {
    Timer
  },
  data: () => ({
    row: 2,
    col:6,
    dead: false,
    position: 1,
  }),
  mounted() {
    socket.on("connection", () => {
      // console.log(data, 'user connected');
      this.updateGameStatus(true)
    });
    socket.on("land", (data) => {
      this.position += 1;
      console.log('reseting the timer')
      this.resetTimer();
      this.dead = data.dead;
      if (this.dead === true) {
        this.finishGame();
        socket.disconnect();
        }
      })
  },
  watch: {
  },
  computed: {
    ...mapGetters({
      currentGameStatus: GET_GAME_STATUS
    })
  },
  methods: {
    ...mapActions({
      resetTimer: RESET_TIMER_ON_STEP,
    }),
    ...mapMutations({
      updateGameStatus: SET_GAME_STATUS
    }),
    makeJump() {
      console.log("clicked")
      socket.emit("jump", {step: 0});
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
.glass{
  background-clip: content-box;
  background-color: #f6feff;
  padding:4px;
  cursor:default;
  width: 100px;
  height: 100px;
}

.glass_disabled {
 pointer-events: none;
 }
.glass_enabled {
  cursor: pointer;
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
