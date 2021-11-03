<template>
  <div>
    <Header/>
    <router-view :key="$route.path"/>
<!--    <Footer/>-->
  </div>
</template>
<script>

import Header from './header';
// import Footer from './footer1';

export default {
  name: 'Base',
  data: () => ({
  }),
  components: {
    Header,
    // Footer,
  }
}
</script>

<style>

body{
}
</style>