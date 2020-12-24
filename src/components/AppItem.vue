<template>
  <router-link :to="{name: 'Item', params: {id: id, title: item.API, category: item.Category, description: item.Description, link: item.Link}}">
    <div class="item">
      <div class="category-tag" v-bind:style="{ 'background-color': getRandomColor() }">
          {{ item.Category }}
      </div>
      <h4>
        {{ item.API }}
      </h4>
      <p>
        {{ item.Description }}
      </p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
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

export default class AppItem extends Vue {
  @Prop() private item!: object;
  @Prop() private id!: number;
}
</script>

<style lang="scss">
$background: #fff;
$shadow: #c4c4c4;
$hover: #42b983;
$text-color: #333;
.item {
  background: $background;
  min-width: 100px;
  height: 180px;
  padding: 30px 40px;
    &:hover {
      box-shadow: 0 0 7px;
      color: $shadow;
      h4 {
        color: $hover;
        font-size: 19px;
      }
    }
    h4 {
      padding-bottom: 5px;
      color: $text-color;
      font-size: 18px;
    }
    p {
      color: $text-color;
      font-size: 14px;
      padding-top: 15px;
      border-top: solid 0.1px $text-color;
      font-weight: normal;
    }
    .category-tag {
      max-width: 70px;
      padding:  5px;
      text-align: center;
      font-size: 10px;
      border-radius: 25px;
      color: $text-color;
      margin-top: 10px;
      margin-bottom: 20px;
    }
}
</style>
