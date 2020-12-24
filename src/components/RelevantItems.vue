<template>
  <div class="relevant">
    <AppItem v-for="(item, i) in categoryItems" :key="i" :item="item" :id="i" />
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
    'categoryItems'
  ])
})

export default class RelevantItems extends Vue {
  public categoryItems!: Array<object>;
}
</script>

<style lang="scss">
.relevant {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
@media screen and (max-width: 800px){
  .relevant {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 450px){
  .relevant {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
