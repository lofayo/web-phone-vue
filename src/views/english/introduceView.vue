<template>
  <div class="content">
    <div class="banner">
      <p style="margin-bottom: 0.533333rem">Entering 
        <br>
Smart POS Era
      </p>
      <p class="blue_line"></p>
    </div>
    <section class="text">
      <p class="text_title">COMPANY</p>
      <p class="gray_line"></p>
      <p>
        POSPi，headquartered in Shanghai，is a pioneer in developing innovative mobile technology solutions to enable retailers to step into smart retailing era the future.
<br>
<br>
Retailers of all sizes rely on POSPi for enterprise-class mobile point of sale and cloud-based solutions that enhance customers’ in-store experience and integrate various parts of store operations. POSPi is leading the retail mobility journey to deliver the innovation in-store that’s measurable in increased sales revenue, improved customer satisfaction and lasting loyalty.
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
      bg_dpr_jpg('~images/img_aboutus_banner1')
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
        font-size: 0.373333rem
        line-height: 0.533333rem
        text-align: left
      &>p:last-child
        margin-bottom: 0
</style>