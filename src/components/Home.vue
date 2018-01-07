<template lang="html">
  <div>
    <app-title></app-title>
    <app-snippet v-for="snippet in snippets" :snippet="snippet"></app-snippet>
  </div>
</template>

<script>
import Title from './Home/Title.vue'
import Snippet from './Home/Snippet.vue'
import axios from 'axios'
import hljs from '../vendor/hljs'

export default {
  data() {
    return {
      snippets: []
    }
  },
  components: {
    'app-title': Title,
    'app-snippet': Snippet
  },
  created() {
    axios.get(`https://s3.eu-central-1.amazonaws.com/ethereum.mom/snippets.json`)
    .then(response => {
      this.snippets = response.data
      hljs.initHighlightingOnLoad()
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>
