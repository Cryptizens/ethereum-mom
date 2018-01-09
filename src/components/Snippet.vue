<template lang="html">
  <app-snippet :snippet="snippet()"></app-snippet>
</template>

<script>
import Snippet from './Home/Snippet.vue'

export default {
  components: {
    'app-snippet': Snippet
  },
  methods: {
    snippet: function() {
      var snippets = this.$store.state.snippets;
      var slug = this.$route.params.slug;

      return snippets.find(item => {
         return item.slug == slug;
      })
    }
  }
}
</script>
