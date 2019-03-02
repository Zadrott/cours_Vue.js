<template>
  <div class="movie">
    <h3>{{ movie.title }}</h3>
    <p>
      Genre: {{movie.genre}}
      <br>
      Date de sortie: {{ movie.year }}
      <br>
      De: {{ movie.real.name }}
      (réalisateur/trice {{ movie.real.nationality}})
    </p>
    <h4>Synopsis</h4>
    <p>{{movie.synopsys}}</p>
    <button v-on:click="deleteMovie(movies,movie.title)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  },
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.getters.movieList;
    }
  },
  methods: {
    deleteMovie: function(movies, title) {
      var id = movies.map(x => x.title).indexOf(title);
      this.$store.dispatch("DeleteMovie", id);
    }
  }
};
</script>

<style scoped>
.movie {
  border: 5px solid rgb(122, 35, 139);
  margin-bottom: 15px;
  box-shadow: 4px 4px 4px 4px rgba(240, 248, 255, 0.164);
  padding-inline-start: 1em;
}
</style>
