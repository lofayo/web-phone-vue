<template>
  <div class="content">
    <div class="banner">
      <p>
        02.11.2018 作者：<span style="color: #EB4537">POSPi</span>
      </p>
      <p class="red_tip">精选</p>
      <p>
        像APPLE收银 （最直观简约的零售方案-移动支付）
      </p>
      <router-link to='article1'><p class="more" style="margin-left: 0.533333rem;">Learn More</p></router-link>
    </div>
    <section class="text">
      <ul>
        <router-link to='article1'>
          <li class="news_item">
          <div class="img img1"></div>
          <div class='item_text'>
            <span>像APPLE收银 （最直观简约的零售方案-移动支付）</span>
            <span>2017年4月28日</span>
          </div>
        </li>
      </router-link>
        <router-link to='article2'>
          <li class="news_item">
            <div class="img img2"></div>
            <div class='item_text'>
              <span>The Must-have In-Store Technologies in Digital Era</span>
              <span>2017年6月8日</span>
            </div>
          </li>
        </router-link>
        <router-link to='article3'>
          <li class="news_item">
            <div class="img img3"></div>
            <div class='item_text'>
              <span>Mobile POS 为你打造超实力零售店! </span>
              <span>2017年4月28日</span>
            </div>
          </li>
        </router-link>
        <router-link to='article4'>
          <li class="news_item">
            <div class="img img4"></div>
            <div class='item_text'>
              <span>从案例看 Mobile POS 如何促进实体零售店的销售额增长！</span>
              <span>2017年4月7日</span>
            </div>
          </li>
        </router-link>
        <router-link to='article5'>
          <li class="news_item">
            <div class="img img5"></div>
            <div class='item_text'>
              <span>新零售时代：传统零售商拥有天时、地利、人和的优势</span>
              <span>2017年3月6日</span>
            </div>
          </li>
        </router-link>
        <router-link to='article6'>
          <li class="news_item">
            <div class="img img6"></div>
            <div class='item_text'>
              <span>Physical Store Will Always Exist</span>
              <span>2017年3月7日</span>
            </div>
          </li>
        </router-link>
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
    .banner
      bg_dpr_jpg('~images/img_home_banner')
      justify-content: center
      align-items: flex-start
      text-align:left
      font-size: 0.373333rem
      line-height: 0.533333rem
      &>p
        margin-bottom: 0.533333rem
        margin-left: 0.533333rem
      &>p:nth-child(1)
        font-size: 0.373333rem
        line-height: 0.533333rem
    .text
      padding: 1.6rem 0.533333rem
      text-align: center
      color: #333333
      .news_item
        margin-bottom: 0.8rem
        display: flex
        justify-content: space-between
        .img
          width: 2.666667rem
          height: 2.666667rem
        .item_text
          width: 5.866667rem
          display: flex
          flex-direction: column
          justify-content: space-between
          font-size: 0.373333rem
          line-height: 0.533333rem
          text-align: left
          color: #333
          &>span:first-child
            font-weight: bold
          &>span:last-child
            color: #B3B3B3
        .img1
          bg_dpr('~images/img_article_img') 
        .img2
          bg_dpr('~images/img_article_img2') 
        .img3
          bg_dpr('~images/img_article_img3') 
        .img4
          bg_dpr('~images/img_article_img4') 
        .img5
          bg_dpr('~images/img_article_img5') 
        .img6
          bg_dpr('~images/img_article_img6') 
</style>