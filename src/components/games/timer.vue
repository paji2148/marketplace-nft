<template>

    <div class="wrapper">
      <div id="countdown">
        10:00
      </div>
      <button>CHANGE</button>
    </div>

</template>

<script>
export default {
  name: 'Timer',
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');
:root {
  --bck: #293443;
  --font: #FCBE40;
  --box: #655735;

}
*{
  font-family: 'Zen Dots', sans-serif;
}
html {
  background: var(--bck);
}
.wrapper {
  display: flex;
  /*width: 500px;*/
  margin: 20px;
  background: var(--box);
  transform: skew(0deg, 0deg);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  animation: mymove 5s infinite;
}
#countdown {
  color: var(--font);
  text-align: center;
  font-size: 3rem;
  padding: 1px;
}

button {
  display: none;
}


</style>
