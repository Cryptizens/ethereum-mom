<template lang="html">
  <div>
    <app-title></app-title>
    <input placeholder="Ask me anything, sonny" id="searchInput"></input>
    <h2>Mom's favorites:</h2>
    <app-snippet v-for="snippet in snippets" :snippet="snippet"></app-snippet>
  </div>
</template>

<script>
import Title from './Home/Title.vue'
import Snippet from './Home/Snippet.vue'
import autocomplete from 'autocomplete.js'
import algolia from 'algoliasearch'

export default {
  data() {
    return {
      snippets: this.$store.getters.favoriteSnippets
    }
  },
  components: {
    'app-title': Title,
    'app-snippet': Snippet
  },
  mounted () {
      var client = algolia('BK3XWRO8GC', '55c2903e3440cf48741911e84108312d');
      var index = client.initIndex('ethereum-snippets');

      autocomplete('#searchInput', { hint: false }, [
        {
          source: autocomplete.sources.hits(index, { hitsPerPage: 3 }),
          displayKey: 'title',
          templates: {
            suggestion: function(suggestion) {
              return '<a href=/' + suggestion.slug + '>' + suggestion._highlightResult.title.value + '</a>';
            }
          }
        }
      ]).on('autocomplete:selected', function(event, suggestion, dataset) {
        location.href = suggestion.slug;
      });
    }
  }
</script>

