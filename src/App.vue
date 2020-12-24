<template>
  <div id="app">
      <AppHeader />
      <div class="container">
        <router-view/>
      </div>
      <AppFooter />
  </div>
</template>

<script lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
$main-back: #f8f9fa;
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background:  $main-back;
  a {
    font-weight: bold;
    text-decoration: none;
    }
  .container {
    width: 80%;
    margin: auto;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
  }
}

@media screen and (max-width: 450px) {
  #app {
    .container {
      width: 85%;
    }
  }
}
</style>
