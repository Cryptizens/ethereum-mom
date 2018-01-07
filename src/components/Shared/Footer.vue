<template lang="html">
    <div class="container">
      <div class="footer-container">
        <div>
          © 2018 / Brought to you by <a target="_blank" href="https://cryptizens.io">Cryptizens.io</a> and inspired by <a target="_blank" href="https://codetogo.io">Codetogo.io</a>
        </div>
        <div>
          <!-- <router-link to="/about">About</router-link> -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container {
  height: $footer-height;
  border-top: 1px solid $gray-200;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 10px 20px 10px;
}
.footer-container {
  color: white;
  font-size: 14px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
</style>
