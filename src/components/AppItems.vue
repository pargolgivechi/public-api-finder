<template>
  <div id="home-items">
    <div class="items">
      <AppItem v-for="(item, i) in items" :key="i" :item="item" :id="i" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

import AppItem from '@/components/AppItem.vue'

@Component({
  components: {
    AppItem
  },
  computed: mapState([
    'items'
  ])
})

export default class AppItems extends Vue {
  public items!: Array<object>;

  mounted () {
    this.$store.dispatch('getItems')
  }
}
</script>

<style lang="scss">
#home-items{
  .items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 1500px){
    .items {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 800px){
    .items {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 450px){
    .items {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
