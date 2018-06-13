<template>
  <div class="content">
    <div class="banner">
      <p>共同的愿景变成了现实</p>
      <p class="blue_line"></p>
      <p style="letter-spacing: 0.08rem">我们致力于与客户建立长期的合作关系，成为他们信赖的合作伙伴。独特的伙伴关系让我们打造出专属团队，以掌握和维护面向特定客户的专业知识，随着时间的推移寻求整体流程的改进和效率的提升。</p>
    </div>
    <section class="all_customers"></section>
    <section class="customer_item">
      <p class="item_banner_1"></p>
      <p>innisfree</p>
      <p class="blue_line"></p>
      <p>
        innisfree（悦诗风吟）是韩国化妆品品牌，也是由韩国第一化妆品集团AmorePacific爱茉莉太平洋集团潜心研制的自然主义化妆品，是高科技和自然的完美结合。上海--(美国商业信息)--在苹果零售店首次实施的无柜台化、移动化收银打造了全新的购物体验。这个完全颠覆了传统的创新收银模式,现在正式在Innisfree 门店得到实施运用，将客户体验提升到了前所未有的新高度。悦诗风吟作为爱茉莉太平洋旗下成长最快的品牌之一，Innisfree 延续了这种创新精神，在过去四年内持续呈几何级数增长，尤其是在中国市场， Innisfree 十分重视顾客满意度，Mobile POS的使用能够为零售店的每个顾客提供更加个性化、互动性更好的高标准服务。店员目前都配备了一台小巧的 Mobile POS ，不仅成功地消除了排队现象，而且店内人员可以随时随地回应处理客户的各类需求。”
        \u2028POSPi创始人邵雷敏表示：“ POSPi是专注于移动零售科技的创新型驱动公司，我们在技术上解决了大型跨国零售商如何在既存的IT业务系统下，无缝对接原有系统的问题，并成功将各种支付方案集成到一个平台上操作。随着innisfree的投入使用，验证了整个系统的安全性、可靠性和便利性。”
      </p>
      <router-link to='/allInOne'><p class="more">解决方案</p></router-link>
    </section>
    <section class="customer_item">
      <p class="item_banner_2"></p>
      <p>M.A.C</p>
      <p class="blue_line"></p>
      <p>
        M.A.C 是美国雅诗兰黛公司旗下的化妆品旗舰品牌，以美妆、彩妆闻名，同时雅诗兰黛公司是全球领先的大型生产商和销售商。雅诗兰黛旗下 M.A.C 品牌从1994年起作为雅诗兰黛集团的一部分，在全球90个国家销售。其品牌并在中国与POSPi 联手打造了线上线下完美融合的智慧门店。融合大数据、智能软件和硬件配给并通过CRM实现店铺互联网化、数据化、电子化的消费管理和营销服务平台，其核心是彻底解决商户和消费者的交易管理问题，专注于顾客的极致体验和为顾客服务的卓越意识。
        <br>
        <br>
        通过移动设备，M.A.C 店员可以登录手中的 Mobile POS         并立即访问顾客和产品信息，同时可以跟踪到顾客的购物偏好，然后使用这些数据来鼓励未来的潜在客户，增进品牌产品对顾客的持续吸引力。</p>
      <router-link to='/allInOne'><p class="more">解决方案</p></router-link>
    </section>
    <section class="customer_item">
      <p class="item_banner_3"></p>
      <p>新生活</p>
      <p class="blue_line"></p>
      <p>
        新生活于1994年5月30日在韩国创建，二十多年来一直以优质的产品和优秀的企业形象屹立在中国的化妆品界，在中国设立了近60家分支机构，超过900余名的员工，年销售额超过50亿人民币，为顾客提供优质的服务。作为纯洁、健康的企业，一直以帮助顾客实现夙愿和以顾客为中心的文化风情闻名，新生活不同于其他品牌的营销模式，而是采用直销的方式，通过经销商来带动产业链，这就加大了对经销商及顾客的管理难度。

        POSPi 联合新生活集团共同打造了真正适用于直销模式的智能解决方案，建立个性化经销商平台和微信 CRM 系统以及 SCM数据分析引擎，实现了线下的个性化一对一导购式全渠道销售以及线上的软文营销和动态客户管理，帮助经销商提高了会员流入量、会员活跃度，强化运营部门的的管理体系。
      </p>
      <router-link to='/allInOne'><p class="more">解决方案</p></router-link>
    </section>
    <section class="customer_item">
      <div class="item_banner_4"></div>
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
      bg_dpr_jpg('~images/img_Customer_banner')
    .all_customers
      width: 8.293333rem
      height: 6.026667rem
      margin: 0.853333rem auto
      bg_dpr('~images/img_Customer_img1')
    .customer_item
      margin-bottom: 1.066667rem
      color: #333
      &>p
        margin-bottom: 0.533333rem
      &>p:nth-child(1)
        margin-bottom: 1.6rem
        width: 10.0rem
        height: 6.133333rem
      &>p:nth-child(2)
        font-size: 0.533333rem
        line-height: 0.746667rem
        font-weight: bold
      &>p:nth-child(4)
        font-size: 0.373333rem
        line-height: 0.533333rem
        padding: 0 0.533333rem
        text-align: left
      .item_banner_1
        bg_dpr_jpg('~images/img_Customer_img2')
      .item_banner_2
        bg_dpr_jpg('~images/img_Customer_img2 Copy')
      .item_banner_3
        bg_dpr_jpg('~images/img_Customer_img2 Copy 2')
      .item_banner_4
        width: 8.293333rem
        height: 6.72rem
        margin: 0.853333rem auto
        bg_dpr('~images/img_home_img3')

</style>