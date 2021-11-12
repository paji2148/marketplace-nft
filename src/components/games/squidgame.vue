<template>
    <div class="squid_main">
      <div class="squid_gameover" v-if="!status">
          <button v-on:click="startNewGame">start game</button>        
      </div>
            <div v-else>
              <Timer/>
              <div style="margin-top: 8%" class="squid_container">
                <div class="squid_row" v-for="j in row" :key="j">
                  <div class="glass" v-for="k in col" :key="k" v-on:click="takeJump" :id="j.toString()+k.toString()"
                  :class="[ (position===j.toString()+k.toString() ? 'cur_glass' : ''),
                  ((position%10) + 1===k ? 'glass_enabled' : 'glass_disabled')]"></div>
                </div>
              </div>
            </div>
    </div>
</template>
<script>

import { mapGetters, mapActions, mapMutations } from 'vuex';

import { RESET_TIMER } from '../../store/timer';
import { GET_GAME_STATUS, GET_PLAYER_ELIMINATED, GET_PLAYER_POSITION, 
GET_SQUID_COMPLETED, SET_GAME_STATUS, START_GAME, MAKE_JUMP
 } from '../../store/game';

import Timer from "@/components/games/timer";

export default {
  name: 'Squid',
  components: {
    Timer
  },
  data: () => ({
    row: 2,
    col:6,
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
    })
  },
  methods: {
    ...mapActions({
      startNewGame: START_GAME,
      jump: MAKE_JUMP,
    }),
    ...mapMutations({
      resetTimer: RESET_TIMER,
      updateGameStatus: SET_GAME_STATUS,
    }),
    async takeJump(event) {

      // console.log(, 'id issjsjsj');
      this.resetTimer();
      await this.jump(event.currentTarget.id);
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
  /* background: url("http://localhost:8080/sgame.jpg") no-repeat;
  background-size: 100% 100%;
  padding: 5px; */
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
