<template>
  <div class="content">
    <div class="banner">
      <p>Learn from APPLE cashier</p>
      <p class="blue_line"></p>
      <p>The most intuitive and simple retail solution - mobile payment</p>
      <router-link to='/likeAppleEn'><p class="more">Learn More</p></router-link>
    </div>
    <section class="customer_item">
      <p>
        The survival of the physical store: 
It's either that or it won't take up any of your time, or it will give you the ultimate experience
      </p>
      <p class="blue_line"></p>
      <p>
       Internet technology saves consumers time and makes them more agile to make comparisons and choices. This leads to a more professional trend of consumers. Every retailer has a deep understanding. If we can't adapt to this trend, we will be abandoned by the Internet
      </p>
    </section>
    <section class="customer_item item_banner_2">
      <p>
                It is not only time that can prove quality, but also the choice of customers
      </p>
      <p class="blue_line"></p>
      <p>
       POSPi uses advanced technology to integrate software and hardware together to integrate a whole new retail plan, improve the working efficiency and enhance customer shopping experience to promote sales and reduce operating costs
<br>  
<br>  
POSPi is dedicated to creating the most suitable products for our clients, to customize and make each product unique, designed to bring the best product and the best experience to the customer
      </p>
    </section>
    <section class="customer_item">
      <p>Our customers</p>
      <p class="blue_line"></p>
      <p class="item_banner_3"></p>
      <router-link to='/customerEn'><p class="more">Learn More</p></router-link>
    </section>
    <section class="customer_item">
      <p>Smart retail All - in - One solution</p>
      <p class="blue_line"></p>
      <p>
        Through POSPi's iPhone, iPod touch, and iPad mobile app, you can get your order in any corner of the store, making it more professional and thoughtful for the customer in the sales process
      </p>
      <p class="item_banner_4"></p>
      <router-link to='/allInOneEn'><p class="more">Learn More</p></router-link>
    </section>
    <section class="customer_item">
      <p>
          Full channel payment interface, 
          one-stop service platform
      </p>
      <p class="blue_line"></p>
      <p>
        PassPi provides simple, safe and reliable traditional and mobile Internet financial payment methods, including APi, SDK, traditional POS, smart POS and other payment terminal integration solutions. Full payment solutions and extensive integration payment experience, allowing our clients to win in the mobile Internet era!
      </p>
      <router-link to='/payEn'><p class="more">Learn More</p></router-link>
    </section>
    <section class="customer_item item_banner_5">
      <p>Seamless access</p>
      <p class="blue_line"></p>
      <p>
        Traditional international first-line brand retail is a PC-based solution. Mobile POS can seamlessly access its existing ERP, CRM and cash register system with low cost, and provide a simple and efficient Mobile cash payment scheme
      </p>
      <router-link to='/accessEn'><p class="more">Learn More</p></router-link>
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
        bg_dpr('~images/img_home_img4_EN')
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