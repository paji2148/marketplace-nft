<template>
    <div id="container">
        <div id="10" class="cellGradient" v-for="j in pieces" :key="j">
          <img src="http://localhost:8080/design81.png" width="170px" height="170px" alt="logo">
        </div>
    </div>
</template>
<script>

// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3000');

export default {
  name: 'Puzzle',
  components: {
  },
  data: () => ({
    pieces: 12,
  }),
  mounted() {
    // socket.on("connection", (data) => {
    //   console.log(data, 'user connected');
    // });
  },

  watch: {
  },
  methods: {
    makeJump() {
      // socket.emit("jump", (data) => {
      // console.log(data, 'user jumpred emitted');
      // });
      }
  }
}
</script>
<style>
img:hover {
  opacity: 0.5;
}
#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1%;
  margin-left: 20%;
  margin-right: 20%;
}
.cellGradient{
  background: black;
  cursor:default;
}
@media (max-width:768px) {
  #container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .cellGradient{
    background: black;
    cursor:default;
  }
  img{
    width:100px;
    height:100px
  }
}
</style>
