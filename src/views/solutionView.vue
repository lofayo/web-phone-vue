<template>
  <div class="content">
    <div class="banner">
      <p>基于云处理的解决方案</p>
      <p class="blue_line"></p>
      <p>优质的顾客体验从注册到付款都是基于云处理方案。</p>
    </div>
    <section class="many_item">
      <div class="img item_img_1"></div>
      <ul class="item_lists">
        <li>
          <p class="small_logo small_logo_1"></p>
          <p>会员管理</p>
          <p>扫码、快选收银</p>
          <p>查询会员信息</p>
          <p>创建会员忠诚度项目</p>
          <p>记录会员采购商品</p>
        </li>
        <li>
          <p class="small_logo small_logo_2"></p>
          <p>购物指导</p>
          <p>扫码、快选收银</p>
          <p>查询会员信息</p>
          <p>创建会员忠诚度项目</p>
          <p>记录会员采购商品</p>
        </li>
        
        <li>
          <p class="small_logo small_logo_3"></p>
          <p>订单管理</p>
          <p>创建订单</p>
          <p>扫描商品条形码</p>
          <p>手动录入信息</p>
          <p>线上下单，线下取货</p>
          <p>实时退款</p>
        </li>
        <li>
          <p class="small_logo small_logo_4"></p>
          <p>支付过程</p>
          <p>多种多样的支付方式</p>
          <p>电子票据 纸质票据</p>
          <p class="pay_method"></p>
        </li>
      </ul>
    </section>

    <section class="customer_item">
      <p>毫不费力日复一日的店铺运营管理
      </p>
      <p class="blue_line"></p>
      <p>随着企业对新零售的布局及战略逐步清晰，便可借助Mobile POS 平台的强大功 能及架构的灵活性大胆布局新时代智能零售的全面数字化服务与管理。</p>
    </section>
    <section class="many_item">
      <div class="img item_img_2"></div>
      <ul class="item_lists">
        <li>
          <p class="small_logo small_logo_5"></p>
          <p>促销/折扣</p>
          <p>VIP特价</p>
          <p>会员等级</p>
          <p>线下折扣</p>
          <p>短信、邮件、微信<br>
信息推送</p>
        </li>
        <li>
          <p class="small_logo small_logo_6"></p>
          <p>库存管理</p>
          <p>实时库存</p>
          <p>商品细节展示</p>
          <p>库存自动更新</p>
          <p>订单补充</p>
          <p>商店收据</p>
        </li>
        
        <li>
          <p class="small_logo small_logo_7"></p>
          <p>商店管理</p>
          <p>支付状态</p>
          <p>员工出勤</p>
          <p>运输记录</p>
        </li>
        <li>
          <p class="small_logo small_logo_8"></p>
          <p>平台管理</p>
          <p>员工销售平台</p>
          <p>商品出售平台</p>
          <p>历史数据对比</p>
        </li>
      </ul>
    </section>

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
      bg_dpr_jpg('~images/img_payment_banner')
    .many_item
      .img
        width: 7.866667rem
        height: 6.533333rem
        margin: 1.6rem auto
      .item_img_1
        bg_dpr('~images/img_Solution_img')
      .item_img_2
        bg_dpr('~images/img_Solution_img2')
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
            color: #434959
            font-size: 0.533333rem
            line-height: 0.746667rem
            font-weight: bold
            margin-bottom: 0.533333rem
          .pay_method
            width: 4.373333rem
            height: 2.826667rem
            bg_dpr('~images/img_solution_pay')
            margin: auto
          .small_logo
            width: 1.226667rem
            height: 1.226667rem
            margin: 1.013333rem auto 0.693333rem
          .small_logo_1
            bg_dpr('~images/icon_solution_member')
          .small_logo_2
            bg_dpr('~images/icon_solution_shopping')
          .small_logo_3
            bg_dpr('~images/icon_solution_orders')
          .small_logo_4
            bg_dpr('~images/icon_solution_pay')
          .small_logo_5
            bg_dpr('~images/icon_solution_discount')
          .small_logo_6
            bg_dpr('~images/icon_solution_stock')
          .small_logo_7
            bg_dpr('~images/icon_solution_discount')
          .small_logo_8
            bg_dpr('~images/icon_solution_platform')
    .customer_item
      padding: 1.6rem 0.533333rem
      color: #333
      background: #F6F6F6
      &>p
        margin-bottom: 0.533333rem
      &>p:nth-child(1)
        font-size: 0.533333rem
        line-height: 0.746667rem
        font-weight: bold
      &>p:nth-child(3)
        font-size: 0.373333rem
        line-height: 0.533333rem
      &>p:last-child
        margin-bottom: 0

</style>