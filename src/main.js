import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
import VuePrism from 'vue-prism'
import 'prismjs/themes/prism-okaidia.css'
import { store } from './store'

Vue.use(VuePrism);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
