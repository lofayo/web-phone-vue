<template>
  <div class="content">
    <div class="banner">
      <p>Based on cloud processing solution</p>
      <p class="blue_line"></p>
      <p>Excellent customer experience from registration to payment is based on cloud processing solution</p>
    </div>
    <section class="many_item">
      <div class="img item_img_1"></div>
      <ul class="item_lists">
        <li>
          <p class="small_logo small_logo_1"></p>
          <p>Member management</p>
          <p>Scan the code and choose the cashier</p>
          <p>Check membership information</p>
          <p>Create members loyalty program</p>
          <p>Record members purchasing goods</p>
        </li>
        <li>
          <p class="small_logo small_logo_2"></p>
          <p>Shopping guidance</p>
          <p>Recommend personalized products</p>
          <p>Earn and exchange points</p>
          <p>Create members loyalty program</p>
          <p>Electronic voucher, offline voucher</p>
        </li>
        
        <li>
          <p class="small_logo small_logo_3"></p>
          <p>Order management</p>
          <p>Create order</p>
          <p>Scanning product barcode</p>
          <p>Manual entry information</p>
          <p>Online ordering, offline pick-up</p>
          <p>Implement a refund</p>
        </li>
        <li>
          <p class="small_logo small_logo_4"></p>
          <p>Payment process</p>
          <p>Multiple methods of payments</p>
          <p>Electronic receipts & Paper receipts</p>
          <p class="pay_method"></p>
        </li>
      </ul>
    </section>

    <section class="customer_item">
      <p>
        Effortless day-to-day store operations management
      </p>
      <p class="blue_line"></p>
      <p>
        As the company's layout and strategy for the new retail is gradually clear, we can boldly layout the comprehensive digital service and management of smart retail in the new era with the flexibility and flexibility of Mobile POS platform
      </p>
    </section>
    <section class="many_item">
      <div class="img item_img_2"></div>
      <ul class="item_lists">
        <li>
          <p class="small_logo small_logo_5"></p>
          <p>Promotions, discounts</p>
          <p>VIP special price</p>
          <p>Membership level</p>
          <p>Offline discount</p>
          <p>Text, email, WeChat message push</p>
        </li>
        <li>
          <p class="small_logo small_logo_6"></p>
          <p>Inventory management</p>
          <p>Real time inventory</p>
          <p>Product detail display</p>
          <p>Inventory automatic updates</p>
          <p>Order supplement</p>
          <p>Store receipt</p>
        </li>
        
        <li>
          <p class="small_logo small_logo_7"></p>
          <p>Store management</p>
          <p>Payment status</p>
          <p>Employee attendance</p>
          <p>Records of transportation</p>
        </li>
        <li>
          <p class="small_logo small_logo_8"></p>
          <p>Platform management</p>
          <p>Employee sales platform</p>
          <p>Commodity sales platform</p>
          <p>Historical data comparison</p>
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

  @import '../../../static/css/mixin.styl'
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
          text-align: center
          font-size: 0.373333rem
          line-height: 0.533333rem
          color: #9AA8B6
          margin-bottom: 1.226667rem
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
            margin: 0 auto 0.693333rem
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