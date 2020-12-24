<template>
  <div id="home-page">
    <div class="sort-btn-container">
        <button @click="sortItemsAsc" class="btn-2">Sort A-Z</button>
        <button @click="sortItemsDesc" class="btn-3">Sort Z-A</button>
    </div>
    <AppItems />
    <div class="btn-container">
      <button v-if="!isHidden" @click="showAllItems(); isHidden = true" class="btn btn-1">Show All APIs..</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppItems from '@/components/AppItems.vue'

@Component({
  components: {
    AppItems
  }
})

export default class Home extends Vue {
  public isHidden = false;

  sortItemsAsc () {
    this.$store.commit('sortItemsAsc')
  }

  sortItemsDesc () {
    this.$store.commit('sortItemsDesc')
  }

  showAllItems () {
    this.$store.dispatch('getAllItems')
  }
}
</script>

<style lang="scss">
$backgroundButton: #42b983;

#home-page{
  .sort-btn-container {
    text-align: right;
    margin-top: 40px;
    .btn-2 {
      margin-right: 10px;
    }
    .btn-2, .btn-3{
        display: inline-block;
        border: none;
        width: 100px;
        background: $backgroundButton;
        outline: none;
        color: #fff;
        border-radius: 5px;
        padding: 10px;
        font-size: 12px;
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
    }
  }

  .btn-container {
    text-align: center;
    margin: 70px 0;
      .btn-1{
        border: none;
        width: 50%;
        background: $backgroundButton;
        outline: none;
        color: #fff;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
    }
  }
}

@media screen and (max-width: 450px) {
    #home-page {
      .sort-btn-container {
        margin-top: 20px;
        .btn-2 {
          margin-right: 5px;
        }
        .btn-2, .btn-3{
            width: 65px;
            font-size: 11px;
        }
      }

      .btn-container {
        margin-top: 0;
          .btn-1{
            width: auto;
        }
      }
    }
}
</style>
