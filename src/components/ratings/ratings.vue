<template>
  <div id="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overView">
        <div class="overView-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="ranking">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overView-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <rating-select
              :select-type="selectType"
              :only-content="onlyContent"
              :ratings="ratings"
              v-on:Stype="Stype"
              v-on:Ocontent="Ocontent"
      ></rating-select>
      <div class="rating-wrapper">
        <ul>
          <li
                  class="rating-item"
                  v-for="(rating, index) in ratings"
                  :key="index"
                  v-show="needShow(rating.rateType, rating.text)"
          >
            <div class="avatar">
              <img :src="rating.avatar" width="28px" height="28px">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟</span>
              </div>
              <div class="time">{{rating.rateTime | formateDate()}}</div>
              <span class="text">{{rating.text}}</span>
              <div class="recommend" v-show="rating.recommend.length > 0">
                <i class="iconfont"
                   :class="{'icon-appreciate_fill_light': rating.rateType === 0, 'icon-oppose_fill_light' : rating.rateType === 1}">
                </i>
                <span class="item" v-for="(item, index) in rating.recommend" :key="index">
                  {{item}}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios/index'
import BScroll from 'better-scroll'
import Star from '../../components/star/Star'
import Split from '../../components/split/split'
import RatingSelect from '../../components/ratingSelect/ratingSelect'
import {formateDate} from '../../models/date'
const ALL = 2
export default {
  name: 'ratings',
  components: {RatingSelect, Split, Star},
  data () {
    return {
      seller: {
        type: Object
      },
      ratings: [],
      showFlag: false,
      selectType: ALL,
      onlyContent: true
    }
  },
  filters: {
    formateDate (timeStamp) {
      return formateDate(timeStamp)
    }
  },
  methods: {
    async getData () {
      let data = await axios.get('/static/data.json')
      this.seller = data.data.seller
      this.ratings = data.data.ratings
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
  },
  async mounted () {
    await this.getData()
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.ratings, { click: true })
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '//at.alicdn.com/t/font_1227783_k2ku01qimla.css';
  @import "../../assets/stylus/mixin.styl";
  #ratings
    position absolute
    top 174px
    bottom 0
    left 0
    width 100%
    overflow hidden
    .overView
      display flex
      padding 18px 0
      .overView-left
        flex 0 0 0 137px
        width 137px
        padding 6px 0
        border-right 1px solid rgba(7, 17, 27, 0.2)
        text-align center
        @media only screen and (max-width 320px)
          flex 0 0 120
          width 120px
        .score
          margin-bottom 6px
          line-height 28px
          font-size 24px
          color rgb(255, 153, 0)
        .title
          margin-bottom 8px
          line-height 12px
          font-size 12px
          color rgb(7, 17, 27)
        .ranking
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
      .overView-right
        flex 1
        padding 6px 0 6px 24px
        @media only screen and (max-width 320px)
          padding-left 6px
        .score-wrapper
          margin-bottom 8px
          font-size 0
          .title
            display inline-block
            line-height 18px
            font-size 12px
            color rgb(7, 17, 27)
          .star
            display inline-block
            margin 0 12px
            vertical-align top
          .score
            display inline-block
            line-height 18px
            vertical-align top
            font-size 12px
            color rgb(255, 153, 0)

        .delivery-wrapper
          font-size 0
          .title
            line-height 18px
            font-size 12px
            color rgb(7, 17, 27)
          .time
            margin-left 12px
            font-size 12px
            color rgb(147, 153, 159)

    .rating-wrapper
      padding 0 18px
      ul
        list-style none
        .rating-item
          display flex
          padding 18px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .avatar
            flex 0 0 0 28px
            width 28px
            margin-right 12px
            img
              border-radius 50%

          .content
            position: relative
            flex 1
            .name
              line-height 12px
              font-size 10px
              color rgb(7, 17, 27)
              margin-bottom 4px

            .star-wrapper
              margin-bottom 6px
              font-size 0
              star
                display inline-block
                margin-right 6px
                vertical-align top
              .delivery
                display inline-block
                vertical-align top

            .time
              position absolute
              top 0
              right 0
              font-size 10px
              color rgb(147, 153, 159)
            .text
              margin-bottom 8px
              line-height 18px
              color rgb(7, 17, 27)
              font-size 12px
            .recommend
              line-height 16px
              font-size 0
              .icon-appreciate_fill_light, .icon-oppose_fill_light, .item
                display inline-block
                margin 0 8px 4px 0
                font-size 9px
              .icon-appreciate_fill_light
                color rgb(0, 160, 220)
              .item
                padding 0 6px
                border 1px solid rgba(7, 17, 27, 0.1)
                border-radius 1px
                color rgb(147, 153, 159)
                background #fff

</style>
