<template>
  <div id="app">
    <Headerer></Headerer>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Headerer from './components/header/Header.vue'
export default {
  name: 'App',
  components: {
    Headerer
  }
}
</script>

<style lang="stylus">
  @import "./assets/stylus/base.styl";
  @import "./assets/stylus/mixin.styl";
  *
    margin: 0
    padding: 0
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      .tab-item
        flex 1
        border-1px(rgba(7, 17, 27, 0.1))
        a
          display block
          text-decoration none
          text-align center
          font-size 14px
          color rgb(77, 85, 93)
          &.router-link-exact-active
            color rgb(240, 20, 20)

</style>
