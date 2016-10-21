require('./styles/main.sass');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: require('./views/index.vue') },
  { path: '/signin', component: require('./views/signin.vue') },
  { path: '/signup', component: require('./views/signup.vue') },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({router}).$mount('#app');
