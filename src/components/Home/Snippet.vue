<template lang="html">
  <div>
    <router-link :to="{ name: 'snippet', params: { slug: snippet.slug }}">
      <h3>{{ snippet.title }}</h3>
    </router-link>
    <h5>Last updated {{ snippet.updated_at }}, submitted by <a v-bind:href="'https://github.com/' + snippet.author">{{ snippet.author}}</a></h5>
    <pre class="language-js"><code>{{ rawCode }}</code></pre>
    <p>
      <span class="advice-emoji">💁</span>
      <span class="advice-title">Mummy says: </span>
      <span v-html="snippet.advice"></span>
    </p>
  </div>
</template>

<script>
export default {
  props: [
    'snippet'
  ],
  computed: {
    rawCode() {
      return this.snippet.code.join('\n')
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  background-color: $foreground-color;
  border-radius: 6px;
  padding: 40px;
  margin: 40px 0;
  border: 1px solid $gray-200;
  transition: box-shadow .25s;
  box-shadow: 0 2px 20px rgba(0,0,0,0.17);

  @media (max-width: 1000px){
    margin: 20px 0 !important;
    padding: 20px !important;
  }
}

h3, h5 {
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
}

h3 {
  margin-bottom: 15px;
}

h5 {
  margin-bottom: 20px;
}

pre {
  background: lighten(#272822,5%) !important;
  overflow: auto;
  border-radius: .3em;
  font-size: 18px;
  letter-spacing: 0;
  white-space: pre-wrap;
  word-break: keep-all;
  border: none !important;
  text-shadow: none !important;
}

.code-token {
  font-family: 'Andale Mono';
}

.advice-emoji {
  font-size: 30px;
}

.advice-title {
  font-weight: bold;
  margin-left: 5px;
}
</style>
