import Vue from 'vue';
import VueRouter from 'vue-router';

export default {
  use() {
    Vue.use(VueRouter);
  },

  create(options) {
    function route(path, name) {
      return { name: name, path: path, component: require(`./pages/${name}.vue`) };
    }

    const routes = [
      route('/', 'index'),
      route('/signin', 'signin'),
      route('/signup', 'signup'),
      route('/signout', 'signout')
    ];
    const router = new VueRouter({ routes, mode: 'history' });

    router.beforeEach((nextPage, _, done) => {
      document.body.dataset.pageName = nextPage.name;
      done();
    });

    return router;
  }
}
