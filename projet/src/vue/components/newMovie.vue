<template>
  <div>
    <div id="newMovie">
      <h2>Ajouter un nouveau film</h2>
      <div>
        <h3>Votre film :</h3>
        <br>Titre :
        <input type="text" v-model="movie_to_add.title">
        <br>Année de sortie :
        <input type="text" v-model="movie_to_add.year">
        <br>Langue:
        <input type="text" v-model="movie_to_add.language">
        <br>Réalisateur :
        <br>* Prénom nom:
        <input type="text" v-model="movie_to_add.real.name">
        <br>* Nationalité:
        <input type="text" v-model="movie_to_add.real.nationality">
        <br>* Date de naissance:
        <input type="text" v-model="movie_to_add.real.born">
        <br>Genre :
        <input type="text" v-model="movie_to_add.genre">
        <br>Synopsys :
        <textarea v-model="movie_to_add.synopsys"></textarea>
        <br>
        <button v-on:click="newmovie">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
var emptyMovie = {
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

export default {
  data() {
    return {
      movie_to_add: emptyMovie
    };
  },

  methods: {
    newmovie: function() {
      this.$store.dispatch("AddMovie", this.movie_to_add);
      this.movie_to_add = emptyMovie;
    }
  }
};
</script>

<style>
</style>