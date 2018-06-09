<template>
  <div class="content">
    <div class="banner">
      <p style="margin-bottom: 0.533333rem">开启智能移动POS
        <br>
        新时代
      </p>
      <p class="blue_line"></p>
    </div>
    <section class="text">
      <p class="text_title">公司简介</p>
      <p class="gray_line"></p>
      <p>
        鉴于过去十年来我们对零售行业的深耕和专研，我们意识到 POS 行业解决方案正 从第四代 PC 本地系统迈向以移动设备为基础的第五代云解决方案，零售业将迎来又 一次革命性的质的飞跃，进入一个真正完全数字化的商业零售时代。我们于 2012 年底 着手研发了基于 iOS 平台的智能云 POS 方案，于 2013 年投入市场进行测试使用，并 不断致力于开发丰富的功能及增值服务方案得到了终端客户和业内的认可和高度评价。 同时基于我们对行业的了解与对推动智能 POS 市场发展的热情我们整合了全球市场 上各类先进、创新、优秀的智能设备供广大行业合作伙伴及各大用户推广使用!
        <br>
        <br>
        POSPi 总部位于上海，是一家专注于研究开发创新型移动支付零售商解决方案的 科技公司，致力于使客户有能力步入新零售移动支付新时代。
        <br>
        <br>
        POSPi 的 Mobile POS 集成了 ERP，CRM，促销，电子商务，社交网络以及支付解 决方案，使移动支付设备成为能够使支付过程更为便捷顺畅的全功能新零售平台。该 平台可帮助零售商提高操作效率，大大减少人力资源成本，实现全渠道支付。
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

  @import '../../static/css/mixin.styl'
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