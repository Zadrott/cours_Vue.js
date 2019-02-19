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
  movie_to_add:{
    title: "New movie",
    year: "?",
    language: "?",
    real: {
      name: "?",
      nationality: "?",
      born: "?"
    },
    synopsys: "Non disponible",
    genre: "?"
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

// axios({
//   method: "post",
//   url: "/api/movies",
//   data: {
//     title: "test",
//     year: "2000",
//   },
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
  data: {
    shared_data: window.shared_data,
  },
});
