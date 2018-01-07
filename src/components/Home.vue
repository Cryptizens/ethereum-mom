<template lang="html">
  <div>
    <app-title></app-title>
    <app-snippet v-for="snippet in snippets" :snippet="snippet"></app-snippet>
  </div>
</template>

<script>
import Title from './Home/Title.vue'
import Snippet from './Home/Snippet.vue'
import { snippets } from '../data/snippets'

export default {
  data() {
    return {
      snippets: snippets
    }
  },
  components: {
    'app-title': Title,
    'app-snippet': Snippet
  }
}
</script>
