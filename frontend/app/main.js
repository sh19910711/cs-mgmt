require('./styles/main.sass');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

function createRouter() {
  function route(path, name) {
    return {name: name, path: path, component: require(`./views/${name}.vue`)};
  }

  const routes = [
    route('/', 'index'),
    route('/signin', 'signin'),
    route('/signup', 'signup'),
    route('/dashboard', 'dashboard'),
  ];
  const router = new VueRouter({routes, mode: 'history'})
  router.beforeEach((nextPage, _, done) => {
    document.body.dataset.pageName = nextPage.name;
    done();
  });
  return router;
}

window.onload = _ => {
  const router = createRouter();
  new Vue({router}).$mount('#app');
};
