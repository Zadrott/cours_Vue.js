<template>
  <div class="main">
    <h1 id="msg">{{message}}</h1>
    <div class="box">
      <div id="newMovie">
        <h2>Ajouter un nouveau film</h2>
        <p>
          <h3>Votre film :</h3>
          <br>Titre :
          <input type="text" v-model="movie_to_add.title">
          <br>Année de sortie :
          <input type="number" v-model="movie_to_add.year">
          <br>Langue:
          <input type="text" v-model="movie_to_add.language">
          <br>Réalisateur :
          <br>* Prénom nom:
          <input type="text" v-model="movie_to_add.real.name">
          <br>* Nationalité:
          <input type="text" v-model="movie_to_add.real.nationality">
          <br>* Date de naissance:
          <input type="date" v-model="movie_to_add.real.born">
          <br>Genre :
          <input type="text" v-model="movie_to_add.genre">
          <br>Synopsys :
          <textarea v-model="movie_to_add.synopsys"></textarea>
          <br>
          <button v-on:click="newmovie">Add</button>
        </p>
      </div>
    </div>

    <div class="box">
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
            v-on:edit="edit"
            v-on:remove="remove(index)"
          ></movie-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome to this amazing movie list",
      movie_to_add: {
          title: "New movie",
          year: "?",
          language:"?",
          synopsys: "Non disponible",
          real: {
            name: "?",
            nationality: "?",
            born: "?",
          },
          genre:"?",
      },
      search: "",
      movies: //replace with window.shared_data.movies
       [
        {
          title: "L'étrange noël de M. Jack",
          year: 1994,
          language: "Anglais",
          synopsys:
            "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween.",
          real: {
            name: "Henry Selick",
            nationality: "américain",
            born: "30 novembre 1952",
          },
          genre:"Fantastique, Animation",
        },
        {
          title: "Interstellar",
          year: 2014,
          language: "Anglais",
          synopsys:
            "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver.",
          real: {
            name: "Christopher Nolan",
            nationality: "américain",
            born: "30 juillet 1970",
          },
          genre:"Science fiction, Drame",      
        },
        {
          title: "La Haine",
          year: 1995,
          language: "Français",
          synopsys:
            "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.",
          real: {
            name: "Mathieu Kassovitz",
            nationality: "français",
            born: "3 août 1967",
          },
          genre:"Drame", 
        }
      ]
    };
  },

  methods: {
    newmovie: function() {
      //if movie already exist throw error
      //else{
      this.movies.push(this.movie_to_add); // replace this.movies with window.shared_data.movies
      this.movie_to_add = {
          title: "New movie",
          year: "?",
          language: "?",
          real: {
            name: "?",
            nationality: "?",
            born: "?",
          },
          synopsys: "Non disponible",
          genre:"?"
      };
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
        || m.real.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1
        || m.genre.toLowerCase().indexOf(this.search.toLowerCase()) != -1
        // || m.year.indexOf(this.search.toLowerCase()) != -1
        // || m.synopsys.toLowerCase().indexOf(this.search.toLowerCase()) != -1

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
  flex-direction: column;
}
.box {
  border: 3px solid black;
  margin: 2%;
  padding: 30px;
}
</style>