<template>
    <div id="shopCar">
        <div class="content">
            <div class="content-left" @click="toggleList">
                <div class="logo-wrapper">
                    <div class="logo" :class="{'highLight' : totalCount>0}">
                        <i class="iconfont icon-gouwuche" :class="{'highLight' : totalCount>0}"></i>
                    </div>
                    <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
                </div>

                <div class="price" :class="{'highLight' : totalPrice>0}">￥{{totalPrice}}</div>
                <div class="desc">另需配送费{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay" :class="payClass">{{payDesc}}</div>
            </div>
        </div>
        <div class="ball-container">
            <transition
                    name="drop"
                    v-for="(ball, index) in balls"
                    :key="index"
                    v-show="ball.show"
                    class="ball"
            >
                <div class="inner"></div>
            </transition>
        </div>
        <transition name="fold">
            <div class="shopCar-list" v-show="listShow">
                <div class="list-head">
                    <h1 class="title">购物车</h1>
                    <span class="empty" @click="empty">清空</span>
                </div>
                <div class="list-content" ref="listContent">
                    <ul>
                        <li class="food" v-for="(food, index) in selectFoods" :key="index">
                            <span class="name">{{food.name}}</span>
                            <div class="price">
                                <span>￥{{food.price * food.count}}</span>
                            </div>
                            <div class="cartControl-wrapper">
                                <cart-control :food="food"></cart-control>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>

    </div>
</template>
<script>
import CartControl from '../cartControl/cartControl'
import BScroll from 'better-scroll'
export default {
  name: 'shopCar',
  components: {CartControl},
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    selectFoods: {
      type: Array,
      default () {
        return [ { price: 10, count: 1 } ]
      }
    }

  },
  data () {
    return {
      balls: [
        {show: false}, {show: false}, {show: false}, {show: false}
      ],
      fold: true
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDesc () {
      let res = 0
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        res = this.minPrice - this.totalPrice
        return `￥还差${res}元起送`
      } else { return `去结算` }
    },
    payClass () {
      if (this.totalPrice < this.minPrice) { return 'not-enough' } else { return 'enough' }
    },
    listShow () {
      let that = this
      if (!that.totalCount) {
        that.fold = true
        this.$emit('listShow', false)
        return false
      }
      let show = !that.fold
      if (!that.scroll) {
        if (show) {
          this.$nextTick(() => {
            that.scroll = new BScroll(that.$refs.listContent, { click: true })
          })
        }
      } else {
        that.scroll.refresh()
      }
      this.$emit('listShow', show)
      return show
    }

  },
  methods: {
    toggleList () {
      if (!this.totalCount) {
        return
      }
      this.fold = !this.fold
    },
    empty () {
      this.selectFoods.forEach((food) => {
        food.count = 0
      })
    }

  }
}
</script>

<style lang="stylus">
    @import '//at.alicdn.com/t/font_1227783_az9moxnc80b.css';
    @import "../../assets/stylus/mixin.styl";
    #shopCar
        position fixed
        left 0
        bottom 0
        z-index 50
        width 100%
        height 48px
        .content
            display flex
            background #141d27
            font-size 0
            .content-left
                flex 1
                .logo-wrapper
                    display inline-block
                    position relative
                    top -10px
                    margin 0 12px
                    padding 6px
                    width 56px
                    height 56px
                    box-sizing border-box
                    vertical-align top
                    border-radius  50%
                    background #141d27
                    .logo
                        width 100%
                        height: 100%;
                        border-radius 50%
                        background #2b343c
                        text-align center
                        &.highLight
                            background rgb(0, 160, 220)
                        .icon-gouwuche
                            line-height 44px
                            font-size 24px
                            color #80858a
                            &.highLight
                                color #fff

                    .num
                        position absolute
                        top 0
                        right 0
                        width 24px
                        height 16px
                        line-height 16px
                        text-align center
                        border-radius 16px
                        font-weight 700
                        font-size 9px
                        color #fff
                        background rgb(240, 20, 20)
                        box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
                .price
                    display inline-block
                    vertical-align top
                    margin-top 12px
                    line-height 24px
                    padding-right 12px
                    box-sizing border-box
                    font-size 16px
                    font-weight 700
                    color rgba(255, 255, 255, 0.4)
                    &.highLight
                        color #fff
                .desc
                    display inline-block
                    vertical-align top
                    line-height 24px
                    margin 12px 0 0 12px
                    font-size 10px
                    color rgba(255, 255, 255, 0.4)
            .content-right
                flex 0 0 0 105px
                width 105px
                background #2b333b
                .pay
                    height 48px
                    line-height 48px
                    text-align center
                    font-size 12px
                    font-weight 700
                    color rgba(255, 255, 255, 0.4)
                    &.not-enough
                        background #2b333b
                    &.enough
                        background #00b43c
                        color #fff

        .ball-container
            .ball
                position fixed
                left 32px
                bottom 22px
                z-index 200
                &.drop-transition
                    transition all 0.4s
                    .inner
                        width 16px
                        height 16px
                        border-radius 50%
                        background rgb(0, 160, 220)

        .shopCar-list
            position fixed
            bottom 48px
            left 0
            z-index -1
            width 100%
            &.fold-enter-active, &.fold-leave-active
                transition all 1
                transform translate3d(0, -100%, 0)
            &.fold-enter, &.fold-leave-to
                transform translate3d(0, 0, 0)
            .list-head
                height 40px
                line-height 40px
                padding 0 18px
                background #f3f5f7
                border-bottom 1px solid rgba(1, 17, 27, 0.1)
                .title
                    float left
                    font-size 14px
                    color rgb(7, 17, 27)
                .empty
                    float right
                    font-size 12px
                    color rgb(0, 160 200)

            .list-content
                padding 0 18px
                max-height 217px
                background #fff
                overflow hidden
                ul
                    list-style none
                .food
                    position absolute
                    padding 12px 0
                    box-sizing border-box
                    border-1px(rgba(7, 17, 27, 0.1))
                    .name
                        line-height 24px
                        font-size 14px
                        color rgb(7, 17, 27)
                    .price
                        position absolute
                        right 90px
                        bottom 12px
                        line-height 24px
                        font-size 14px
                        font-weight 700
                        color rgb(240, 20, 20)
                    .cartControl-wrapper
                        position absolute
                        right 0
                        top 0

</style>
