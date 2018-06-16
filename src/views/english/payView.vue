<template>
  <div class="content">
    <div class="banner">
      <p>
          Full channel payment interface , 
          one-stop service platform
      </p>
      <p class="blue_line"></p>
      <p>
        PassPi provides simple, safe and reliable traditional and mobile Internet financial payment methods, including APi, SDK, traditional POS, smart POS and other payment terminal integration solutions. Full payment solutions and extensive integration payment experience, allowing our clients to win in the mobile Internet era!
      </p>
    </div>
    <section class="customer_item">
      <p>
        The current situation of enterprise financial payment
      </p>
      <p class="blue_line" style="margin-bottom: 0"></p>
      <p></p>
      <p class="small_title">
        Slow Cashier Payment
      </p>
      <p class="small_title_des">
        Customers use bank card to pay the amount of repeated operation of the input, manual operation is not only slow, also inevitable mistakes
      </p>
      <p class="small_title">
       Account Checkup Difficulties
      </p>
      <p class="small_title_des">
        There is no connection between the cashier system and the financial transaction data, It is difficult for the financial staff to resolve the problem
      </p>
      <p class="img_1"></p>
      <p class="small_title">
        Financial Cumbersome
      </p>
      <p class="small_title_des">
        Bank cards, WeChat, Alipay and other financial clearing and accounting systems are not unified; the financial liquidation audit workload is large
      </p>
      <p class="small_title">
        Lack of Data Value
      </p>
      <p class="small_title_des">
        The transaction data is not connected to the business data, and a lot of data is not used for later use
      </p>
    </section>
    <section class="customer_item">
     <p>
        Aggregate payment
      </p>
        <p class="blue_line"></p>
        <p>
         The aggregate payment solution consists of four layers of payment architecture design, which can be combined according to the degree of enterprise informatization, including: payment hardware, payment interface, payment software, payment channel, and payment method and payment service
        </p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>Payment hardware</p>
      <p>
        Comprehensive integration of Verifone、Ingenico、BaiFu、 STAR and other large factory payment equipment, security and stability, covering the scanning code payment, NFC payment, handheld, desktop smart cash register and other equipment
      </p>
      <p class="img img_2"></p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>Payment interface</p>
      <p>
        It can provide the secondary development interface of various technologies such as API and SDK, so as to reduce the cost of enterprise existing system integration
      </p>
      <p class="img img_3"></p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>Payment software</p>
      <p>
       Complete payment management software to meet all aspects of enterprise payment security management and financial management
      </p>
      <p class="img img_4"></p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>Payment channels</p>
      <p>
        Provide safe and stable payment channels, Unionpay, All IN PAY, Alipay, WeChat
      </p>
      <p class="img img_5"></p>
    </section>
    <section class="other_item">
      <p class="gray_line"></p>
      <p>Payment method</p>
      <p>
        Provide mobile payment, QR code payment, NFC, APPLEPAY and other payment methods. Payment service: 7*24 hours of uninterrupted service, escorting corporate customers and payment service providers
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

  @import '../../../static/css/mixin.styl'
  .content
    text-align: center
    font-size: 0.373333rem
    line-height: 0.533333rem
    .banner
      height: auto
      padding: 1.6rem 0.533333rem
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
        bg_dpr_jpg('~images/img_payment_img4_EN')
      .img_5
        height: 7.173333rem
        bg_dpr_jpg('~images/img_payment_img5')
      .img_6
        height: 3.733333rem
        width: 7.813333rem
        bg_dpr_jpg('~images/img_payment_img6_EN')
</style>