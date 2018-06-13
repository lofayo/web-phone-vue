<template>
  <div class="content">
    <div class="banner">
      <p>智能零售 All-in-One 解决方案</p>
      <p class="blue_line"></p>
      <p>通过 POSPi 的 iPhone、iPod touch、iPad 的移动应用程序，可在店铺任意角落完成订单，使店员在销售过程中为顾客带来更加专业、贴心的服务。  </p>
    </div>
    <section class="many_item">
      <ul class="item_lists">
        <li>
          <p class="small_logo small_logo_1"></p>
          <p>收银管理</p>
          <p>扫码、快选收银</p>
          <p>促销、打折</p>
          <p>全渠道支付</p>
          <p>现金管理</p>
          <p>O2O线下核销</p>
          <p>收银报表</p>
        </li>
        <li>
          <p class="small_logo small_logo_2"></p>
          <p>会员管理</p>
          <p>会员查询</p>
          <p>会员注册</p>
          <p>会员资料修改</p>
          <p>积分换礼</p>
          <p>电子券</p>
          <p>储值卡</p>
        </li>
        <li class="item_img_1"></li>
        <li>
          <p class="small_logo small_logo_3"></p>
          <p>库存管理</p>
          <p>商品查询</p>
          <p>库存查询</p>
          <p>订货补货管理</p>
          <p>收货管理</p>
          <p>盘点管理</p>
          <p>礼品管理</p>
        </li>
        <li>
          <p class="small_logo small_logo_4"></p>
          <p>店务管理</p>
          <p>员工绩效</p>
          <p>消息推送</p>
          <p>远程培训、考试</p>
          <p>支付管理</p>
          <p>办公用品管理</p>
        </li>
      </ul>
    </section>

    <section class="other_item">
      <ul class="item_lists">
        <li>
          <p class="small_logo small_logo_5"></p>
          <p>令人难忘的体验</p>
          <p>店员可以在店内任何地方与顾客会面并提供定制化购物体验。</p>
        </li>
        <li>
          <p class="small_logo small_logo_6"></p>
          <p>更快的全面支付渠道</p>
          <p>接受多种支付渠道，包括：微信支付、支付宝、银行卡以及信用卡，减少不必要的繁琐流程</p>
        </li>
        
        <li>
          <p class="small_logo small_logo_7"></p>
          <p>顾客的紧密联系</p>
          <p>更直观的了解到顾客对产品的喜好以及顾客的忠诚度</p>
        </li>
        <li>
          <p class="small_logo small_logo_8"></p>
          <p>库存管理</p>
          <p>自动更新，准确和便携的库存管理，做到真正的库存可视化。</p>
        </li>
        <li>
          <p class="small_logo small_logo_9"></p>
          <p>提高效率</p>
          <p>管理雇员，监控生产链平台，对雇员提供远程培训教学。</p>
        </li>
        <li>
          <p class="small_logo small_logo_10"></p>
          <p>统揽全局</p>
          <p>追踪并完成所有综合数据的实时查看。</p>
        </li>
      </ul>
    </section>
    <router-link to='article1'><p class="more">了解更多</p></router-link>
  </div>
</template>
<script>
  export default {

  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>

  @import '../../static/css/mixin.styl'
  .content
    text-align: center
    font-size: 0.373333rem
    line-height: 0.533333rem
    .banner
      bg_dpr_jpg('~images/icon_AllInOne_banner')
    .item_lists
      overflow: hidden
      &>li
        float: left
        width: 50vw
        height: 9.52rem
        text-align: center
        font-size: 0.373333rem
        line-height: 0.533333rem
        color: #9AA8B6
        &>p
          margin-bottom: 0.266667rem
        &>p:nth-child(2)
          color: #007BFF
          font-size: 0.533333rem
          line-height: 0.746667rem
          font-weight: bold
          margin-bottom: 0.533333rem
        .small_logo
          width: 1.226667rem
          height: 1.226667rem
          margin: 1.013333rem auto 0.693333rem
        .small_logo_1
          bg_dpr_contain('~images/icon_allinone_collectingsilver')
        .small_logo_2
          bg_dpr_contain('~images/icon_allinone_member')
        .small_logo_3
          bg_dpr_contain('~images/icon_allinone_stock')
        .small_logo_4
          bg_dpr_contain('~images/icon_allinone_store')
        .small_logo_5
          bg_dpr_contain('~images/icon_allinone_experience')
        .small_logo_6
          bg_dpr_contain('~images/icon_allinone_pay')
        .small_logo_7
          bg_dpr_contain('~images/icon_allinone_customer')
        .small_logo_8
          bg_dpr_contain('~images/icon_allinone_instock')
        .small_logo_9
          bg_dpr_contain('~images/icon_allinone_efficiency')
        .small_logo_10
          bg_dpr_contain('~images/icon_allinone_data')
      .item_img_1
        position: relative
        left: 50%
        transform: translateX(-50%)
        width: 5.466667rem
        height: 11.013333rem
        margin: 0 auto
        bg_dpr('~images/icon_AllInOne_img1')
    .other_item
      .item_lists
        
        &>li
          height: 7.066667rem
          padding: 0 0.266667rem
          box-sizing: border-box
          border-top: 0.026667rem solid #EDEEF4
          border-left: 0.026667rem solid #EDEEF4
          margin-left: -0.026667rem
          &>p:nth-child(2)
            color: #333333
            font-size: 0.48rem
          &>p:nth-child(3)
            color: #B3B3B3
    .more
      margin: 0.8rem auto 1.6rem
          
          

</style>