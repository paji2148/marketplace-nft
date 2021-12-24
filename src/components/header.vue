<template>
  <div class="header">
      <a href="#default" class="logo">CRG</a>
      <a href="/">Home</a>
      <a href="roadmap">Roadmap</a>
    <div class="header-right">
      <a href="my-wallet">My Wallet</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data: () => ({
  }),
}
</script>

<style>
* {box-sizing: border-box;}

.header {
  overflow: hidden;
  background: black;
}

.header a {
  float: left;
  /* color: black; */
  text-align: center;
  padding: 15px;
  text-decoration: none;
  font-size: 22px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}


.header a:hover {
  background-color: #ddd;
  color: black;
}
@media screen and (min-width: 500px) {
  .header-right{
    float: right;
  }
}
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
    font-size: 10px;
    line-height: 18px;
    border-radius: 2px;
  }

}
</style>
