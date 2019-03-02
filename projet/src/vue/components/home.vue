<template>
  <div class="main">
    <h1 id="msg">{{message}}</h1>
    <new-movie class="box"></new-movie>
    <movie-list class="box"></movie-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome to this amazing movie list",
    };
  },
};
</script>

<style>
#msg {
  color: red;
}
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.box {
  border: 3px solid black;
  margin: 2%;
  padding: 30px;
}
</style>