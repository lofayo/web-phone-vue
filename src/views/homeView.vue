<template>
  <div class="content">
    <div class="banner">
      <p>像APPLE收银</p>
      <p class="blue_line"></p>
      <p>最直观简约的零售方案-移动支付</p>
      <p class="more">了解更多</p>
    </div>
    <section class="customer_item">
      <p>实体店的生存之道：
        <br>
        要么方便到不用占用你任何时间，
        要么能给你极致的体验。
      </p>
      <p class="blue_line"></p>
      <p>
       互联网技术节约了消费者时间，让他们更加敏捷的做出对比和选择，这就形成了消费者更加专业化的趋势，这种变化每个零售商都要深刻认知，如果我们不能适应这种趋势，那么我们将被线上远远抛弃。
      </p>
    </section>
    <section class="customer_item item_banner_2">
      <p>
                能够证明品质的不只有时间，
                <br>
        还有客户的选择
      </p>
      <p class="blue_line"></p>
      <p>
       POSPi使用先进的技术将软硬件整合在一起，集成一套全新的零售方案，在提高工作效率的同时提升客户购物体验，以此来推动销售并降低运营成本。
        <br>
        <br>
        POSPi致力于为客户打造最合适的产品，定制化开发使每一个产品独一无二，旨在为客户带来最好的产品及最佳的体验。
      </p>
    </section>
    <section class="customer_item">
      <p>标杆客户</p>
      <p class="blue_line"></p>
      <p class="item_banner_3"></p>
      <p class="more">了解更多</p>
    </section>
    <section class="customer_item">
      <p>智能零售 All-in-One 解决方案</p>
      <p class="blue_line"></p>
      <p>
        通过 POSPi 的 iPhone、iPod touch、iPad 的移动应用程序，可在店铺任意角落完成订单，使店员在销售过程中为顾客带来更加专业、贴心的服务。  
      </p>
      <p class="item_banner_4"></p>
      <p class="more">了解更多</p>
    </section>
    <section class="customer_item">
      <p>全渠道支付接口，一站式服务平台</p>
      <p class="blue_line"></p>
      <p>
        PassPi提供简单、安全、可靠的传统与移动互联网金融支付方式，包括APi、SDK、 传统POS、智能POS等各类支付终端集成解决方案。全面的支付解决方案和丰富的集成支付经验，让我们的客户在移动互联网时代赢得先机!
      </p>
      <p class="more">了解更多</p>
    </section>
    <section class="customer_item item_banner_5">
      <p>无缝接入</p>
      <p class="blue_line"></p>
      <p>
        传统国际一线品牌零售是基于PC 的解决方案，Mobile POS 可以低成本无缝接入其已有的ERP、CRM以及收银系统，提供简单高效易行的移动收银支付方案。
      </p>
      <p class="more">了解更多</p>
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
    .banner
      bg_dpr_jpg('~images/img_home_banner')
    .customer_item
      padding: 1.6rem 0.533333rem
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
        color: #B3B3B3
      &>p:last-child
        margin-bottom: 0
      .item_banner_3
        width: 8.293333rem
        height: 6.72rem
        margin-left: auto
        margin-right: auto
        bg_dpr('~images/img_home_img3')
      .item_banner_4
        width: 8.293333rem
        height: 8.266667rem
        margin-left: auto
        margin-right: auto
        bg_dpr('~images/img_home_img4')
    .item_banner_2
      color: #fff
      bg_dpr_jpg('~images/img_home_img1')
      &>p:nth-child(3)
        color: #ddd
    .item_banner_5
      color: #fff
      bg_dpr_jpg('~images/img_home_img5')
      &>p:nth-child(3)
        color: #ddd


</style>