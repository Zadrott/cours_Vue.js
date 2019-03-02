import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home.vue';
import MovieItemComponent from './components/movieitem.vue';
import Editor from './components/editor.vue';

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/edit/:id", component: Editor },
    { path: "/movie/:id", component: MovieItemComponent },
  ];

export default new VueRouter({
    routes
});