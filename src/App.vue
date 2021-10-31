<template>
  <div id="app">
    <Game/>
  </div>
</template>

<script>

import Game from './components/game.vue'

export default {
  name: 'App',
  components: {
    Game
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: yellowgreen;
  position: absolute;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
