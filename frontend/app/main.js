require('./styles/main.sass');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Request from 'request';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: require('./views/signin.vue') }, // TODO: create first page
  { path: '/signin', component: require('./views/signin.vue') },
  { path: '/signup', component: require('./views/signup.vue') },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

window.onload = _ => {
  new Vue({router}).$mount('#app');
};
