<template>
  <div class="content">
    <div class="banner">
      <p>
        Smart Retail <br>
        All-in-One Solution
      </p>
      <p class="blue_line"></p>
      <p>
          Through POSPi's mobile applications for iPhone, iPod touch, and iPad, orders can be placed in any corner of the store, enabling shoppers to bring more professional and caring services to customers during the sales process.
      </p>
    </div>
    <section class="many_item">
      <ul class="item_lists">
        <li>
          <p class="small_logo small_logo_1"></p>
          <p>Cash register management</p>
          <p>Scan code、Quick cash register</p>
          <p>Promotional discounts</p>
          <p>Omni-channel payment</p>
          <p>Cash Management</p>
          <p>O2O offline write-off</p>
          <p>Cash register report</p>
        </li>
        <li>
          <p class="small_logo small_logo_2"></p>
          <p>Member Management</p>
          <p>Member inquiry</p>
          <p>Registered member</p>
          <p>Member information modification</p>
          <p>Point exchange ceremony:</p>
          <p>Electronic coupons</p>
          <p>tored value card</p>
        </li>
        <li class="item_img_1"></li>
        <li>
          <p class="small_logo small_logo_3"></p>
          <p>Inventory Management</p>
          <p>Product inquiry</p>
          <p>Inventory inquiry</p>
          <p>Order replenishment management</p>
          <p>Receipt management</p>
          <p>Inventory Management</p>
          <p>Gift Management</p>
        </li>
        <li>
          <p class="small_logo small_logo_4"></p>
          <p>Store Management</p>
          <p>Staff performance</p>
          <p>Message push</p>
          <p>Remote training, examinations</p>
          <p>Uniform management</p>
          <p>Office supplies management</p>
        </li>
      </ul>
    </section>

    <section class="other_item">
      <ul class="item_lists">
        <li>
          <p class="small_logo small_logo_5"></p>
          <p>Memorable Experience</p>
          <p>
              Meet customers anywhere in-store and provide customized shopping experience.
          </p>
        </li>
        <li>
          <p class="small_logo small_logo_6"></p>
          <p>Faster Omni-Payments</p>
          <p>
            Accept all kinds of payments, speed up transactions and quickly ring up sales.
          </p>
        </li>
        
        <li>
          <p class="small_logo small_logo_7"></p>
          <p>Connect with Customer</p>
          <p>Gather details about customers in one place and customize loyalty programs.</p>
        </li>
        <li>
          <p class="small_logo small_logo_8"></p>
          <p>Inventory made Easy</p>
          <p>Automatic, accurate and portable inventory management at fingertips.</p>
        </li>
        <li>
          <p class="small_logo small_logo_9"></p>
          <p>Improve Productivity</p>
          <p>Manage employees, monitor performance, provide remote training.</p>
        </li>
        <li>
          <p class="small_logo small_logo_10"></p>
          <p>Track Everything</p>
          <p>Comprehensive data & insights summarized for easy understanding.</p>
        </li>
      </ul>
    </section>
    <router-link to='/solutionEn'><p class="more">Learn More</p></router-link>
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
      bg_dpr_jpg('~images/icon_AllInOne_banner')
    .item_lists
      overflow: hidden
      margin-bottom: 1.6rem
      &>li
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
          margin: 1.6rem auto 0.266667rem
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
        width: 5.466667rem
        height: 11.013333rem
        margin: 1.6rem auto 0
        bg_dpr('~images/icon_AllInOne_img1')
    .other_item
      border-bottom: 0.026667rem solid #ececec
      .item_lists
        margin-bottom: 0
        &>li
          float: left
          width: 50vw
          height: 7.066667rem
          padding: 0 0.266667rem
          box-sizing: border-box
          border-top: 0.026667rem solid #EDEEF4
          border-left: 0.026667rem solid #EDEEF4
          margin-left: -0.026667rem
          &>p:nth-child(2)
            font-size: 0.373333rem
            color: #333333
          &>p:nth-child(3)
            font-size: 0.373333rem
            color: #B3B3B3
          .small_logo
            margin: 1.013333rem auto 0.826667rem
    .more
      margin: 0.8rem auto 1.6rem
          
          

</style>