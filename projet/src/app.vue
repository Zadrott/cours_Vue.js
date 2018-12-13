<template>
  <div class="main">
    <h1 id="msg">{{message}}</h1>
    <div class="box">
      <h2>Editor:</h2>
      <p>Movie number : {{movies.length}}</p>
      <p>
        New movie
        <br>Title :
        <input type="text" v-model="movie_to_add.title">
        <br>Year :
        <input type="text" v-model="movie_to_add.year">
        <br>Synopsys :
        <textarea v-model="movie_to_add.synopsys"></textarea>
        <br>
        <button v-on:click="newmovie2">Add</button>
      </p>Search :
      <input type="text" v-model="search">
    </div>
    <hr>
    <div class="box">
      <h2>List:</h2>
      <ul>
        <movie-item
          v-for="(movie, index) in movies_search"
          v-bind:key="movie.title"
          v-bind:movie="movie"
          v-on:edit="edit"
          v-on:remove="remove(index)"
        ></movie-item>
      </ul>
    </div>

    <p v-if="movie_to_edit">
      New movie
      <br>Title :
      <input type="text" v-model="movie_to_edit.title">
      <br>Year :
      <input type="text" v-model="movie_to_edit.year">
      <br>Synopsys :
      <textarea v-model="movie_to_edit.synopsys"></textarea>
      <br>
      <button v-on:click="save">Save</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome to this amazing movie list",
      movie_to_add: {},
      movie_to_edit: null,
      search: "",
      movies: [
        {
          title: "L'étrange noël de M. Jack",
          year: 1994,
          synopsys:
            "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween.",
          real: "Henry Selick"
        },
        {
          title: "Interstellar",
          year: 2014,
          synopsys:
            "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver.",
          real: "Christopher Nolan"
        },
        {
          title: "La Haine",
          year: 1995,
          synopsys:
            "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.",
          real: "Mathieu Kassovitz"
        }
      ]
    };
  },

  methods: {
    newmovie1: function() {
      this.movies.push({ title: "New movie" });
    },
    newmovie2: function() {
      this.movies.push(this.movie_to_add);
      this.movie_to_add = {};
    },

    edit: function(movie) {
      this.movie_to_edit = movie;
    },
    save: function() {
      this.movie_to_edit = null;
    },
    remove: function(index) {
      this.movies.splice(index, 1);
    }
  },

  created: function() {
    console.log("Created");
  },

  computed: {
    firstletter: function() {
      return this.message[0];
    },
    movies_search: function() {
      return this.movies.filter(
        m => m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1
      );
    }
  }
};
</script>

<style>
#msg {
  color: red;
}
.main {
  display: flex;
  align-items: center;
}
.box {
  border: 3px solid black;
  margin-left: 15px;
  /* box-shadow: 4px 4px 4px 4px #000000; */
}
</style>