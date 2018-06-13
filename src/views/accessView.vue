<template>
  <div class="content">
    <div class="banner">
      <p>无缝接入</p>
      <p class="blue_line"></p>
      <p>传统国际一线品牌零售是基于PC 的解决方案，Mobile POS 可以低成本无缝接入其已有的ERP、CRM以及收银系统，提供简单高效易行的移动收银支付方案。</p>
    </div>
    <section class="customer_item">
      <p>POS 系统分为前端和后端
      </p>
      <p class="blue_line"></p>
      <p>
前端为客户的PC POS，后端包含了ERP、 经销存和数据库。POSPi 基于核心的中间件，构建了两种模式方案：S-Store 和 X-Store，中间件是介于POS 系统中的操作系统软件与用户的应用软件之间，中间件在操作系统、网络和数据库之上，应用软件的下层，总的作用是为处于自己上层的应用软件提供运行与开发的环境，帮助客户灵活、高效地开发和集成复杂的应用软件，同时中间件服务器可以做到数据反馈备份。
      </p>
      <p class="img img_1"></p>
      <p class="has_left_border">
        MPOS数据流，其中MPOS为APP端应用，V8即为原有的收银系统。其中中间部分即为由中间件构成的服务器，包含了支付系统，账单系统以及支付方式的接口和中间库，中间库负责接收MPOS 上传的数据和反馈MPOS需要的数据，例如：商品信息、店铺信息等等。
      </p>
      <p class="dashed_line"></p>
      <p>由于国际品牌具有庞大的跨国业务，业务量比较大，跨区域支付过程繁琐， POSPi 通过这两种模式，在不影响原有系统下可以实现无缝接入国际一线品牌 ERP, 做到真正的高效移动支付，减少不必要的繁琐支付过程，解决了这一大痛点。</p>
    </section>
    <section class="customer_item">
      <p>S-STORE
      </p>
      <p class="blue_line"></p>
      <p class="img img_2"></p>
      <p class="img img_3"></p>

      <p class="has_left_border">
        图二展示了在店铺PC POS和移动POS端接入了S-Store 服务器，通过数据交换以及应用程序接口，做到了数据实时上传回流，方便快捷地接入企业客户的ERP服务器中。
      </p>
      <p class="dashed_line"></p>
      <p>
        • &nbsp;&nbsp;  S-Store 无缝对接原有的收银系统，没有独立业务操作入口，仅作为原有的收银系统 Mobile POS 数据接口服务使用，对原业务操作无影响；
<br>• &nbsp;&nbsp;  可与传统 POS 并行, 也可独立使用 Mobile POS。
      </p>
    </section>
    <section class="customer_item">
      <p>X-STORE
      </p>
      <p class="blue_line"></p>
      <p class="img img_4"></p>
      <p class="img img_5"></p>

      <p class="has_left_border">
        图三展示了店铺Mobile POS 基于VPN & Internet通过APi 数据交换以及应用程序接口，做到了数据实时上传反馈，方便快捷地接入企业客户的ERP服务器中。 
      </p>
      <p class="dashed_line"></p>
      <p>
       •   &nbsp;&nbsp; 新技术框架，独立的促销引擎入口，功能拓展容易；
<br>•&nbsp;&nbsp;  完全基于移动技术框架，后期门店硬件及网络投入成本低，可实现门店快速、灵活的部署能力；
<br>•&nbsp;&nbsp;  满足未来十年门店运营拓展要求，可完全取代传统 PC POS。</p>
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
    .banner
      text-align: center
      bg_dpr_jpg('~images/img_Access_banner')
    .customer_item
      padding: 0 0.533333rem
      margin: 1.6rem 0
      color: #333
      font-size: 0.373333rem
      line-height: 0.533333rem
      letter-spacing: 0.053333rem
      &>p
        margin-bottom: 0.8rem
      &>p:nth-child(1)
        text-align: center
        font-size: 0.533333rem
        line-height: 0.746667rem
        font-weight: bold
      .blue_line
        position: relative
        left: 50%
        transform: translateX(-50%)
      &>p:last-child
        margin-bottom: 0
      .has_left_border
        padding-left: 0.533333rem
        border-left: 0.08rem solid #6A97E8
        font-weight: bold
        line-height: 0.693333rem
      .dashed_line
        width: 2.133333rem
        height: 0.053333rem
        bg_dpr('~images/img_Access_Line')
      .img_1
        width: 8.96rem
        height: 11.36rem
        margin-left: auto
        margin-right: auto
        bg_dpr_jpg('~images/img_Access_img')
      .img_2
        width: 8.293333rem
        height: 9.946667rem
        margin-left: auto
        margin-right: auto
        bg_dpr_jpg('~images/img_Access_img2')
      .img_3
        width: 8.266667rem
        height: 21.066667rem
        margin-left: auto
        margin-right: auto
        bg_dpr_jpg('~images/img_Access_img3')
      .img_3
        width: 8.266667rem
        height: 21.066667rem
        margin-left: auto
        margin-right: auto
        bg_dpr_jpg('~images/img_Access_img3')
      .img_4
        width: 8.293333rem
        height: 10.426667rem
        margin-left: auto
        margin-right: auto
        bg_dpr_jpg('~images/img_Access_img4')
      .img_5
        width: 7.12rem
        height: 8.0rem
        margin-left: auto
        margin-right: auto
        bg_dpr_jpg('~images/img_Access_img5')
</style>