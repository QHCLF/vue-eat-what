<template>
  <div id="seller" ref="seller">
    <div class="seller-content">
      <div class="overView">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月销{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>
              元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>
              元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>
              分钟
            </div>
          </li>
        </ul>
        <div class="favorite" @click="toggleFavorite">
          <i class="iconfont icon-xihuan" :class="{'active' : favorite}"></i>
          <span class="text">{{favoriteText}}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul class="supports" v-if="seller.supports">
          <li class="support-item"
              v-for="(item, index) in seller.supports"
              :key="index">
            <span class="icon" :class="classMap[item.type]"></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="seller-pic">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="(pic, index) in seller.pics" :key="index">
              <img :src="pic" width="120px" height="90px">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(info, index) in seller.infos"  :key="index">
            {{info}}
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
export default {
  name: 'seller',
  components: {Split, Star},
  data () {
    return {
      seller: Object,
      favorite: false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    async getData () {
      let data = await axios.get('/static/data.json')
      this.seller = data.data.seller
    },
    toggleFavorite () {
      this.favorite = !this.favorite
    }
  },
  async mounted () {
    await this.getData()
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.seller, { click: true })
    })
  },
  computed: {
    favoriteText () {
      return this.favorite ? '已收藏' : '收藏'
    }
  }

}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/mixin.styl";
  @import "//at.alicdn.com/t/font_1227783_dino8v8qani.css"
  #seller
    position absolute
    top 174px
    bottom 0
    left 0
    width 100%
    overflow hidden
    .overView
      padding 18px
      position relative
      .title
        margin-bottom 8px
        line-height 14px
        font-size 14px
        color rgb(7, 17, 27)
      .desc
        padding-bottom 18px
        line-height 18px
        font-size 0
        border-1px(rgba(7, 17, 27, 0.1))
        .star
          display inline-block
          margin-right 8px
          vertical-align top
        .text
          margin-right 12px
          display inline-block
          vertical-align top
          font-size 10px
          color rgb(77, 85, 93)

      .remark
        display flex
        padding-top 18px
        list-style none
        .block
          flex 1
          text-align center
          border-right 1px solid rgba(7, 17, 27, 0.1)
          &:last-child
            border-right none
          h2
            margin-bottom 10px
            line-height 10px
            font-size 10px
            color rgb(147, 153, 159)
          .content
            line-height 24px
            font-size 10px
            color rgb(7, 17, 27)
            .stress
              font-size 24px

      .favorite
        position absolute
        top 18px
        right 11px
        text-align center
        width 50px
        .icon-xihuan
          display block
          margin-bottom 4px
          line-height 24px
          font-size 24px
          color #d4d6d9
          &.active
            color rgb(240, 20, 20)
        .text
          line-height 10px
          font-size 10px
          color rgb(77, 85, 93)
    .bulletin
      padding 18px 18px 0 18px
      .title
        margin-bottom 8px
        line-height 14px
        font-size 14px
        color rgb(7, 17, 27)
      .content-wrapper
        padding 0 12px 16px 12px
        border-1px(rgba(7, 17, 27, 0.1))
        .content
          line-height 24px
          font-size 12px
          color rgb(240, 20, 20)
          font-weight 200

      .supports
        .support-item
          padding 16px 12px
          font-size 0
          border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border-none()
          .icon
            display inline-block
            width 16px
            height 16px
            vertical-align top
            margin-right 6px
            background-size 16px 16px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_4')
            &.discount
              bg-image('discount_4')
            &.guarantee
              bg-image('guarantee_4')
            &.invoice
              bg-image('invoice_4')
            &.special
              bg-image('special_4')
          .text
            line-height 16px
            font-size 12px
            color rgb(7, 17, 27)
            font-weight 200
    .seller-pic
      padding 18px
      .title
        margin-bottom 12px
        line-height 14px
        font-size 14px
        color rgb(7, 17, 27)
      .pic-wrapper
        width 100%
        overflow hidden
        white-space nowrap
        .pic-list
          font-size 0
          list-style none
          .pic-item
            display inline-block
            margin-right 6px
            &:last-child
              margin-right 0

    .info
      padding 18px 18px 0 18px
      .title
        padding-bottom 12px
        line-height 14px
        font-size 14px
        color rgb(7, 17, 27)
        border-1px(rgba(7, 17, 27, 0.1))

      ul
        list-style none
        .info-item
          padding 16px 12px
          font-size 12px
          line-height 16px
          border-1px(rgba(7, 17, 27, 0.1))
          color rgb(7, 17, 27)
          font-weight 200
          &:last-child
            border-none()

</style>
