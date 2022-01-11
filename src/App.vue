<template>
  <div id="app">
    <Base/>
  </div>
</template>

<script>

import Base from './components/base.vue';

export default {
  name: 'App',
  components: {
    Base,
  },
  created(){
        document.title = "Dunefall"
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");

* { 
    font-family: "Montserrat", sans-serif;
    color: white;
}


#app {
  position: absolute;
  height:100%;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}

</style>
