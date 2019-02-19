<template>
  <div class="main">
    <h1 id="msg">{{message}}</h1>
    <new-movie class="box"></new-movie>
    <movie-list class="box" v-on:new="newmov"></movie-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome to this amazing movie list",
      search: "",
      shared_data: window.shared_data,
      movies: []
    };
  },

  methods: {
    newmov: () => {
      console.log("Trying to add a new movie");
    }
    // edit: function(movie) {
    //   this.movie_to_edit = movie;
    // },
    // save: function() {
    //   this.movie_to_edit = null;
    // },
    // remove: function(index) {
    //   this.movies.splice(index, 1);
    // }
  },

  computed: {}
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