import Vue from "vue"; //librairie "vue" dans node_modules
import VueRouter from "vue-router";
import app from "./app.vue"; //fichier app.vue local
import MovieItemComponent from "./components/movieitem.vue";
import Editor from "./components/editor.vue";
import Home from "./components/home.vue";
const axios = require("axios");

Vue.use(VueRouter);
Vue.component("movie-item", MovieItemComponent);

window.shared_data = {
  movies: [],
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

console.log("window.shared_data in main.js:");
console.log(window.shared_data);

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
