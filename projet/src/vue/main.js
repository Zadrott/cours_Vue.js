import Vue from "vue"; //librairie "vue" dans node_modules
import VueRouter from "vue-router";
import app from "./app.vue"; //fichier app.vue local
import MovieItemComponent from "./components/movieitem.vue";
import NewMovie from "./components/newMovie.vue";
import MovieList from "./components/movieList.vue";
import Editor from "./components/editor.vue";
import Home from "./components/home.vue";
const axios = require("axios");

Vue.use(VueRouter);
Vue.component("movie-item", MovieItemComponent);
Vue.component("new-movie", NewMovie);
Vue.component("movie-list", MovieList);

window.shared_data = {
  movies: [],
  movie_to_add: {
    title: "Nouveau film",
    year: "Non renseigné",
    language: "Non renseigné",
    real: {
      name: "Non renseigné",
      nationality: "Non renseigné",
      born: "Non renseigné",
    },
    synopsys: "Non disponible",
    genre: "Non renseigné",
  },
};

axios
  .get("/api/movies/all")
  .then(function(response) {
    window.shared_data.movies = response.data;
    console.log("window.shared_data in main.js (axios):");
    console.log(window.shared_data);
  })
  .catch(function(error) {
    console.log(error);
  });

// on newMovie "new" event
// axios({
//   method: "post",
//   url: "/api/movies",
//   data: window.shared_data.movie_to_add,
// })
//   .then(function(response) {
//     window.shared_data.movies = response.data;
//     console.log("window.shared_data in main.js (axios):");
//     console.log(window.shared_data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

const routes = [
  { path: "/", component: Home },
  { path: "/edit/:id", component: Editor },
  { path: "/movie/:id", component: MovieItemComponent },
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: "#app",
  render: h => h(app),
  router,
  data: {},
});
