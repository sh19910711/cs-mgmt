require('./styles/main.sass');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Request from 'request';

Vue.use(VueRouter);

function route(path, name) {
  return { name: name, path: path, component: require(`./views/${name}.vue`) };
}

const routes = [
  route('/', 'index'),
  route('/signin', 'signin'),
  route('/signup', 'signup'),
  route('/dashboard', 'dashboard'),
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((nextPage, _, done) => {
  document.body.dataset.pageName = nextPage.name;
  done();
});

window.onload = _ => {
  new Vue({router}).$mount('#app');
};
