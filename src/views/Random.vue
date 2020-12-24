<template>
  <div id="random-page" v-if="randomItem">
    <div class="random-container">
      <div class="random-box">
        <h1>{{ randomItem.API }}</h1>
        <hr />
        <div style="padding-top: 20px">
          <span>Description:</span>
          {{ randomItem.Description }}
        </div>
        <div style="padding-top: 20px">
          <span>API Link:</span> <a :href="randomItem.Link" target="_blank">{{ randomItem.Link }}</a>
        </div>
        <div style="padding-top: 20px">
          <span>API Category:</span> {{ randomItem.Category }}
        </div>
      </div>
    </div>
    <div class="btn-container">
      <button @click="newRandomItem" class="btn">SURPRISE ME!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: mapState([
    'randomItem'
  ])
})

export default class Item extends Vue {
  public randomItem!: object;

  mounted () {
    this.$store.dispatch('getRandomItem')
  }

  newRandomItem () {
    this.$store.dispatch('getRandomItem')
  }
}
</script>

<style lang="scss">
$title: #42b983;
$btnColor: orangered;
$text: #333;
#random-page {
  height: 700px;
  margin: 40px 0;
  .btn-container {
    text-align: center;
      .btn{
        border: none;
        width: 25%;
        background: $btnColor;
        outline: none;
        color: #fff;
        padding: 10px;
        font-size: 15px;
        font-weight: bold;
        height: 45px;
        border-radius: 5px;
        &:hover {
          opacity: 0.85;
          cursor: pointer;
        }
    }
  }
  .random-container {
    display: flex;
    h1 {
      font-size: 28px;
      color: $title;
    }
    span {
      font-size: 15px;
      font-weight: bold;
    }
    a {
      font-size: 15px;
      color: orangered;
      text-decoration: underline !important;
      display: inline-block;
    }
    .random-box {
      flex: 0 0 auto;
      margin: 100px auto;
      margin-bottom: 60px;
      width: 30%;
      height: auto;
      background-color: #fff;
      padding: 50px;
      border-radius: 25px;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 450px) {
    #random-page {
       height: 450px;
      .random-container {
        h1 {
          font-size: 19px;
        }
        a {
          font-size: 12px;
        }
        .random-box {
          margin: 0 auto;
          margin-bottom: 30px;
          width: 50%;
          font-size: 12px;
        }
      }

      .btn-container {
      text-align: center;
        .btn{
          width: auto;
          font-size: 14px;
        }
    }
  }
}
</style>
