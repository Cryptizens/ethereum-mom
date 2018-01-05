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
          <a class="link" href="/all">Use Cases</a>
          <a class="link hide-mobile" id="contribute" href="/" target="_blank" rel="noopener">Contribute</a>
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
  background-color: #fff;
  border-bottom: 1px solid $gray-200;

  .link {
    padding: 0 8px;
    color: $gray-800;
  }

  a {
    text-decoration: none;
    color: inherit;
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
