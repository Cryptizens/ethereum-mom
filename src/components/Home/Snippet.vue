<template lang="html">
  <div>
    <div v-for="snippet in snippets">
      <div class="card">
        <a href="/">
          <h3>{{ snippet.title }}</h3>
        </a>
        <h5>Last updated {{ snippet.updated_at }}</h5>
        <pre>
          <code class="sol">{{ snippet.code.join('\n') }}</code>
        </pre>
        <p><span style="font-size: 30px">💁</span><b>&nbsp;Mummy says: </b><span v-html="snippet.advice"></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { snippets } from './snippets'
export default {
  data() {
    return {
      snippets: snippets
    }
  }
}
</script>

<style lang="scss">
.card {
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

  a {
    text-decoration: none;
    color: inherit;
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
}

pre {
  background: #272822;
  overflow: auto;
  border-radius: .3em;
  font-size: 18px;
  letter-spacing: 0;
  white-space: pre-wrap;
  word-break: keep-all;

  code {
    background: #272822 !important;
    margin-bottom: -25px;
    padding-right: 2em !important;
    padding-left: 2em !important;
  }
}

.output {
  background-color: #EEF0F1;
  padding: 15px;
  border-radius: .3em;
  font-size: 14px;
  line-height: 20px;
  font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  color: var(--gray-800);
  margin-bottom: 0;
}

.code-token {
  font-family: 'Andale Mono';
}
</style>
