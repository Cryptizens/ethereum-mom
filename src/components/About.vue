<template lang="html">
  <div>
    <h3>About Ethereum Mom</h3>
    <p class="about-text">Ethereum Mom aims at making Ethereum Smart Contracts development fun and easy. Enjoy a relaxed approach, with answers that you'd only dare to get from your Mom because you think you should know them.</p>
    <p class="about-text">This site is being actively developed by Thomas Vanderstraeten from <a target="_blank" href="https://cryptizens.io">Cryptizens.io</a>, and is fully welcoming to contributions from the community: check the GitHub repo <a target="_blank" href="https://github.com/thomasvds/ethereum-mom">here</a> to participate!</p>
    <p class="about-text">The design and concept of this site is largely inspired by the excellent <a target="_blank" href="https://codetogo.io">Codetogo.io</a> website, built by <a href="https://jadjoubran.io" target="_blank" rel="noopener">Jad Joubran</a> and <a href="https://nicolesaidy.com" target="_blank" rel="noopener">Nicole Saidy</a>. Cheers to them.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
div {
  background-color: $foreground-color;
  box-shadow: 0 2px 20px rgba(0,0,0,0.17);
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

.expander {

}

a {
  text-decoration: underline;
}

h3 {
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 15px;
}

.about-text {
  color: $gray-800;
  line-height: 34px;
  font-size: 18px;
}
</style>
