require('./styles/main.css');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: require('./views/index.vue') },
  ],
});

var vm = new Vue({
  router
}).$mount('#app');
