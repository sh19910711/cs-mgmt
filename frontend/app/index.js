require('./styles/main.css');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Index = require('./views/index.vue');

var vm = new Vue({
  render: (h)=> {
    return h(Index);
  },
}).$mount('#app');
