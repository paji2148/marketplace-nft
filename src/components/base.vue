<template>
  <div>
    <div v-if="spinner">
      <Roller />
    </div>
    <div v-else>
      <Game />
      <!-- <NFT /> -->
    </div>
  </div>
</template>
<script>

import Game from './Game.vue';
// import NFT from './NFT.vue';
import Roller from './Roller.vue';

export default {
  name: 'Base',
  data: () => ({
    spinner: true
  }),
  components: {
    Game,
    Roller,
    // NFT
  },
  watch: {},
  mounted() {
    setTimeout(() => {
      this.spinner = false;
    }, 1300);
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style>
</style>