<template>
    <div id="foodDetail" v-show="showFlag" ref="foodDetail">
        <div class="food-content">
            <div class="img-header">
                <img :src="food.image">
                <div class="back" @click="back">
                    <i class="iconfont icon-close2" ></i>
                </div>
            </div>
            <div class="content">
                <h1 class="title">{{food.name}}</h1>
                <div class="detail">
                    <span class="sell-count">月售{{food.sellCount}}份</span>
                    <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartControl-wrapper">
                    <cart-control :food="food"></cart-control>
                </div>
                <div class="buy" @click="addFirst" v-show="(!food.count) || (food.count === 0)">加入购物车</div>
            </div>
            <split></split>
            <div class="info">
                <div class="title">商品介绍</div>
                <p class="text">{{food.info}}</p>
            </div>
            <split></split>
            <div class="rating">
                <div class="title">商品评价</div>
                <rating-select
                        :select-type="selectType"
                        :only-content="onlyContent"
                        :desc="desc"
                        :ratings="food.ratings"
                        v-on:Stype="Stype"
                        v-on:Ocontent="Ocontent"

                ></rating-select>
                <div class="rating-wrapper">
                    <ul v-show="food.ratings && food.ratings !== undefined && food.ratings.length">
                        <li
                                class="ratingItem" v-for="(rating, index) in food.ratings"
                                :key="index"
                                v-show="needShow(rating.rateType, rating.text)"
                        >
                            <div class="user">
                                <span class="name">{{rating.username}}</span>
                                <img class="avatar" width="12px" height="12px" :src="rating.avatar">
                            </div>
                            <div class="time">{{rating.rateTime | formateDate()}}</div>
                            <p class="text">
                                <i class="iconfont"
                                   :class="{'icon-appreciate_fill_light': rating.rateType === 0, 'icon-oppose_fill_light' : rating.rateType === 1}">
                                </i>
                                {{rating.text}}
                            </p>
                        </li>
                    </ul>
                    <div class="no-rating" v-show="food.ratings !== undefined && food.ratings.length === 0">暂无评价</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import CartControl from '../cartControl/cartControl'
import Vue from 'vue'
import Split from '../split/split'
import {formateDate} from '../../models/date'
import RatingSelect from '../ratingSelect/ratingSelect'

const ALL = 2
export default {
  name: 'foodDetail',
  components: {RatingSelect, Split, CartControl},
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      showFlag: false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  filters: {
    formateDate (timeStamp) {
      return formateDate(timeStamp)
    }
  },
  methods: {
    show () {
      this.showFlag = true
      this.selectType = ALL
      this.onlyContent = true
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.foodDetail, { click: true })
        } else {
          this.scroll.refresh()
        }
      })
    },
    back () {
      this.showFlag = false
    },
    addFirst () {
      Vue.set(this.food, 'count', 1)
    },
    needShow (type, text) {
      if (this.onlyContent && !text) {
        return false
      }
      if (this.selectType === ALL) {
        return true
      } else {
        return type === this.selectType
      }
    },
    Stype (type) {
      this.selectType = type
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    Ocontent (onlyContent) {
      this.onlyContent = onlyContent
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  }

}
</script>

<style lang="stylus" scoped>
    @import '//at.alicdn.com/t/font_1227783_k2ku01qimla.css';
    @import "../../assets/stylus/mixin.styl";
    #foodDetail
        position fixed
        top 0
        left 0
        bottom 48px
        z-index 30
        width 100%
        background #fff
        .food-content
            .img-header
                position relative
                width 100%
                height 0
                padding-top 100%
                img
                    position absolute
                    top 0
                    left 0
                    width 100%
                    height 100%
                .back
                    position absolute
                    top 10px
                    right 10px
                    background rgba(7, 17, 27, 0.6)
                    border-radius 50%
                    .icon-close2
                        display block
                        padding 8px
                        font-size 20px
                        color white
            .content
                position relative
                padding 18px
                .title
                    line-height 14px
                    margin-bottom 8px
                    font-size 14px
                    font-weight 700
                    color rgb(7, 17, 27)

                .detail
                    margin-bottom 18px
                    line-height 10px
                    height 10px
                    font-size 0
                .sell-count, .rating
                    font-size 10px
                    color rgb(147, 153, 159)
                .sell-count
                    margin-right 12px
                .price
                    font-weight 700
                    line-height 24px
                    .now
                        margin-right 8px
                        font-size 14px
                        color: rgb(240, 20, 20)
                    .old
                        text-decoration line-through
                        font-size 10px
                        color rgb(143, 157, 159)
                .cartControl-wrapper
                    position absolute
                    right 12px
                    bottom 12px
                .buy
                    position absolute
                    right 18px
                    bottom 18px
                    z-index 10
                    height 24px
                    line-height 24px
                    padding 0 12px
                    border-radius 12px
                    font-size 10px
                    color #fff
                    background rgb(0, 160, 200)
            .info
                padding 18px
                .title
                    line-height 14px
                    margin-bottom 6px
                    font-size 14px
                    color rgb(7, 17, 27)
                .text
                    line-height 24px
                    padding 0 8px
                    font-size 12px
                    color rgb(77, 85, 93)
            .rating
                padding-top 18px
                .title
                    line-height 14px
                    margin-bottom 6px
                    margin-left 18px
                    font-size 14px
                    color rgb(7, 17, 27)
                .rating-wrapper
                    padding 0 18px
                    ul
                        list-style none
                        .ratingItem
                            position relative
                            padding 16px 0
                            border-1px(rgba(1, 17, 27,0.1))
                            .user
                                position absolute
                                right 0
                                top 16px
                                line-height 12px
                                font-size 0
                                .name
                                    display inline-block
                                    margin-right 6px
                                    vertical-align top
                                    font-size 10px
                                    color rgb(17, 153, 159)
                                .avatar
                                    border-radius 50%

                            .time
                                margin-bottom 6px
                                line-height 12px
                                font-size 10px
                                color rgb(147, 153, 159)

                            .text
                                line-height 16px
                                font-size 12px
                                color rgb(7, 17, 27)
                                .icon-appreciate_fill_light, .icon-oppose_fill_light
                                    line-height 16px
                                    margin-right 4px
                                    font-size 12px
                                .icon-appreciate_fill_light
                                    color rgb(0, 160, 220)
                                .icon-oppose_fill_light
                                    color #93999f

                    .no-rating
                        padding 16px 0
                        font-size 12px
                        color rgb(147, 153, 159)

</style>