<style lang="scss">
h2 {
  font-weight: 400;
  text-transform: uppercase;
  padding-left: 15px;
  font-size: 14px
}
@media (max-width: 1000px){
  .algolia-autocomplete{
    width:100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .aa-input{
    font-size:16px !important;
  }
}

@media (min-width: 1000px){
  h2 {
    margin-bottom: -25px;
  }
}

.algolia-autocomplete{
    width:70%;
    margin-left: 15%;
    margin-right: 15%;
    border:0;
    box-shadow: 0 2px 20px rgba(0,0,0,0.17);
    margin-bottom: 60px;
}
.autocomplete-header .algolia-autocomplete{
    width:calc(100% - 60px);
    margin-left:20px
}
.algolia-autocomplete .aa-input:-ms-input-placeholder{
    color:#c0c9cf
}
.algolia-autocomplete .aa-input::placeholder{
    color:#c0c9cf
}
.algolia-autocomplete .aa-hint,.algolia-autocomplete .aa-input{
    border-radius:3px;
    width:100%;
    padding:18px 0 18px 48px;
    border:0;
    font-size:18px;
    box-sizing:border-box;
    border:1px solid transparent;
    outline:none
}
.algolia-autocomplete .aa-hint{
    color:#000;
    background-color:$gray-200!important
}
.autocomplete-header .algolia-autocomplete .aa-hint{
    background-color:$gray-100!important
}
.algolia-autocomplete .aa-input{
    background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGU+JiMyMzk7JiMxMjg7JiMxMzA7PC90aXRsZT48ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPjxnIGlkPSJDYW52YXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOCAtMTM2MCkiPjxnIGlkPSImIzIzOTsmIzEyODsmIzEzMDsiPjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjggMTM1OC44OSkiIGZpbGw9IiM4OTk5QTMiLz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDEwLjQyNjMgNy43MTQyOUMgMTAuNDI2MyA5LjkxOTY0IDguNjMxNyAxMS43MTQzIDYuNDI2MzQgMTEuNzE0M0MgNC4yMjA5OCAxMS43MTQzIDIuNDI2MzQgOS45MTk2NCAyLjQyNjM0IDcuNzE0MjlDIDIuNDI2MzQgNS41MDg5MyA0LjIyMDk4IDMuNzE0MjkgNi40MjYzNCAzLjcxNDI5QyA4LjYzMTcgMy43MTQyOSAxMC40MjYzIDUuNTA4OTMgMTAuNDI2MyA3LjcxNDI5Wk0gMTQuOTk3OCAxNS4xNDI5QyAxNC45OTc4IDE0LjgzOTMgMTQuODcyOCAxNC41NDQ2IDE0LjY2NzQgMTQuMzM5M0wgMTEuNjA0OSAxMS4yNzY4QyAxMi4zMjgxIDEwLjIzMjEgMTIuNzEyMSA4Ljk4MjE0IDEyLjcxMjEgNy43MTQyOUMgMTIuNzEyMSA0LjI0MTA3IDkuODk5NTUgMS40Mjg1NyA2LjQyNjM0IDEuNDI4NTdDIDIuOTUzMTIgMS40Mjg1NyAwLjE0MDYyNSA0LjI0MTA3IDAuMTQwNjI1IDcuNzE0MjlDIDAuMTQwNjI1IDExLjE4NzUgMi45NTMxMiAxNCA2LjQyNjM0IDE0QyA3LjY5NDIgMTQgOC45NDQyIDEzLjYxNjEgOS45ODg4NCAxMi44OTI5TCAxMy4wNTEzIDE1Ljk0NjRDIDEzLjI1NjcgMTYuMTYwNyAxMy41NTEzIDE2LjI4NTcgMTMuODU0OSAxNi4yODU3QyAxNC40Nzk5IDE2LjI4NTcgMTQuOTk3OCAxNS43Njc5IDE0Ljk5NzggMTUuMTQyOVoiLz48L2RlZnM+PC9zdmc+);
    background-repeat:no-repeat;
    background-position:21px;
    transition:background-color .3s,border-color .3s;
    padding-right: 15px;
}
.algolia-autocomplete .aa-input:focus{
    border-color:$gray-200;
    box-shadow:0 0 1px rgba(0,0,0,.05);
    background-color:hsla(0,0%,100%,.91)!important;
}
.autocomplete-header .algolia-autocomplete .aa-input{
    background-position:11px
}
.autocomplete-header .algolia-autocomplete .aa-hint,.autocomplete-header .algolia-autocomplete .aa-input{
    padding:10px 0 10px 35px;
    font-size:16px
}
.autocomplete-header{
    -ms-flex-positive:1;
    flex-grow:1
}
.algolia-autocomplete .aa-dropdown-menu{
    width:100%;
    text-align:left;
    background-color:#fff;
    box-shadow:0 0 4px rgba(0,0,0,.1);
    margin-top:6px;
    border-radius:3px;
    max-height:300px;
    overflow-y:scroll
}
.algolia-autocomplete .aa-dropdown-menu .aa-suggestion{
    cursor:pointer;
    padding:15px 20px
}
.algolia-autocomplete .aa-dropdown-menu .aa-suggestion.aa-cursor{
    background-color: #f3f4f4;
}
.algolia-autocomplete .aa-dropdown-menu .aa-suggestion em{
    font-weight:700;
    font-style:normal
}
@media screen and (min-width:560px){
    .algolia-autocomplete .aa-dropdown-menu{
        background-image:url(https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-light.svg);
        background-size:50px 50px;
        background-repeat:no-repeat;
        background-position:right 15px top 0
    }
    .algolia-autocomplete .aa-dropdown-menu .aa-suggestion:first-child.aa-cursor:not(.aa-empty){
        background-image:url(https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-light.svg);
        background-size:50px 50px;
        background-repeat:no-repeat;
        background-position:right 15px top 0
    }
}
@media screen and (max-width:712px){
    .algolia-autocomplete .aa-hint,.algolia-autocomplete .aa-input{
        font-size:16px
    }
    .algolia-autocomplete .aa-dropdown-menu{
        font-size:14px
    }
}
.algolia-autocomplete .aa-empty{
    font-size:14px;
    color:$gray-600;
    background-image:none!important;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-pack:justify;
    justify-content:space-between;
    background-color:#fff
}
.algolia-autocomplete .aa-empty em{
    color:$gray-800
}
</style>
