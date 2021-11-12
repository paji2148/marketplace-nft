<template>
    <div class="wrapper">
      <div id="countdown">
        {{displayTime}}
      </div>
    </div>

</template>

<script>

import { mapMutations, mapGetters } from 'vuex';

import { GET_RESET_TIMER } from '../../store/timer';
import { SET_QUESTION_STATUS } from '../../store/game';

export default {
  name: 'Timer',
  data: () => ({
     displayTime: 10
  }),
  computed: {
    ...mapGetters({
      resetCountDown: GET_RESET_TIMER
      }),
  },
  mounted() {
    setTimeout(this.countdown, 1000);
  },
   methods: {
    ...mapMutations({
      updateGameStatus: SET_GAME_STATUS
    }),
    countdown () {
        if (this.displayTime > 0) {
          setTimeout(() => {
            this.countdown(this.displayTime -= 1)
            ;
          }, 1000);
        } else {
          this.updateGameStatus(false)
        }
      },
  },
  watch: {
    resetCountDown() {
      this.displayTime = 5;
    },
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');
:root {
  --bck: #293443;
  --font: #FCBE40;
  --box: #655735;

}
*{
  font-family: 'Zen Dots', sans-serif;
}
html {
  background: var(--bck);
}
.wrapper {
  display: flex;
  /*width: 500px;*/
  margin: 20px;
  background: var(--box);
  transform: skew(0deg, 0deg);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  animation: mymove 5s infinite;
}
#countdown {
  color: var(--font);
  text-align: center;
  font-size: 3rem;
  padding: 1px;
}

button {
  display: none;
}


</style>
