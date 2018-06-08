<template>
  <header class="header">
    <div class="header_init">
      <span class="logo"></span>
      <span class="menu"></span>
    </div>
    <div class="menu_box">
      <div class="menu_content">
        <div class="menu_item">
          <p class='item_title close_item'>
            <span class="close"></span>
          </p>
        </div>
        <div class="menu_item">
          <p class='item_title'>
            <span>首页</span>
          </p>
        </div>
        <div class="menu_item">
          <p class='item_title' @click='show_hide_list'>
            <span>产品与服务</span>
            <span v-if='isShow' class="up_arrow"></span>
            <span v-else class="down_arrow"></span>
          </p>
          <ul v-if='isShow' class="item_list">
            <li>All-in-One 解决方案</li>
            <li>基于云处理的解决方案</li>
            <li>聚合支付</li>
            <li>无缝接入</li>
            <li>我们的服务</li>
          </ul>
        </div>
        <div class="menu_item">
          <p class='item_title'>
            <span>硬件</span>
            <span class="arrow"></span>
          </p>
          <ul class="item_list">
            <li>手持移动智能 POS</li>
            <li>台式收银一体机</li>
            <li>台式收银一体机</li>
          </ul>
        </div>
        <div class="menu_item">
          <p class='item_title'>
            <span>典型客户</span>
          </p>
        </div>
        <div class="menu_item">
          <p class='item_title'>
            <span>资源</span>
          </p>
        </div>
        <div class="menu_item">
          <p class='item_title'>
            <span>关于</span>
            <span class="arrow"></span>
          </p>
          <ul class="item_list">
            <li>公司介绍</li>
            <li>合作伙伴</li>
            <li>新闻报道</li>
            <li>加入我们</li>
          </ul>
        </div>
        <div class="menu_item">
          <p class='item_title'>
            <span>切换语言</span>
            <span class="arrow">简|EN</span>
          </p>
        </div>
        <div class="menu_item">
          <p class='item_title'>
            联系我们
          </p>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      show_hide_list() {
        this.isShow = !this.isShow
      }
    }

  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    position: relative
    .header_init
      padding: 0.346667rem 0.533333rem
      display: flex
      justify-content: space-between
      align-items: center
      .logo
        display:inline-block
        width: 1.173333rem
        height: 0.64rem
        background: url('~images/img_Navigation_LOGO.png') no-repeat center / 100% 100%
        @media (-webkit-min-device-pixel-ratio: 2) {
          background-image:url('~images/img_Navigation_LOGO@2x.png');
        }
        @media (-webkit-min-device-pixel-ratio: 3) {
          background-image:url('~images/img_Navigation_LOGO@3x.png');
        }
      .menu
        display: inline-block
        width: 0.426667rem
        height: 0.373333rem
        background: url('~images/icon_navigation_more.png') no-repeat center / 100% 100%
        @media (-webkit-min-device-pixel-ratio: 2) {
          background-image:url('~images/icon_navigation_more@2x.png');
        }
        @media (-webkit-min-device-pixel-ratio: 3) {
          background-image:url('~images/icon_navigation_more@3x.png');
        }
    .menu_box
      &::before
        content: ''
        position: absolute
        top: 0
        left: 0
        width: 100vw
        height: 100vh
        background: rgba(0,0,0,0.20)
      .menu_content 
        width: 7.866667rem
        height: 100vh
        overflow: auto
        position: absolute
        top: 0
        right: 0
        background: #fff
        box-sizing: border-box
        padding: 0.853333rem
        z-index: 1
        .menu_item
          font-size: 0.426667rem
          line-height: 0.586667rem
          .item_title
            display: flex
            justify-content: space-between
            align-items: center
            color: #333333
            font-weight: bold
            padding: 0.533333rem 0.213333rem
            border-bottom: 1px solid #ECECEC
            .down_arrow
              display: inline-block
              width: 0.266667rem
              height: 0.16rem
              background: url('~images/icon_Navigation_Open.png') no-repeat center / 100% 100%
              @media (-webkit-min-device-pixel-ratio: 2) {
                background-image:url('~images/icon_Navigation_Open@2x.png');
              }
              @media (-webkit-min-device-pixel-ratio: 3) {
                background-image:url('~images/icon_Navigation_Open@3x.png');
              }
            .up_arrow
              display: inline-block
              width: 0.266667rem
              height: 0.16rem
              background: url('~images/icon_Navigation_shrink.png') no-repeat center / 100% 100%
              @media (-webkit-min-device-pixel-ratio: 2) {
                background-image:url('~images/icon_Navigation_shrink@2x.png');
              }
              @media (-webkit-min-device-pixel-ratio: 3) {
                background-image:url('~images/icon_Navigation_shrink@3x.png');
              } 
              
          .close_item
            justify-content: flex-end
            .close
              display: inline-block
              width: 0.48rem
              height: 0.48rem
              background: url('~images/icon_navigation_close.png') no-repeat center / 100% 100%
              @media (-webkit-min-device-pixel-ratio: 2) {
                background-image:url('~images/icon_navigation_close@2x.png');
              }
              @media (-webkit-min-device-pixel-ratio: 3) {
                background-image:url('~images/icon_navigation_close@3x.png');
              }          
          .item_list
            color: #B3B3B3
            &>li
              padding: 0.533333rem 0.213333rem
              border-bottom: 1px solid #ECECEC
</style>
