<template>
  <div class="content">
    <div class="banner">
      <p>全渠道支付接口<br>
一站式服务平台</p>
      <p class="blue_line"></p>
      <p>PassPi提供简单、安全、可靠的传统与移动互联网金融支付方式，包括APi、SDK、 传统POS、智能POS等各类支付终端集成解决方案。全面的支付解决方案和丰富的集成支付经验，让我们的客户在移动互联网时代赢得先机!</p>
    </div>
    <section class="customer_item">
      <p>企业金融支付现状
      </p>
      <p class="blue_line" style="margin-bottom: 0"></p>
      <p></p>
      <p class="small_title">
        收银支付慢
      </p>
      <p class="small_title_des">
        顾客使用银行卡支付需要重复操作消费金额的录入，手工操作不仅慢，也难免出错
      </p>
      <p class="small_title">
        帐务核对困难
      </p>
      <p class="small_title_des">
        收银系统与金融支付交易数据没有关联 ，出问题后IT与财务工作人员帐务核对困难
      </p>
      <p class="img_1"></p>
      <p class="small_title">
        财务工作量大
      </p>
      <p class="small_title_des">
        银行卡、微信、支宝付等各类财务清算和对账系统不统一，财务清算稽核工作量大
      </p>
      <p class="small_title">
        数据没有价值
      </p>
      <p class="small_title_des">
        交易数据与业务数据没有关系，大量数据没有后期使用价值
      </p>
    </section>
    <section class="customer_item">
     <p>聚合支付
        </p>
        <p class="blue_line"></p>
        <p>
         聚合支付整体解决方案由四层支付架构设计，可根据企业信息化程度任意组合，其中包含了：支付硬件、支付接口、支付软件、支付通道、支付方式和支付服务。
        </p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>支付硬件</p>
      <p>
        全面集成惠尔丰、Ingenico、百富、STAR等大厂支付设备，安全稳定，覆盖扫码支付、NFC支付、手持、桌面智能收款机等设备。
      </p>
      <p class="img img_2"></p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>支付接口</p>
      <p>
        可提供API、SDK等各类技术需要的二次开发接口，降低企业已有系统集成支付成本。
      </p>
      <p class="img img_3"></p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>支付软件</p>
      <p>
       完整的支付管理软件，满足企业支付安全管理和务管理的方方面面
      </p>
      <p class="img img_4"></p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>支付通道</p>
      <p>
        提供安全、稳定的支付通道，银联商务、通联、支付宝、微信。
      </p>
      <p class="img img_5"></p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>支付方式</p>
      <p>
        提供手机支付、二维码支付、NFC、APPLEPAY等支付方式。<br>
        支付服务：7*24小时不间断服务，为企业客户和支付服务商保驾护航。
      </p>
      <p class="img img_6"></p>
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
    .customer_item
      padding: 0 0.533333rem
      margin: 1.6rem 0
      color: #333
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
      .small_title
        font-size: 0.533333rem
        line-height: 0.746667rem
        font-weight: bold
        margin: 1.6rem 0 0.533333rem
      .img_1
        width: 5.733333rem
        height: 5.733333rem
        margin: 1.066667rem auto
        bg_dpr('~images/img_payment_img')  
      .small_title_des
        color: #B3B3B3
        font-size: 0.373333rem
        line-height: 0.533333rem
      .has_bg
        width: 100vw
        box-sizing: border-box
        padding: 1.6rem 0.533333rem
        margin-left: -0.533333rem
        color: #fff
        bg_dpr_jpg('~images/img_service_img2')  
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
      .has_left_border
        padding-left: 0.533333rem
        border-left: 0.08rem solid #ECECEC
        margin: 1.066667rem 0
        color: #434959
        font-weight: bold
        text-align: left
    .other_item
      color: #333
      padding: 0 0.533333rem
      margin: 1.6rem 0
      &>p
        margin-bottom: 0.533333rem
      &>p:nth-child(2)
        font-size: 0.533333rem
        line-height: 0.746667rem
        font-weight: bold
      &>p:nth-child(3)
        font-size: 0.373333rem
        line-height: 0.533333rem
      .img
        margin-left: auto
        margin-right: auto
      .img_2
        width: 100vw
        margin-left: -0.533333rem
        height: 17.706667rem
        bg_dpr_jpg('~images/img_payment_img2')
      .img_3
        height: 11.786667rem
        bg_dpr_jpg('~images/img_payment_img3')
      .img_4
        width: 7.733333rem
        height: 18.933333rem
        bg_dpr_jpg('~images/img_payment_img4')
      .img_5
        height: 7.173333rem
        bg_dpr_jpg('~images/img_payment_img5')
      .img_6
        height: 3.733333rem
        width: 7.813333rem
        bg_dpr_jpg('~images/img_payment_img6')
</style>