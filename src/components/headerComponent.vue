<template>
  <header class="header">
    <div class="header_init">
      <router-link v-if='isEn' @click.native='closeMenu' to='/homeEn'><span class="logo"></span></router-link>
      <router-link v-else @click.native='closeMenu' to='/home'><span class="logo"></span></router-link>

      <span class="menu" @click='showMenu'></span>
    </div>
    <div class="gradual_shadow" :class='{active: isShowShadow}'></div>
    <div :class='{active: isShowMenu}' class="menu_box">
      <div @click='closeMenu' class="left_shade"></div>
      <div class="menu_content">
        <div class="menu_item">
          <p class='item_title close_item'>
            <span class="close" @click='closeMenu'></span>
          </p>
        </div>
        <div class="menu_item">
          <router-link v-if='isEn' @click.native='closeMenu' to='/homeEn'>
            <p class='item_title'>
              <span>HOME</span>
            </p>
          </router-link>
          <router-link v-else @click.native='closeMenu' to='/home'>
            <p class='item_title'>
              <span>首页</span>
            </p>
          </router-link>
        </div>
        <div class="menu_item">
          <p class='item_title' @click='switchList_1'>
            <span v-if='isEn'>PRODUCTS & SERVICES</span>
            <span v-else>产品与服务</span>
            <span v-if='isShow_1' class="up_arrow"></span>
            <span v-else class="down_arrow"></span>
          </p>
          <ul v-if='isShow_1' class="item_list">
            <router-link v-if='isEn' @click.native='closeMenu' to='/allInOneEn'><li>All-in-One Solution</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/allInOne'><li>All-in-One 解决方案</li></router-link>

            <router-link v-if='isEn' @click.native='closeMenu' to='/solutionEn'><li>Cloud-based Solution</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/solution'><li>基于云处理的解决方案</li></router-link>

            <router-link v-if='isEn' @click.native='closeMenu' to='/payEn'><li>Aggregate Payment</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/pay'><li>聚合支付</li></router-link>

            <router-link v-if='isEn' @click.native='closeMenu' to='/accessEn'><li>Seamless Access</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/access'><li>无缝接入</li></router-link>

            <router-link v-if='isEn' @click.native='closeMenu' to='/serviceEn'><li>Our Services</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/service'><li>我们的服务</li></router-link>

          </ul>
        </div>
        <div class="menu_item">
          <p class='item_title' @click='switchList_2'>
            <span v-if='isEn'>HARDWARE</span>
            <span v-else>硬件</span>
            <span v-if='isShow_2' class="up_arrow"></span>
            <span v-else class="down_arrow"></span>
          </p>
          <ul v-if='isShow_2' class="item_list hardware">
            <router-link v-if='isEn' @click.native='closeMenu' to='/mobilePosEn'><li>Smart Mobile POS</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/mobilePos'><li>手持移动智能 POS</li></router-link>

            <router-link v-if='isEn' @click.native='closeMenu' to='/deskCheckEn'><li>Desktop Cash Machine</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/deskCheck'><li>台式收银一体机</li></router-link>

            <router-link v-if='isEn' @click.native='closeMenu' to='/printerEn'><li>Receipt Printer</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/printer'><li>票据打印机</li></router-link>

          </ul>
        </div>
        <div class="menu_item">
          <router-link v-if='isEn' @click.native='closeMenu' to='/customerEn'>
            <p class='item_title'>
              <span>CUSTOMERS</span>
            </p>
          </router-link>
          <router-link v-else @click.native='closeMenu' to='/customer'>
            <p class='item_title'>
              <span>典型客户</span>
            </p>
        </router-link>
        </div>
        <div class="menu_item">
          <router-link v-if='isEn' @click.native='closeMenu' to='/resourceEn'>
            <p class='item_title'>
              <span>RESOURCES</span>
            </p>
          </router-link>
          <router-link v-else @click.native='closeMenu' to='/resource'>
            <p class='item_title'>
            <span>资源</span>
          </p>
        </router-link>
        </div>
        <div class="menu_item">
          <p class='item_title' @click='switchList_3'>
            <span v-if='isEn'>ABOUT</span>
            <span v-else>关于</span>
            <span v-if='isShow_3' class="up_arrow"></span>
            <span v-else class="down_arrow"></span>
          </p>
          <ul v-if='isShow_3' class="item_list">
            <router-link v-if='isEn' @click.native='closeMenu' to='/introduceEn'><li>COMPANY</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/introduce'><li>公司介绍</li></router-link>

            <router-link v-if='isEn' @click.native='closeMenu' to='/partnerEn'><li>PARTNERS</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/partner'><li>合作伙伴</li></router-link>
            
            <router-link v-if='isEn' @click.native='closeMenu' to='/newsEn'><li>NEWSROOM</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/news'><li>新闻报道</li></router-link>
            
            <router-link v-if='isEn' @click.native='closeMenu' to='/joinUsEn'><li>JOIN US</li></router-link>
            <router-link v-else @click.native='closeMenu' to='/joinUs'><li>加入我们</li></router-link>
          </ul>
        </div>
        <div class="menu_item">
          <p class='item_title'>
            <span v-if='isEn'>LANGUAGE</span>
            <span v-else>切换语言</span>
            <span style="display: flex;">
              <span v-if='isEn'>EN</span>
              <span v-else>简</span>
              <router-link v-if='isEn' to='/home' >
                <switchComponent style='margin-left: 0.266667rem' />
              </router-link>
              <router-link v-else to='/homeEn' >
                <switchComponent style='margin-left: 0.266667rem' />
              </router-link>
            </span>
          </p>
        </div>
        <div class="menu_item">
          <router-link v-if='isEn' @click.native='closeMenu' to='/contactUsEn'>
            <p class='contact_us'>
              CONTACT US
            </p>
          </router-link>
          <router-link v-else @click.native='closeMenu' to='/contactUs'>
            <p class='contact_us'>
              联系我们
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

  import switchComponent from '@/components/switchComponent'

  export default {
    data() {
      return {
        isShow_1: false,
        isShow_2: false,
        isShow_3: false,
        isShowMenu: false,
        isShowShadow: false
      }
    },
    computed: {
      isEn() {
        return this.$store.state.isEn
      }
    },
    methods: {
      switchList_1() {
        this.isShow_1 = !this.isShow_1
      },
      switchList_2() {
        this.isShow_2 = !this.isShow_2
      },
      switchList_3() {
        this.isShow_3 = !this.isShow_3
      },
      showMenu() {
        this.isShowMenu = true
        this.isShowShadow = true
        this.$emit('noRoll')
      },
      closeMenu() {
        this.isShowMenu = false
        this.isShowShadow = false
        this.$emit('canRoll')
      }
    },
    components:{
      switchComponent
    }

  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  
  @import '../../static/css/mixin.styl'

  .header
    position: relative
    height: 1.44rem
    .header_init
      background: #fff
      position: fixed
      left: 0
      top: 0
      width: 100%
      box-sizing: border-box
      padding: 0.346667rem 0.533333rem
      display: flex
      justify-content: space-between
      align-items: center
      z-index: 2
      border_bottom1px()
      .logo
        display:inline-block
        width: 1.173333rem
        height: 0.64rem
        bg_dpr('~images/img_Navigation_LOGO')
      .menu
        display: inline-block
        width: 0.426667rem
        height: 0.373333rem
        bg_dpr('~images/icon_navigation_more')
    .gradual_shadow
      position: absolute
      top: 0
      left: 0
      width: 100vw
      height: 100vh
      background: rgba(0,0,0,0)
      z-index: -1
      transition: all 0.5s ease
      &.active
        background: rgba(0,0,0,0.2)
    .menu_box
      transform: translateX(100%)
      transition: all 0.5s ease
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: 4
      &.active
        transform: translateX(0)
      .left_shade
        position: absolute
        top: 0
        left: 0
        width: 2.133333rem
        height: 100vh
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
        .menu_item
          font-size: 0.426667rem
          line-height: 0.586667rem
          .item_title
            display: flex
            justify-content: space-between
            align-items: center
            color: #000
            font-weight: bold
            padding: 0.533333rem 0.213333rem
            border-bottom: 1px solid #ECECEC
            .down_arrow
              display: inline-block
              width: 0.266667rem
              height: 0.16rem
              bg_dpr('~images/icon_Navigation_Open')
            .up_arrow
              display: inline-block
              width: 0.266667rem
              height: 0.16rem
              bg_dpr('~images/icon_Navigation_shrink')
          .close_item
            justify-content: flex-end
            .close
              display: inline-block
              width: 0.693333rem;
              height: 0.693333rem
              bg_dpr('~images/icon_navigation_close')
          .item_list
            &>a
              &>li
                color: #B3B3B3
                padding: 0.533333rem 0.213333rem
                border-bottom: 1px solid #ECECEC
          .hardware
            &>li
              padding-left: 1.12rem
              &:nth-child(1)
                background: url('~images/Group 3.png') no-repeat 0.32rem center / 0.426667rem 0.586667rem
              &:nth-child(2)
                background: url('~images/player-19.png') no-repeat 0.266667rem center / 0.533333rem 0.453333rem
              &:nth-child(3)
                background: url('~images/player-19 copy.png') no-repeat 0.266667rem center / 0.48rem 0.533333rem
          .contact_us
            width: 6.16rem
            height: 1.066667rem
            line-height: 1.066667rem
            text-align: center
            background: #4286F3
            border-radius: 2.666667rem
            color: #fff
            margin-top: 1.093333rem
</style>
