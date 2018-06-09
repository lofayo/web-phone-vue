<template>
  <div class="content">
    <div class="banner">
      <p>POSPi 
       喊你加入
      </p>
      <p class="blue_line"></p>
      <p style="letter-spacing: 0.08rem">
        在POSPi，我们永远缺少一个人,也许是一个好玩的头脑，一双特能写的手，一对善于发现美（you）好（qu）的眼睛。以下空位，欢迎来看看！
      </p>
    </div>
    <section class="text">
      <p class="text_title">加入我们</p>
      <p class="gray_line"></p>
      <ul class="job_lists">
        <li class="job_item">
          <div class="job_text">
            <span>技术支持服务专员</span>
            <span>2年以上/全职/本科</span>
          </div>
          <div class="left_arrow"></div>
        </li>
        <li class="job_item">
          <div class="job_text">
            <span>项目助理</span>
            <span>2年以上/全职/本科</span>
          </div>
          <div class="left_arrow"></div>
        </li>
        <li class="job_item">
          <div class="job_text">
            <span>PHP 后端工程师</span>
            <span>2年以上/全职/本科</span>
          </div>
          <div class="left_arrow"></div>
        </li>
        <li class="job_item">
          <div class="job_text">
            <span>技术支持服务专员</span>
            <span>2年以上/全职/本科</span>
          </div>
          <div class="left_arrow"></div>
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
    .banner
      bg_dpr_jpg('~images/img_aboutus_banner3')
      justify-content: center
      &>p
        margin-bottom: 0.533333rem
    .text
      padding: 1.6rem 0.533333rem
      text-align: center
      color: #333333
      &>p
        margin-bottom: 0.533333rem
      &>p:nth-child(1)
        font-size: 0.533333rem
        line-height: 0.746667rem
        font-weight: bold
      .job_lists
        .job_item
          width: 8.933333rem
          height: 3.12rem
          padding: 0.853333rem
          box-sizing: border-box
          background: #F6F6F6
          border-radius: 0.213333rem
          display: flex
          justify-content: space-between
          .job_text
            display: flex
            flex-direction: column
            justify-content: space-between
</style>