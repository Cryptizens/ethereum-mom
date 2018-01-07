<template lang="html">
  <div>
    <a v-bind:href="snippetLink">
      <h3>{{ snippet.title }}</h3>
    </a>
    <h5>Last updated {{ snippet.updated_at }}</h5>
    <pre>
      <code class="sol">{{ rawCode }}</code>
    </pre>
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
    snippetLink() {
      return '#'
    },
    rawCode() {
      return this.snippet.code.join('\n')
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  background-color: #fff;
  border-radius: 6px;
  padding: 40px;
  margin: 40px 0;
  border: 1px solid $gray-200;
  transition: box-shadow .25s;

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
  background: #272822;
  overflow: auto;
  border-radius: .3em;
  font-size: 18px;
  letter-spacing: 0;
  white-space: pre-wrap;
  word-break: keep-all;
}

code {
  background: #272822 !important;
  margin-bottom: -25px;
  padding-right: 2em !important;
  padding-left: 2em !important;
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
