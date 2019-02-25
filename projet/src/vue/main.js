import Vue from "vue"; //librairie "vue" dans node_modules
import VueRouter from "vue-router";
import app from "./app.vue"; //fichier app.vue local
import MovieItemComponent from "./components/movieitem.vue";
import NewMovie from "./components/newMovie.vue";
import MovieList from "./components/movieList.vue";
import Editor from "./components/editor.vue";
import Home from "./components/home.vue";

Vue.use(VueRouter);
Vue.component("movie-item", MovieItemComponent);
Vue.component("new-movie", NewMovie);
Vue.component("movie-list", MovieList);

var emptyMovie = {
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
};

window.shared_data = {
  movie_to_add: emptyMovie,
  movies: [],
};

////////////////////////////////////////////////  ==> routes.js : import vueRouter, Home, Editor and MovieItemComponent THEN
/////////  /!\ Vue.use(VueRouter);  (line:11)
const routes = [
  { path: "/", component: Home },
  { path: "/edit/:id", component: Editor },
  { path: "/movie/:id", component: MovieItemComponent },
];

const router = new VueRouter({
  routes,
});
////////////////////////////////////////////////////////////// ==> import router from "./routes.js";

new Vue({
  el: "#app",
  render: h => h(app),
  router,
});
