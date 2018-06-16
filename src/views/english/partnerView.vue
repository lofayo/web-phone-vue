<template>
  <div class="content">
    <div class="banner">
      <p style="margin-bottom: 0.533333rem">POSPI works with the best brands to improve retail sales
      </p>
      <p class="blue_line"></p>
    </div>
    <section class="text">
      <p class="text_title">Partners</p>
      <p class="gray_line"></p>
      <p>
        
      </p>
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
      bg_dpr_jpg('~images/img_aboutus_banner4')
      justify-content: center
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
      &>p:nth-child(3)
        width: 8.293333rem
        height: 8.56rem
        margin: auto
        bg_dpr('~images/img_AboutUs_Partner') 
      &>p:last-child
        margin-bottom: 0
</style>