<template>
  <div id="math_main">
    <div class="math_gameover" v-if="!currentGameStatus">
      <b>Game Over</b>
    </div>
  <div v-else>
    <Timer/>

   <div id="qst-dv">
    <div v-if="loading">
      <h2>Loading Next Question</h2>
    </div>
    <div v-else-if="error">Error happened</div>
    <div v-else className="question">
      <table>
        <tr>
          <td> {{question[0]}}</td>
          <td> {{question[1]}}</td>
          <td> {{question[2]}}</td>
        </tr>
      </table>
      <div>
        <button :disabled="isAnswered" v-on:click="checkAnswer(option)" v-for="option in options" :value=option :key="option" >{{ option }}</button>
      </div>
      <div v-if="isAnswered">
        <p v-if="success" id="rgtAnswer">Correct answer</p>
        <p v-else id="wrgAnswer">Incorrect answer</p>
      </div>
    </div>
   </div>
  </div>
  </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from 'vuex';

import {RESET_TIMER_ON_STEP} from '../../store/timer';
import {GET_GAME_STATUS, SET_GAME_STATUS} from '../../store/game';

import Timer from "@/components/games/timer";

import { GET_LOADING, GET_OPTIONS, GET_QUESTION, GET_ANSWER, GET_ERROR,
  SET_LOADING, FETCH_NEW_QUESTION } from "../../store/question";

export default {
  name: 'MathQuiz',
  data: () => ({
    isAnswered: false,
    success: null,
    questionNumber: 3,
  }),
  components: {
    Timer
  },
  mounted() {
    this.fetchQuestion();
  },
  computed: {
    ...mapGetters({
      loading: GET_LOADING,
      question: GET_QUESTION,
      answer: GET_ANSWER,
      options: GET_OPTIONS,
      error : GET_ERROR,
      currentGameStatus: GET_GAME_STATUS
    })
  },
  watch: {
    loading() {
      this.isAnswered = false;
      this.fetchQuestion();
    },
  },
  methods: {
    ...mapActions({
      fetchQuestion: FETCH_NEW_QUESTION,
      resetTimer: RESET_TIMER_ON_STEP,
    }),
    ...mapMutations({
      changeLoadingStatus: SET_LOADING,
      updateGameStatus: SET_GAME_STATUS
    }),
    checkAnswer (value) {
      this.isAnswered = true;
      if (value === this.answer) {
        this.success = true;
      } else {
        this.success = false;
      }
      setTimeout( () => this.changeLoadingStatus(true), 1500);
    },
  },
}
</script>

<style scoped>
#qst-dv{
  margin-left: 4%;
}
table {
  color: black;
  width: 40%;
  border: 2px solid #ddd;
  margin-left: auto;
  margin-right: auto;
  font-size: 45px;
}
td {
  /*margin: 20px;*/
}
button {
  background-color: lightblue; /* Green */
  color: darkred;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 40px;
  border-radius: 50%;
  margin: 10px;
}
div {
  padding: 20px;
  text-align: center;
}
p {
  color: black;
  font-size: 28px;
}
#wrgAnswer {
  color: red;
}
#rgtAnswer {
  color: green;
}
</style>
