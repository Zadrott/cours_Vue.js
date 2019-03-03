<template>
  <div class="movie">
    <h3>{{ movie.title }}</h3>
    <!-- <img src="movie.affiche" width="250" height="400"> -->
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
    <router-link :to="{ name: 'editor', params: { id: this.id }}" tag="button">Edit</router-link>
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
    },
    // affiche() {
    //   // var file = new File(this.movie.title, "static/affiches/" + this.movie.title + ".png");
    //   if (fs.exists("static/affiches/" + this.movie.title + ".png")) {
    //     return "static/affiches/" + this.movie.title + ".png";
    //   } else {
    //     return undefined;
    //   }
    // },
    id() {  
      return this.movies.map(x => x.title).indexOf(this.movie.title);
    }
  },
  methods: {
    deleteMovie: function() {
      this.$store.dispatch("DeleteMovie", this.id);
    }
  },
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
