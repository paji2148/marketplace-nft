<template>
  <div id="divTable">
    <table class="gameTable" id="theTable">
      <tbody>
      <tr class="gameTable">
        <td id="10" class="cell-move-in-animation gameTable cellGradient" >
          <img src="http://localhost:8080/1a.png" width="40px" height="40px" alt="logo">
        </td>
        <td id="41" class="cell-move-in-animation gameTable cellGradient">
          <img src="http://localhost:8080/1a.png" width="40px" height="40px" alt="logo">
        </td>
        <td id="52" class="cell-move-in-animation gameTable cellGradient">
          <img src="http://localhost:8080/1a.png" width="40px" height="40px" alt="logo">
        </td>
        <td id="53" class="cell-move-in-animation gameTable cellGradient">
          <img src="http://localhost:8080/1a.png" width="40px" height="40px" alt="logo">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Puzzle',
  data: () => ({
  }),
}
</script>

<style>
img:hover {
  opacity: 0.5;
}

table.gameTable{font-weight:bold;margin-left:auto;margin-right:auto;background-color:transparent;}
.cellGradient{color:white;cursor:default;background:#939393;background:-moz-linear-gradient(top,  #939393 0%, #777777 100%);background:-webkit-gradient(linear, left top, left bottom, color-stop(0%,#939393), color-stop(100%,#777777));background:-webkit-linear-gradient(top,  #939393 0%,#777777 100%);background:-o-linear-gradient(top,  #939393 0%,#777777 100%);background:-ms-linear-gradient(top,  #939393 0%,#777777 100%);background:linear-gradient(to bottom,  #939393 0%,#777777 100%);}
td.gameTable{text-align:center;width:33px;height:48px;background-clip:padding-box;border-radius:5px;}
tr.gameTable{background-color:transparent;}
</style>
