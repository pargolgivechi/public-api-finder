<template>
  <div class="category-items-page">
    <h2>APIs in the Category of {{ category }}</h2>
    <hr />
    <div class="category-items">
      <AppItem v-for="(item, i) in categoryItems" :key="i" :item="item" :id="i" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

import AppItem from '@/components/AppItem.vue'

@Component({
  components: {
    AppItem
  },
  computed: mapState([
    'categoryItems'
  ])
})

export default class CategoryItems extends Vue {
  @Prop() private category!: string;
  public categoryItems!: Array<object>;

  mounted () {
    this.$store.dispatch('getAllCategoryItems', this.category)
  }
}
</script>

<style lang="scss">
$title-color: #42b983;
.category-items-page{
  margin: 60px 0;
  h2 {
    color: $title-color;
    text-align: center;  }
  .category-items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    margin: 50px 0;
  }
  @media screen and (max-width: 1500px){
    .category-items {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 900px){
    .category-items {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 450px){
    .category-items {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
