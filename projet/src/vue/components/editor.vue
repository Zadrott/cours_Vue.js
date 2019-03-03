<template>
  <div class="box">
    <div id="header">
      <h1 id="msg">Modifier le film</h1>
    </div>
    <div>
      <br>Titre :
      <input type="text" v-model="this.movie.title">
      <br>Année de sortie :
      <input type="text" v-model="this.movie.year">
      <br>Langue:
      <input type="text" v-model="this.movie.language">
      <br>Réalisateur :
      <br>* Prénom nom:
      <input type="text" v-model="this.movie.real.name">
      <br>* Nationalité:
      <input type="text" v-model="this.movie.real.nationality">
      <br>* Date de naissance:
      <input type="text" v-model="this.movie.real.born">
      <br>Genre :
      <input type="text" v-model="this.movie.genre">
      <br>Synopsys :
      <textarea v-model="this.movie.synopsys" rows="5" cols="33"></textarea>
      <br>
      <input type="file" name="poster">
      <br>
    </div>
    <router-link :to="{ name: 'home'}" tag="button">Retour à la liste</router-link>
    <button v-on:click="edit">Modifier</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localMovie: {}
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    movie() {
      return this.$store.getters.movieList[this.id];
    }
  },
  methods: {
    edit: function() {
      this.$store.dispatch("EditMovie", this.movie, this.id);
    }
  },
  mounted(){
    localMovie = this.$store.getters.movieList[this.id];
  }
};
</script>

<style>
</style>

    