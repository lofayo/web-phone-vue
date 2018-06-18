<template>
  <div class="hardware_box">
    <hardwareComponent v-for='(hardware, index) of hardwareData' :key='index' :hardware='hardware' :index='index' />
  </div>
</template>
<script>

  import hardwareComponent from '@/components/hardwareComponent'

  export default {
    data() {
      return {
        hardwareData: [
          {
            title: 'mPOP',
            desTitle: 'Simple smart cash box with printing machine',
            desLists: ["1.Suitable for all major mobile operating systems, small and stylish, powerful", "2.Compact mobile POS design can be placed anywhere", "3.100mm per second printing, Bluetooth connection, a power cable can be fully operational", "4.Four vertical banknote spacing and flexible six or eight coin slots"],
            moreUrl: '../pdf/英文mPOP.pdf'
          },
          {
            title: 'E500',
            desTitle: 'Advanced and stylish integrated intelligent terminal',
            desLists: ["1.Based on Android system, highly integrated various function modules", "2.Supports Omni-channel payment with automatic cutting of printers ", "3.Large-capacity battery provides long life ", "4.Immediately have the latest technology for higher traffic and better business management"],
            moreUrl: '../pdf/E500中文%20.pdf'
          },
          {
            title: 'D800',
            desTitle: 'A new generation of desktop smart terminals',
            desLists:  ["1.Flat style design, elegant and stylish", "2.7-inch color capacitive touch screen and multim… perfect self-service experience and interaction ", "3.Particularly suitable for applications such as …self-service, merchandise retail management, etc ", "4.Satisfy electronic payment functions such as ba…rd credit card spending and self-service payment ", "5.It can have merchandise Invoicing management, catalog sales, advertising and other functions"],
            moreUrl: '../pdf/中文%20%20PAX%20D800.pdf'
          }
        ]
      }
    },
    components: {
      hardwareComponent
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
  @import '../../../static/css/mixin.styl'
  
  .hardware_box /deep/
    &>div:nth-child(2n)
      background: #F9F9F9
    &>div:nth-child(1)
      .item_img
        bg_dpr_contain('~images/img_Desktop_MPOP')
      .logo_img
        bg_dpr('~images/img_Desktop_STAR')
    &>div:nth-child(2)
      .item_img
        bg_dpr_contain('~images/img_Desktop_E500')
      .logo_img
        bg_dpr('~images/img_Desktop_PAX')
    &>div:nth-child(3)
      .item_img
        bg_dpr_contain('~images/img_Desktop_D800')
      .logo_img
        // background: url('~images/img_Printer_EPSON.png') no-repeat center / 100% 100%
        bg_dpr('~images/img_Desktop_PAX')
    

</style>
