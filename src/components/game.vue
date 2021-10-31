<template>
  <div>
    <Header/>
    <div id="mid-fx">
      <Wallet/>
      <div id="game-fx">
      <MathQuiz v-if="mathGameSelector"/>
      <Puzzle v-else-if="puzzleGameSelector"/>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './header';
import Wallet from './wallet/wallet';
import MathQuiz from './games/mathGame';
import Puzzle from './games/puzzleGame';

export default {
  name: 'Game',
  data: () => ({
    mathGameSelector: false,
    puzzleGameSelector: true,
  }),
  components: {
    Header,
    Wallet,
    MathQuiz,
    Puzzle
  }
}
</script>

<style>
#mid-fx {
  display: flex;
  margin: 5%;
}
#game-fx {
  margin-left: 5%;
}
</style>