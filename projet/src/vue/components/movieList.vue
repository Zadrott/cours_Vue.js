<template>
  <div>
    <div id="searchMovie">
      <p>
        Films trouvés : {{movies_search.length}}
        <br>Rechercher :
        <input type="text" v-model="search">
      </p>
    </div>
    <div id="list">
      <h2>Liste:</h2>
      <ul>
        <movie-item
          v-for="(movie, index) in movies_search"
          v-bind:key="movie.title"
          v-bind:movie="movie"
          v-on:remove="remove(index)"
        ></movie-item>
      </ul>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      search: ""
    };
  },

  methods: {
    edit: function(movie) {
      console.log("nope");
    }
  },

  computed: {
    movies_search() {
      return this.$store.getters.movieList.filter(
        m =>
          m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
          m.real.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
          m.genre.toLowerCase().indexOf(this.search.toLowerCase()) != -1
        // || m.year.indexOf(this.search.toLowerCase()) != -1
        // || m.synopsys.toLowerCase().indexOf(this.search.toLowerCase()) != -1
      );
    }
  }
};
</script>

<style>
</style>