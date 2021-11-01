<template>
  <div>
    <Header/>
    <router-view :key="$route.path"/>
    <Footer/>
  </div>
</template>
<script>

import Header from './header';
import Footer from './footer';
export default {
  name: 'Base',
  data: () => ({
    mathGameSelector: false,
    puzzleGameSelector: true,
  }),
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>