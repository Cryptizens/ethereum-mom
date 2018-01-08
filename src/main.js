import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Routes from './routes';
import InstantSearch from 'vue-instantsearch';
import VuePrism from 'vue-prism';
import 'prismjs/themes/prism.css'

Vue.use(VuePrism);
Vue.use(VueRouter);
Vue.use(InstantSearch);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
