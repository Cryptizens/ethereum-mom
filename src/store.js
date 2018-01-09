import Vue from 'vue'
import Vuex from 'vuex'
import { snippets } from './data/snippets'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    snippets: snippets
  },
  getters: {
    favoriteSnippets: state => {
      return state.snippets.filter(snippet => snippet.favorite)
    }
  }
});
