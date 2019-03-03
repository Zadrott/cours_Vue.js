import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home.vue';
import MovieItemComponent from './components/movieitem.vue';
import Editor from './components/editor.vue';

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home , name: "home"},
    { path: "/edit/:id", component: Editor , name: "editor"},
    { path: "/movie/:id", component: MovieItemComponent , name: "movie"},
  ];

export default new VueRouter({
    routes
});