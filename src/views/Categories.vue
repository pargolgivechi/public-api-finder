<template>
  <div class="categories-page">
    <ul>
      <li v-for="category in categories" :key="category" v-bind:style="{ 'background-color': getRandomColor() }" >
        <router-link :to="{name: 'CategoryItems', params: {category: category}}">{{ category }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: mapState([
    'categories'
  ]),
  methods: {
    getRandomColor () {
      const letters = 'BCDEF'.split('')
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)]
      }
      return color
    }
  }
})
export default class Categories extends Vue {
  public categories!: Array<string>;

  mounted () {
    this.$store.dispatch('getCategories')
  }
}
</script>

<style lang="scss">
$hover: #42b983;
$shadow: #c4c4c4;
$text-color: #333;
.categories-page{
  ul {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 7px;
    margin: 40px 0;
    padding: 0;
    li {
      font-size: 13px;
      padding: 40px 2px;
      list-style: none;
      min-width: 100px;
      height: 20px;
      text-align: center;
        &:hover {
          box-shadow: 0 0 6px;
          color: $shadow;
          a {
            color: $hover;
            font-size: 14px;
          }
      }
      a {
        color: $text-color;
      }
    }
  }
@media screen and (max-width: 1500px){
  ul {
      grid-template-columns: repeat(6, 1fr);
    }
  }
@media screen and (max-width: 900px){
  ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }
@media screen and (max-width: 700px){
  ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
@media screen and (max-width: 450px){
  ul {
    grid-template-columns: repeat(2, 1fr);
   }
 }
@media screen and (max-width: 300px){
  ul {
    grid-template-columns: repeat(1, 1fr);
   }
 }
}
</style>
