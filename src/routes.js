import Home from './components/Home.vue';
import About from './components/About.vue';
import Snippet from './components/Snippet.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/:slug',
    name: 'snippet',
    component: Snippet
  }
]
