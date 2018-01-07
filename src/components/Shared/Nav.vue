<template lang="html">
  <nav>
    <div class="container">
      <div class="nav-container nav-spacer">
        <a href="/">
          <div id="logo">
            👩
            &nbsp;
            <div>Ethereum Mom</div>
          </div>
        </a>
        <div id="menu">
          <router-link class="link" to="/about">About</router-link>
          <a class="link" href="/">Faucet</a>
          <a class="link hide-mobile" href="https://github.com/thomasvds/ethereum-mom" target="_blank" rel="noopener">Contribute</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
nav {
  background-color: $foreground-color;
  border-bottom: 1px solid $gray-200;
  height: $nav-height;

  .link {
    padding: 0 8px;
    color: $gray-800;
  }
}
.nav-spacer, nav {
  padding: 10px;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
}
.nav-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}

#logo {
  display: flex;
  align-items: center;
  font-weight: 900;
}
</style>
