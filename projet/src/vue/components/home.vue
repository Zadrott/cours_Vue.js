<template>
  <div class="main">
    <div id="header">
      <h1 id="msg">{{message}}</h1>
    </div>
    <movie-list class="box"></movie-list>
    <new-movie id="test" class="box"></new-movie>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Bienvenue sur cette superbe liste de films !",
    };
  },
};
</script>

<style>
#header {
  background-color: aliceblue;
  align-self: stretch;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0.8;
}
#msg {
  color: rgb(122, 35, 139);
  align-self: center;
}
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.box {
  border: 3px solid aliceblue;
  margin: 2%;
  padding: 30px;
  opacity: 0.8;
  background-color: black;
}
</style>