<template>
  <div class="main">
    <h1 id="msg">{{message}}</h1>
    <new-movie class="box" v-on:new="NewMovie"></new-movie>
    <movie-list class="box"></movie-list>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      message: "Welcome to this amazing movie list",
      search: "",
      shared_data: window.shared_data
    };
  },

  methods: {
    UpdateMovieList: () => {
      axios
        .get("/api/movies/all")
        .then(function(response) {
          window.shared_data.movies = response.data;
          console.log("Movie list updated from the server");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    NewMovie: () => {
      console.log("Trying to add a new movie");
      axios({
        method: "post",
        url: "/api/movies",
        data: window.shared_data.movie_to_add
      })
        .then(function(response) {
          window.shared_data.movie_to_add = {
            title: "Nouveau film",
            year: "Non renseigné",
            language: "Non renseigné",
            real: {
              name: "Non renseigné",
              nationality: "Non renseigné",
              born: "Non renseigné"
            },
            synopsys: "Non disponible",
            genre: "Non renseigné"
          };
          console.log("movie_to_add cleaned");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    // edit: function(movie) {
    //   this.movie_to_edit = movie;
    //   axis.post(this.movie_to_edit -> edit API);
    // },
    // save: function() {
    //   this.movie_to_edit = null;
    // },
    // remove: function(index) {
    //   this.movies.splice(index, 1);
    // }
  },
  mounted() {
    this.UpdateMovieList();
  }
  // watch: {
  //   shared_data: function(value, oldValue) {
  //     this.UpdateMovieList();
  //   }
  // }
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