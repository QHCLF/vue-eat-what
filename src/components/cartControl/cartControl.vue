<template>
    <div id="cartControl">
        <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart">
            <i class="iconfont icon-minus-circle"></i>
        </div>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="cart-add" @click="addCart">
            <i class="iconfont icon-plus-circle"></i>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'cartControl',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart (event) {
      if (!event.constructor) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    decreaseCart (event) {
      if (!event.constructor) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import "//at.alicdn.com/t/font_1227783_nfpgrf322mk.css"
    #cartControl
        font-size 0
        .cart-decrease, .cart-add
            display inline-block
            line-height 24px
            font-size 24px
            padding 6px
            color rgb(0, 160, 220)
        .cart-count
            display inline-block
            vertical-align top
            width 12px
            padding-top 8px
            line-height 24px
            text-align center
            font-size 10px
            color rgb(147, 153, 159)
        .cart-add
            display inline-block

</style>
