require('./styles/main.sass');

import API from 'lib/api';
import Vue from 'vue';
import Router from 'router';

window.api = new API(localStorage.getItem('cs-token'));
window.onload = _ => {
  const router = Router.create();
  new Vue({ router }).$mount('#app');
};
