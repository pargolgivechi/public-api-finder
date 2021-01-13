<template>
  <div id="nav">
    <nav class="container">
        <router-link to="/">Home<span>|</span></router-link>
        <router-link to="/categories">Categories<span>|</span></router-link>
        <router-link to="/random">Random</router-link>
        <img class="logo-img" alt="Vue-logo" src="../assets/vue-logo.png">
        <span class="logo-span">Public API Finder</span>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppHeader extends Vue {

}
</script>

<style lang="scss">
$background: #fff;
$text-color: #333;
$shadow: #c4c4c4;
$active-color: #42b983;
#nav {
  font-size: 16px;
  background: $background;
  position: sticky;
  top: 0;
  padding: 30px 0;
  box-shadow: 0 0 9px;
  color: $shadow;
  z-index: 1;
    .container {
      position: relative;
      .logo-span {
        position: absolute;
        display: inline;
        top: 0;
        right: 0;
        color: $text-color;
        opacity: 0.7;
        font-weight: bold;
      }
      .logo-img {
        position: absolute;
        top: -8px;
        right: 150px;
        width: 30px;
      }
      span {
        padding-right: 15px;
        padding-left: 15px;
      }
    }
    nav {
      display: flex;
      flex-direction: row;
      a {
        color: $text-color;
        &.router-link-exact-active {
          color: $active-color;
        }
        &:hover {
          color: $active-color;
        }
      }
  }
}

@media screen and (max-width: 450px) {
  #nav {
    .container {
      font-size: 15px;
      span {
        padding-right: 7px;
        padding-left: 7px;
      }
      .logo-span {
        display: none;
      }
      .logo-img {
        right: -10px;
        width: 45px;
        top: -13px;
      }
    }
  }
}
</style>
