<template>
  <div>
    <div id="newMovie">
      <h2>Ajouter un nouveau film</h2>
      <div>
        <h3>Votre film :</h3>
        <br>Titre :
        <input type="text" v-model="shared_data.movie_to_add.title">
        <br>Année de sortie :
        <input type="number" v-model="shared_data.movie_to_add.year">
        <br>Langue:
        <input type="text" v-model="shared_data.movie_to_add.language">
        <br>Réalisateur :
        <br>* Prénom nom:
        <input type="text" v-model="shared_data.movie_to_add.real.name">
        <br>* Nationalité:
        <input type="text" v-model="shared_data.movie_to_add.real.nationality">
        <br>* Date de naissance:
        <input type="date" v-model="shared_data.movie_to_add.real.born">
        <br>Genre :
        <input type="text" v-model="shared_data.movie_to_add.genre">
        <br>Synopsys :
        <textarea v-model="shared_data.movie_to_add.synopsys"></textarea>
        <br>
        <button v-on:click="newmovie">Add</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      shared_data: window.shared_data,
    };
  },

  methods: {
    newmovie: function() {
      //if movie already exist throw error
      //else{
      //   this.movie_to_add..push(this.movie_to_add);
      window.shared_data.movie_to_add = this.movie_to_add;
      this.$emit("new");
      // this.shared_data.movie_to_add = {
      //   title: "New movie",
      //   year: "?",
      //   language: "?",
      //   real: {
      //     name: "?",
      //     nationality: "?",
      //     born: "?"
      //   },
      //   synopsys: "Non disponible",
      //   genre: "?"
      // };
      
    }
  }
};
</script>

<style>
</style>