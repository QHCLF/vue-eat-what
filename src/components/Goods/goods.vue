<template>
    <div id="goods">
        <div class="menu-wrapper" ref="menu">
            <ul>
                <li v-for="(item, index) in goods"
                    :key="index"
                    class="menu-item"
                    :class="{'current' : currentIndex === index}"
                    @click="selectMenu(index, $event)"
                >
                    <span class="text">
                        <span class="icon"
                              v-show="item.type > 0"
                              :class="classMap[item.type]">

                        </span>
                        {{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="food-wrapper" ref="foods">
            <ul>
                <li class="food-list food-list-hook" v-for="(item, index) in goods" :key="index">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li class="food-item" v-for="(food, index) in item.foods" :key="index" @click="selectFoods(food, $event)">
                            <div class="icon">
                                <img :src="food.icon" width="57" height="57">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="new">￥{{food.price}}</span>
                                    <span class="old" v-show="food.oldPrice"></span>
                                </div>
                                <div class="cartControl-wrapper">
                                    <cart-control :food="food"></cart-control>
                                </div>
                            </div>

                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <shop-car
                :select-foods="selectFood"
                :delivery-price="deliveryPrice"
                :minPrice="minPrice"
                v-on:listShow="listShow"
        ></shop-car>
        <transition name="fade">
            <div class="list-mask" v-show="isShow"></div>
        </transition>
        <food-detail :food="choiceFood" ref="foodDetail"></food-detail>

    </div>
</template>

<script>
import axios from 'axios/index'
import BScroll from 'better-scroll'
import ShopCar from '../../components/shopCar/ShopCar'
import CartControl from '../../components/cartControl/cartControl'
import FoodDetail from '../../components/foodDetail/foodDetail'
export default {
  name: 'goods',
  components: {FoodDetail, CartControl, ShopCar},
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      deliveryPrice: 0,
      minPrice: 0,
      isShow: false,
      choiceFood: {}
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    async getData () {
      let detail = await axios.get('/static/data.json')
      this.goods = detail.data.goods
      this.deliveryPrice = detail.data.seller.deliveryPrice
      this.minPrice = detail.data.seller.minPrice
    },
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menu, { click: true })

      this.foodsScroll = new BScroll(this.$refs.foods, {
        probeType: 3,
        click: true
      })

      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foods.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    listShow: function (event) {
      if (!this.selectFood.length) {
        this.isShow = false
      } else {
        this.isShow = event
      }
    },
    selectFoods (food, event) {
      if (!event.constructor) {
        return
      }
      this.choiceFood = food
      this.$refs.foodDetail.show()
    }

  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFood () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  async mounted () {
    await this.getData()
    this.$nextTick(() => {
      this._initScroll()
      this._calculateHeight()
    })
  }

}
</script>

<style lang="stylus" scoped>
    @import "../../assets/stylus/mixin.styl";
    #goods
        display flex
        position absolute
        top 174px
        bottom 50px
        width 100%
        overflow hidden
        .menu-wrapper
            flex 0 0 80px
            width 80px
            background #f3f5f7
            .menu-item
                display table
                height 54px
                width 56px
                line-height 14px
                padding 0 12px
                &.current
                    position relative
                    z-index 10
                    margin-top -1px
                    background-color #fff
                    font-weight 700
                    .text
                        border-none()
                .icon
                    display inline-block
                    vertical-align top
                    width 12px
                    height 12px
                    margin-right 2px
                    background-size 12px 12px
                    background-repeat no-repeat
                    &.decrease
                        bg-image('decrease_3')
                    &.discount
                        bg-image('discount_3')
                    &.guarantee
                        bg-image('guarantee_3')
                    &.invoice
                        bg-image('invoice_3')
                    &.special
                        bg-image('special_3')

                .text
                    display table-cell
                    width 56px
                    vertical-align middle
                    border-1px(rgba(7, 17,27, 0.1))
                    font-size 12px
        .food-wrapper
            flex 1
            ul
                list-style none
                .title
                    padding-left 14px
                    height 26px
                    line-height 26px
                    border-left 2px solid #dgdd1
                    font-size 12px
                    color: rgb(147, 153, 159)
                    background #f3f5f7
                .food-item
                    display flex
                    margin 18px
                    border-1px(rgba(7, 17,27, 0.1))
                    padding-bottom 18px
                    &:last-child
                        border-none()
                        margin-bottom 0
                    .icon
                        flex 0 0 57px
                        margin-right 10px
                    .content
                        flex 1
                        .name
                            margin 2px 0 8px 0
                            height 14px
                            line-height 14px
                            font-size 14px
                            color rgb(7, 17, 27)
                        .desc, .extra
                            line-height 10px
                            font-size 10px
                            color rgb(147, 153, 159)
                        .desc
                            margin-bottom 8px
                        .extra
                            &.count
                                margin-right 12px
                        .price
                            font-weight 700
                            line-height 24px
                            .new
                                margin-right 8px
                                font-size 14px
                                color: rgb(240, 20, 20)
                            .old
                                text-decoration line-through
                                font-size 10px
                                color rgb(143, 157, 159)

                        .cartControl-wrapper
                            position absolute
                            right 0
                            bottom 12px
        .list-mask
            position fixed
            bottom 0
            left 0
            width 100%
            height 100%
            z-index 31
            background rgba(1, 17, 27, 0.6)
            backdrop-filter blur(10px)
            &.fade-enter-active, &.fade-leave-active
                opacity 1
                background rgba(1, 17, 27, 0.6)
            &.fade-enter, &.fade-leave-to
                transform translate3d(0, 0, 0)
</style>
