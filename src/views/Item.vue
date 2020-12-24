<template>
  <div id="detail-page">
    <div class="detail-container">
      <h1>{{ title }}</h1>
      <hr />
      <div style="padding-top: 20px">
        <span>Description:</span>
        {{ description }}
      </div>
      <div style="padding-top: 20px">
        <span>API Link:</span> <a :href="link" target="_blank">{{ link }}</a>
      </div>
      <div style="padding-top: 20px">
        <span>API Category:</span> {{ category }}
      </div>
    </div>
    <div>
      <h3>More In This Category:</h3>
      <RelevantItems />
      <div class="btn-container">
        <button v-if="!isHidden" @click="showAllCategoryItems(); isHidden = true" class="btn">Show All Relevant APIs..</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import RelevantItems from '@/components/RelevantItems.vue'

@Component({
  components: {
    RelevantItems
  }
})

@Watch('title', {
  immediate: true
})

export default class Item extends Vue {
  @Prop() private id!: number;
  @Prop() private title!: string;
  @Prop() private category!: string;
  @Prop() private description!: string;
  @Prop() private link!: string;
  public isHidden = false;

  mounted () {
    this.$store.dispatch('getCategoryItems', this.category)
  }

  showAllCategoryItems () {
    this.$store.dispatch('getAllCategoryItems', this.category)
  }
}
</script>

<style lang="scss">
$title-1: #42b983;
$text-color: #333;
$backgroundButton: #42b983;
#detail-page {
  margin: 40px 0 90px 0;
  height: auto;
  h1 {
    font-size: 28px;
    color: $title-1;
    padding-bottom: 13px;
    padding-left: 10px;
    padding-right: 10px;
  }
  h3 {
    color: $text-color;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  .btn-container {
    text-align: center;
    margin-top: 70px;
      .btn{
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
  .detail-container {
    background-color: #fff;
    padding: 50px;
    border-radius: 25px;
    font-size: 14px;
    span {
      font-weight: bold;
      font-size: 15px;
    }
    a {
      color: orangered;
      font-size: 15px;
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 450px) {
  #detail-page {
    .detail-container {
      padding: 40px;
      font-size: 12px;
      a {
        font-size: 12px;
      }
    }

    .btn-container {
      margin-top: 40px;
      .btn {
        width: auto;
      }
    }
  }
}
</style>
