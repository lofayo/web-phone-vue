<template>
  <div class="content">
    <div class="banner">
      <p>我们为您提供什么？</p>
      <p class="blue_line"></p>
      <p>帮助门店的运营服务实现平稳 的过渡与转型，企业可以随着自己的需求逐步升级 Mobile POS, 完全替换传统的 PC POS。</p>
    </div>
    <section class="customer_item">
      <p>我们的服务
      </p>
      <p class="blue_line"></p>
      <p>
       顾客就是“上帝”，而我们能做的就是帮助品牌来更好地服务“上帝”，基于移动智能POS一体化、云ERP、云CRM的解决方案以及强大的硬件支持，从而帮助零售客户实现Omni-Channel全渠道零售战略
      </p>
      <p class="small_title">
        硬件&配件
      </p>
      <p class="small_title_des">
        基于我们的合作伙伴，设备已经完成集成并取得相应的资质认证
      </p>
      <p class="small_title">
        云服务器
      </p>
      <p class="small_title_des">
        可以随时随地访问下一代应用程序
      </p>
      <p class="img_1"></p>
      <p class="small_title">
        系统集成
      </p>
      <p class="small_title_des">
        集成的方案存在于软件和系统的后端
      </p>
      <p class="small_title">
        支持&维护
      </p>
      <p class="small_title_des">
        实现碎片化的支付场景从多到一的支付超越提升用户付费体验及商户收款效率
      </p>
    </section>
    <section class="customer_item">
      <div class="has_bg">
        <p>聚合支付
        </p>
        <p class="blue_line"></p>
        <p>
         近年来，随着我国支付服务市场发展迅速，创新活跃，相关市场主体聚焦消费者需求，在传统的银行卡刷卡支付基础上，通过业务模式和新技术的创新应用，推出了二维码、云闪付等一系列快捷、便民的移动支付产品，受到了广大消费者的欢迎，有效地推动了我国非现金支付工具的健康快速发展。与此同时，商户面临需要同时受理消费者银行卡、不同机构的二维码、闪付、甚至更多的创新支付方式付款需求。在此背景下，POSPi联合部分收单机构创新开展“聚合支付”服务，为特约商户提供了融合多个支付渠道、一站式资金结算和对账的技术解决方，满足了特约商户对降低系统投入和运营成本、提高资金结算和财务对账效率的实际需求，成功地为商家解决困扰，更好地服务顾客。
        </p>
      </div>
      <p class="has_left_border">
        如今事实已向我们证明，顾客购物体验将会在品牌竞争之中占据最重要的位置，现代消费者的消费习惯是体验式消费，而品牌遗留的系统已经无法满足零售发展的需求。而我们就是帮助品牌追上时代的步伐，通过我们的解决方案来帮助品牌在强有力的竞争环境之下，站稳脚跟，稳步前进！
我们的服务是从消费者角度出发，与品牌在世界舞台上的竞争力有着密不可分的关系，经过事实证明我们移动智能POS的一体化解决方案就是品牌在当今新零售模式、全渠道零售布局以及云服务、大数据迅猛发展下坚实而又可靠的后盾。我们的目的不是摘果子，而是通过我们一体化的解决方案来帮助品牌更好地服务消费者，我们与品牌一起种果树，用心经营它，最后一起摘果子分享。
我们在这场零售大变革的战役中将为品牌带来以下先进优良的“装备”：
      </p>
      <p style="text-align: left;font-weight: bold;color: #434959">
          •&nbsp;&nbsp;   移动的收银台 （手持移动设备）
  <br>•&nbsp;&nbsp;   省时省力的培训 （员工管理）
  <br>•&nbsp;&nbsp;   智能导购服务 （导购项目）
  <br>•&nbsp;&nbsp;   数字化高效运营管理 （店务管理、订单管理）
  <br>•&nbsp;&nbsp;   随时随地支付 （集成支付）
  <br>•&nbsp;&nbsp;   简单快速的会员招募 （会员管理）
  <br>•&nbsp;&nbsp;   实施盘点、动态物流（库存盘点）
      </p>
      <p class="has_left_border">
        当然我们为了帮助品牌在这场战役中取得稳定性的胜利，我们也带来了核心“武器”：战无不胜的API接口。就像是在两个高速枢纽之间建了了一个服务站（中间件），在起点和终点无论哪种形式都可以无缝接入，低成本无缝连接到品牌原先所有的系统，对原有业务没有任何影响。对接效率高、耗时短、成本低、在不影响品牌原有系统以及业务的前提下高效的完成任何形式的对接!
总之，我们的服务就是帮助零售商进行革命性质的飞跃，进入一个完全数字化的零售商业时代。
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
    font-size: 0.373333rem
    line-height: 0.533333rem
    .banner
      bg_dpr_jpg('~images/img_service_banner')
    .customer_item
      padding: 0 0.533333rem
      margin: 1.6rem 0
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
      &>p:last-child
        margin-bottom: 0
      .small_title
        font-size: 0.533333rem
        line-height: 0.746667rem
        font-weight: bold
        margin: 1.6rem 0 0.533333rem
      .img_1
        width: 5.733333rem
        height: 5.733333rem
        margin: 1.066667rem auto
        bg_dpr('~images/img_service_img1')  
      .small_title_des
        color: #B3B3B3
        font-size: 0.373333rem
        line-height: 0.533333rem
      .has_bg
        width: 100vw
        box-sizing: border-box
        padding: 1.6rem 0.533333rem
        margin-left: -0.533333rem
        color: #fff
        bg_dpr_jpg('~images/img_service_img2')  
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
      .has_left_border
        padding-left: 0.533333rem
        border-left: 0.08rem solid #ECECEC
        margin: 1.066667rem 0
        color: #434959
        font-weight: bold
        text-align: left

</style>