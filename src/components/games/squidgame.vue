<template>
    <div class="mainContainer">
      <Timer/>
      <div style="margin-top: 8%" class="container1" >
        <div class="container2" v-for="j in row" :key="j">
          <div class="col"  v-for="k in col" :key="k">
<!--            <img src="http://localhost:8080/design81.png" alt="logo">-->
          </div>
        </div>
        </div>
      </div>
</template>

<script>

import Timer from "@/components/games/timer";
export default {
  name: 'Squid',
  components: {Timer},
  data: () => ({
    row: 2,
    col:10
  }),
}
</script>

<style>

.container1 {

}

.container2 {
  display: flex;
  justify-content: center;
}
.col{
  background-clip: content-box;
  background-color: #f6feff;
  padding:4px;
  cursor:default;
  width: 100px;
  height: 100px;
}

@media (max-width:768px) {
  .col{
    width: 50px;
    height: 55px;
  }
}

@media (max-width:320px) {
  .col{
    height: 35px;
    padding:2px;
  }
}

.col:hover {
  background-color: black;
}

</style>
