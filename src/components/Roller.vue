<template>
 <div>
     <div id='top'>
    </div>
    <div>
        <div class="main">
            <div class="bg"></div>
            <div class="arrow"></div>
        </div>
    </div>
 </div>
</template>
<script>

export default {
  name: 'Game',
  components: {},
  data: () => ({
  }),
  mounted() {
  },
  watch: {},
  computed: {},
  methods: {}
}
</script>

<style>
#top{ height: 200px; }

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.main {
  position: relative;
  width: 200px;
  height: 200px;
  margin: auto;
}
.arrow {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #343977;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:99;
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 50%;
  background: linear-gradient(45deg, #a27474, #3f3fce);
  transform: rotate(360deg);
  animation: rotation 0.5s linear infinite;
}
</style>
