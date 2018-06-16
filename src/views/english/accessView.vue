<template>
  <div class="content">
    <div class="banner">
      <p>Seamless access</p>
      <p class="blue_line"></p>
      <p>
          Traditional international first-line brand retail is the solution based on PC, Mobile POS can seamless access to its low cost of the existing system, ERP, CRM, and to provide simple and efficient and feasible Mobile cashier payment scheme
      </p>
    </div>
    <section class="customer_item">
      <p>
        POS system is divided into front port and back port
      </p>
      <p class="blue_line"></p>
      <p>
          The front port is the PC POS of the client, and the back port contains ERP, distribution and database. POSPi middleware based on core, constructs two modes: S - Store and X - Store, middleware is between POS system between the operating system software and the user's application software, middleware in the operating system, network and database, application software of the lower level, the overall effect is to provide in their upper application software operation and development of environment, help clients flexible and efficient development and integration of complex application software, middleware server can do feedback data backup at the same time      
        </p>
      <p class="img img_1"></p>
      <p class="has_left_border">
        MPOS data stream, where MPOS is APP terminal application, and V8 is the original receiving system. The middle part is as the middleware server that contains the payment system, billing system as well as the payment interface and middle library, library is responsible for receiving the MPOS upload data and feedback among MPOS needed data, such as: commodity information, store information, and so on
      </p>
      <p class="dashed_line"></p>
      <p>
        Since international brands have a large transnational business, the business volume is relatively large, and the cross-regional payment process is cumbersome. POSPi adopts these two models to realize seamless access to the international first-line brand ERP without affecting the original system, so as to achieve real efficient mobile payment and reduce unnecessary red tape payment process, which solves this major pain point.
      </p>
    </section>
    <section class="customer_item">
      <p>S-STORE
      </p>
      <p class="blue_line"></p>
      <p class="img img_2"></p>
      <p class="img img_3"></p>

      <p class="has_left_border">
        shows the store Mobile POS based on VPN & Internet via APi data exchange and application interface, which enables real-time data uploading and feedback of data, which is convenient and convenient for access to enterprise customers' ERP server
      </p>
      <p class="dashed_line"></p>
      <p>
        • &nbsp;&nbsp;  S-Store seamlessly connects to the original cashier system, and doesn’t have independent business operation entrance, which is only used as the original receiving system Mobile POS data interface service, which has no effect on the original business operation.
        <br>• &nbsp;&nbsp;  With traditional POS in parallel, can also be used independently Mobile POS
      </p>
    </section>
    <section class="customer_item">
      <p>X-STORE
      </p>
      <p class="blue_line"></p>
      <p class="img img_4"></p>
      <p class="img img_5"></p>

      <p class="has_left_border">
        shows the store Mobile POS based on VPN & Internet via APi data exchange and application interface, which enables real-time data uploading and feedback of data, which is convenient and convenient for access to enterprise customers' ERP server 
      </p>
      <p class="dashed_line"></p>
      <p>
         • &nbsp;&nbsp;  New technology framework, independent promotion engine entrance, easy to expand functions
       <br> • &nbsp;&nbsp; Completely based on the mobile technology framework, low cost of hardware and network input in later stores can realize fast and flexible deployment capability of stores
        <br>• &nbsp;&nbsp; Meet the requirements of store operation and development in the next ten years, and can completely replace the traditional PC POS
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