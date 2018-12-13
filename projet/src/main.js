import Vue from "vue"; //librairie "vue" dans node_modules
import VueRouter from "vue-router";
import app from "./app.vue"; //fichier app.vue local
import MovieItemComponent from "./components/movieitem.vue";
import Editor from "./components/editor.vue";
import Home from "./components/home.vue";

Vue.use(VueRouter);
Vue.component("movie-item", MovieItemComponent);

window.shared_data = {
  movies: "Test",
};

const routes = [
  { path: "/", component: Home },
  { path: "/edit/:id", component: Editor },
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: "#app",
  render: h => h(app),
  router,
});
