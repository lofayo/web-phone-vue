<template>
  <div class="content">
    <div class="banner">
      <p>Learn from APPLE cashier</p>
      <p class="blue_line"></p>
      <p>The most intuitive and simple retail solution - mobile payment</p>
    </div>
    <section class="customer_item">
      <p class="item_banner_1"></p>
      <router-link to='/article1En'><p class="more">Learn More</p></router-link>
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
      .item_banner_1
        width: 8.293333rem
        height: 8.453333rem
        margin-left: auto
        margin-right: auto
        margin-bottom: 0.533333rem
        bg_dpr('~images/img_home_img6_EN')
</style>