<template>
  <div id="overlay">
      <div class="err-img">
      </div>
  </div>
  </template>

<script>
export default {
  name: 'ChainError',
  data: () => ({

  }),
  components: {
  }
}

</script>
<style>
#overlay{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: .5;
}
.err-img{width:270px;height:350px;
  margin: 100px auto auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-image:url(http://localhost:8080/design.png);
}

</style>