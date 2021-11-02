<template>
  <div id="app">
    <Base/>
  </div>
</template>

<script>

import Base from './components/base.vue'

export default {
  name: 'App',
  components: {
    Base
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");

#app {
  position: absolute;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}

* {
  background: #e9e9e9;
  font-family: "Montserrat", sans-serif;
}

</style>
