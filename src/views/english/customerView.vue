<template>
  <div class="content">
    <div class="banner">
      <p>Our Shared vision has become a reality</p>
      <p class="blue_line"></p>
      <p style="letter-spacing: 0.08rem">We are committed to establishing long-term cooperative relationship with customers and become their reliable partner. The unique partnership allows us to create a dedicated team to master and maintain professional knowledge for specific clients, and to seek for improvement and efficiency in the overall process over time</p>
    </div>
    <section class="all_customers"></section>
    <section class="customer_item">
      <p class="item_banner_1"></p>
      <p>innisfree</p>
      <p class="blue_line"></p>
      <p>
        Innisfree (innisfree) is a South Korean cosmetics brand, is also the first cosmetics group by Korea Amorepacific group with great natural cosmetics, and is the perfect combination of high-tech and natural. Shanghai -- (U.S. business information) -- the first time that apple retail stores have implemented a no-counter; mobile checkout has created a whole new shopping experience. This completely subverting the traditional mode of innovation and collection, now officially implemented in Innisfree stores, the customer experience has been upgraded to unprecedented new heights. As one of the fastest growing brands of Amorepacific, Innisfree continues this innovative spirit, which has continued to grow exponentially over the past four years, especially in the Chinese market. Innisfree attaches great importance to customer satisfaction, and Mobile POS can provide a more personalized and interactive high standard service for each customer in the retail store. The shop assistants are now equipped with a small Mobile POS, which has not only successfully eliminated the queuing phenomenon, but also the staff can respond to the various demands of the customers at anytime and anywhere. "POSPi is an innovation-driven company focused on mobile retail technology," said LeiMin Shao, founder of POSPi. We have solved the problem of the large multinational retailers in the existing IT business system, and successfully integrated various payment schemes into one platform. With innisfree's input, the security, reliability and convenience of the whole system are verified
      </p>
      <router-link to='/allInOneEn'><p class="more">solution</p></router-link>
    </section>
    <section class="customer_item">
      <p class="item_banner_2"></p>
      <p>M.A.C</p>
      <p class="blue_line"></p>
      <p>
        M.A.C is the flagship cosmetics brand of Estee Lauder company in the United States. It is known for its beauty makeup and cosmetics, while Estee Lauder company is a leading global manufacturer and distributor. Estee lauder's M.A.C brand has been sold in 90 countries since 1994 as part of Estee Lauder group. The brand has teamed up with POSPi in China to create a smart outlet for online and offline integration. Big data, software and hardware of intelligent ration and through the CRM implementation stores in the Internet, digital, electronic management and marketing service platform of consumption, its core is completely solve the problem of the transaction management of merchants and consumers, focusing on the perfection of the customer experience and customer service excellence.
<br>
<br>
Through Mobile devices, M.A.C employees can log in to Mobile POS and immediately access customers and product information. Meanwhile, they can track customers' shopping preference, and then use these data to encourage potential customers in the future and enhance the continuous appeal of brand products to customers

</p>
      <router-link to='/allInOneEn'><p class="more">solution</p></router-link>
    </section>
    <section class="customer_item">
      <p class="item_banner_3"></p>
      <p>new life</p>
      <p class="blue_line"></p>
      <p>
        New life was founded in South Korea on May 30, 1994, has been for more than twenty years with high quality products and excellent enterprise image stands in the cosmetics industry in China, set up nearly 60 branches in China, more than 900 employees, annual sales of more than 5 billion yuan, to provide customers with quality services. As pure, healthy enterprise, has been to help customers realize the dream and customer-focused culture amorous feelings is famous for its new life is different from other brand marketing model, but with the method of direct sales, driven by dealers industry chain, it increases the difficulty of the management of the dealers and customers. POSPi combines with new life group to create a smart solution that is truly applicable to the direct selling model, and establishes the personalized dealer platform and WeChat CRM system and SCM data analysis engine. It realizes the offline personalized one-to-one shopping channel sales and online software marketing and dynamic customer management, and helps the dealers to improve the membership flow, member activity and strengthen the management system of the operation department
      </p>
      <router-link to='/allInOneEn'><p class="more">solution</p></router-link>
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

  @import '../../../static/css/mixin.styl'
  .content
    text-align: center
    .banner
      height: auto
      padding: 1.6rem 0.533333rem
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