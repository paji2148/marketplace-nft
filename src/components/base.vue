<template>
  <div>
    <div v-if="spinner">
      <Roller />
    </div>
    <div v-else>
      <Game />
    </div>
  </div>
</template>
<script>

import Game from './Game.vue';
import Roller from './Roller.vue';

export default {
  name: 'Base',
  data: () => ({
    spinner: true
  }),
  components: {
    Game,
    Roller
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