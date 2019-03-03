import Vue from "vue";
import Vuex from "vuex";
import app from "./app.vue";
import apiCalls from "./apiCalls.js";
import MovieItemComponent from "./components/movieitem.vue";
import NewMovie from "./components/newMovie.vue";
import MovieList from "./components/movieList.vue";
import router from "./routes.js";

Vue.use(Vuex);
Vue.component("movie-item", MovieItemComponent);
Vue.component("new-movie", NewMovie);
Vue.component("movie-list", MovieList);

var store = new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
    movieList: state => {
      return state.movies;
    },
  },
  mutations: {
    SetMovieList(state, movieList) {
      state.movies = movieList;
      console.log("Movie list updated from the server");
    },
  },
  actions: {
    UpdateMovies: context => {
      apiCalls
        .UpdateMovieList()
        .then(response => {
          context.commit("SetMovieList", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    AddMovie(context, movie) {
      apiCalls
        .NewMovie(movie)
        .then(() => {
          context.dispatch("UpdateMovies");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    EditMovie(context, movie, index) {
      apiCalls
        .EditMovie(movie, index)
        .then(() => {
          context.dispatch("UpdateMovies");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    DeleteMovie(context, index) {
      apiCalls
        .DeleteMovie(index)
        .then(() => {
          console.log("Movie deleted");
          context.dispatch("UpdateMovies");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
});

new Vue({
  el: "#app",
  render: h => h(app),
  router,
  store,
  mounted() {
    this.$store.dispatch("UpdateMovies");
  },
});
