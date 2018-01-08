<template lang="html">
  <div>
    <app-title></app-title>

    <ais-index
      app-id="BK3XWRO8GC"
      api-key="55c2903e3440cf48741911e84108312d"
      index-name="ethereum-snippets"
    >
      <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;">
        <ais-input placeholder="How to avoid being stuck while developing Smart Contracts..."></ais-input>
      </span>
      <ais-results>
        <template slot-scope="{ result }">
          <app-snippet :snippet="result"></app-snippet>
        </template>
      </ais-results>
    </ais-index>
  </div>
</template>

<script>
import Title from './Home/Title.vue'
import Snippet from './Home/Snippet.vue'

export default {
  components: {
    'app-title': Title,
    'app-snippet': Snippet
  }
}
</script>

<style>
.algolia-autocomplete{
    width:70%;
    margin-left: 15%;
    margin-right: 15%;
    border:0;
    box-shadow: 0 2px 20px rgba(0,0,0,0.17);
}
.algolia-autocomplete .ais-input{
    border-radius:3px;
    width:100%;
    padding:18px 0 18px 48px;
    border:0;
    font-size:18px;
    box-sizing:border-box;
    border:1px solid transparent;
    outline:none;
    background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGU+JiMyMzk7JiMxMjg7JiMxMzA7PC90aXRsZT48ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPjxnIGlkPSJDYW52YXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOCAtMTM2MCkiPjxnIGlkPSImIzIzOTsmIzEyODsmIzEzMDsiPjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjggMTM1OC44OSkiIGZpbGw9IiM4OTk5QTMiLz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDEwLjQyNjMgNy43MTQyOUMgMTAuNDI2MyA5LjkxOTY0IDguNjMxNyAxMS43MTQzIDYuNDI2MzQgMTEuNzE0M0MgNC4yMjA5OCAxMS43MTQzIDIuNDI2MzQgOS45MTk2NCAyLjQyNjM0IDcuNzE0MjlDIDIuNDI2MzQgNS41MDg5MyA0LjIyMDk4IDMuNzE0MjkgNi40MjYzNCAzLjcxNDI5QyA4LjYzMTcgMy43MTQyOSAxMC40MjYzIDUuNTA4OTMgMTAuNDI2MyA3LjcxNDI5Wk0gMTQuOTk3OCAxNS4xNDI5QyAxNC45OTc4IDE0LjgzOTMgMTQuODcyOCAxNC41NDQ2IDE0LjY2NzQgMTQuMzM5M0wgMTEuNjA0OSAxMS4yNzY4QyAxMi4zMjgxIDEwLjIzMjEgMTIuNzEyMSA4Ljk4MjE0IDEyLjcxMjEgNy43MTQyOUMgMTIuNzEyMSA0LjI0MTA3IDkuODk5NTUgMS40Mjg1NyA2LjQyNjM0IDEuNDI4NTdDIDIuOTUzMTIgMS40Mjg1NyAwLjE0MDYyNSA0LjI0MTA3IDAuMTQwNjI1IDcuNzE0MjlDIDAuMTQwNjI1IDExLjE4NzUgMi45NTMxMiAxNCA2LjQyNjM0IDE0QyA3LjY5NDIgMTQgOC45NDQyIDEzLjYxNjEgOS45ODg4NCAxMi44OTI5TCAxMy4wNTEzIDE1Ljk0NjRDIDEzLjI1NjcgMTYuMTYwNyAxMy41NTEzIDE2LjI4NTcgMTMuODU0OSAxNi4yODU3QyAxNC40Nzk5IDE2LjI4NTcgMTQuOTk3OCAxNS43Njc5IDE0Ljk5NzggMTUuMTQyOVoiLz48L2RlZnM+PC9zdmc+);
    background-repeat:no-repeat;
    background-position:21px;
    padding-right: 20px;
    transition:background-color .3s,border-color .3s
}
.algolia-autocomplete .ais-input:focus{
    border-color:$gray-200;
    box-shadow:0 0 1px rgba(0,0,0,.05);
    background-color:hsla(0,0%,100%,.91)!important
}
.algolia-autocomplete .ais-input:-ms-input-placeholder{
    color:#c0c9cf
}
.algolia-autocomplete .ais-input::placeholder{
    color:#c0c9cf
}
</style>
