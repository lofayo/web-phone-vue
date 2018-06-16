<template>
  <div class="content">
    <div class="banner">
      <p>
        02.11.2018 author<span style="color: #EB4537">POSPi</span>
      </p>
      <p class="red_tip">精选</p>
      <p>
        愛茉莉太平洋集團旗下品牌：悅詩風吟innisfree 攜手POSPi、中國銀行合作部署移動POS，打造卓越購物體驗。
      </p>
      <router-link to='/article1'><p class="more" style="margin-left: 0.533333rem;">Learn More</p></router-link>
    </div>
    <section class="text">
      <p class="text_title">News reports</p>
      <p class="gray_line"></p>
      <ul>
        <a href="http://www.businesswire.com/news/home/20170112005352/zh-HK/">
          <li class="news_item">
            <div class="img img1"></div>
            <div class='item_text'>
              <span>一派（上海）数字科技　モバイルPOSシステムを本格提供　既存システムとの共存を強みに</span>
              <span>2017.03.08</span>
            </div>
          </li>
        </a>
        <a href="https://www.cosmeticsdesign-asia.com/Article/2017/01/18/Innisfree-collaborates-with-POSPi-and-Bank-of-China-to-launch-mobile-payment-in-China">
          <li class="news_item">
            <div class="img img2"></div>
            <div class='item_text'>
              <span>Innisfree collaborates with POSPi and Bank of China to launch mobile payment in China</span>
              <span>2017.01.18</span>
            </div>
          </li>
        </a>
        <a href="https://globalcosmeticsnews.com/innisfree-teams-up-with-pospi-and-bank-of-china-to-launch-mobile-pos/">
          <li class="news_item">
            <div class="img img3"></div>
            <div class='item_text'>
              <span>INNISFREE TEAMS UP WITH POSPI AND BANK OF CHINA TO LAUNCH MOBILE POS</span>
              <span>2017.01.17</span>
            </div>
          </li>
        </a>
        <a href="http://www.businesswire.com/news/home/20170112005352/zh-HK/">
          <li class="news_item">
            <div class="img img4"></div>
            <div class='item_text'>
              <span>愛茉莉太平洋集團旗下品牌：悅詩風吟innisfree 攜手POSPi、中國銀行合作部署移動POS，打造卓越...</span>
              <span>2017.01.13</span>
            </div>
          </li>
        </a>
        <a href="http://www.zaikei.co.jp/releases/436816/">
          <li class="news_item">
            <div class="img img5"></div>
            <div class='item_text'>
              <span>大手化粧品メーカー アモーレパシフィックのコスメブランド イニスフリー POSPi及び中国銀行と提…</span>
              <span>2017.01.13</span>
            </div>
          </li>
        </a>
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
      bg_dpr_jpg('~images/img_aboutus_banner2')
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
      .red_tip
        padding: 0 0.266667rem
        background: #EB4537
        border-radius: 0.08rem
    .text
      padding: 1.6rem 0.533333rem
      text-align: center
      color: #333333
      &>p
        margin-bottom: 0.533333rem
      &>p:nth-child(1)
        font-size: 0.373333rem
        line-height: 0.533333rem
        font-weight: bold
      &>p:nth-child(3)
        width: 8.293333rem
        height: 8.56rem
        margin: auto
        bg_dpr('~images/img_AboutUs_Partner') 
      &>p:last-child
        margin-bottom: 0
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
          bg_dpr('~images/img_news_img1') 
        .img2
          bg_dpr('~images/img_news_img2') 
        .img3
          bg_dpr('~images/img_news_img3') 
        .img4
          bg_dpr('~images/img_news_img4') 
        .img5
          bg_dpr('~images/img_news_img4') 
</style>